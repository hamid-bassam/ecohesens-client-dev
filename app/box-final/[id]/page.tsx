import { Spacing } from "@/features/layout/Spacing";
import { Header } from "../../../src/features/layout/Header";
import { Section } from "../../../src/features/layout/Section";
import prisma from "../../../src/lib/prisma";
import { PriceAndBuyButton } from "../../box-components/PriceAndBuyButton";
import { SetAtomicStateFinal } from "../../box-components/SetAtomicStateFinal";
import { Suggestion } from "../../box-components/Suggestion";
import { BoxState, ProductState, SuggestionState } from "../../state/boxStateFinal";



export default async function BoxComponentServer({ params }: { params: { id: string } }) {

  const { id } = params;



  const box: BoxState = await prisma.box.findUnique({
    where: { id: id as string },
    include: {
      user: {
        select: {
          id: true,
          firstname: true,
          lastname: true,
          email: true,
        },

      },
      suggestions: {
        include: {
          products: true,
        },
      },
    },
  }) as BoxState;
  // Si aucun produit n'est trouvé, renvoyez une page 404
  if (!box) {
    return { notFound: true };
  }




  const state: BoxState = {
    id: box?.id,
    user: {
      id: box.user.id,
      firstname: box.user.firstname,
      lastname: box.user.lastname,
      email: box.user.email,
    },

    suggestions: box?.suggestions.map((suggestion: SuggestionState) => {
      return {
        id: suggestion.id,
        products: suggestion.products.map((product: ProductState) => {
          return {
            id: product.id,
            isVariant: product.isVariant,
            name: product.name,
            description: product.description,
            price: product.price,
            imageURL: product.imageURL,
          }
        })
      }
    })
  };
  // revalidatePath('/');

  console.log(JSON.stringify(state, null, 2));

  return (
    <main >
      {/* <WavyBackgroundDemo height={70}>
        <></>
      </WavyBackgroundDemo> */}
      <Header />
      <SetAtomicStateFinal boxState={state} />
      {/* <WavyBackgroundDemo minusHeight={18} > */}
      <Spacing size="sm" />
      <Section>

        <div className="rounded-lg  text-muted-foreground ">
          <h1 className="text-3xl ">
            Bonjour <span className="text-primary font-bold">{box.user.firstname + " " + box.user.lastname}</span>,
          </h1>
          <p className="text-xl mt-2 ">
            Voici votre proposition de <strong>Box</strong> personnalisée. Elle se compose de plusieurs suggestions.
            Cliquez sur un produit variant pour le sélectionner.
          </p>
        </div>
      </Section>

      <Spacing size="sm" />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {box.suggestions.map((suggestion) => <Suggestion key={suggestion.id} suggestionId={suggestion.id} />)}
        </div>
      </Section>
      <Spacing size="sm" />

      <PriceAndBuyButton prop={"hello"} />
      {/* </WavyBackgroundDemo> */}
    </main>
  );

};