import { Header } from "@/features/layout/Header";
import { Spacing } from "@/features/layout/Spacing";
import { Section } from "../../../src/features/layout/Section";
import prisma from "../../../src/lib/prisma";
import { WavyBackgroundDemo } from "../../_components/WavyBackGroundDemo";
import { PriceAndBuyButton } from "../../box-components/PriceAndBuyButton";
import { SetAtomicStateFinal } from "../../box-components/SetAtomicStateFinal";
import { Suggestion } from "../../box-components/Suggestion";
import { BoxState, ProductState, SuggestionState } from "../../state/boxStateFinal";



export default async function BoxComponentServer({ params }: { params: { id: string } }) {

  const { id } = params;



  const box: BoxState = await prisma.box.findUnique({
    where: { id: id as string },
    include: {
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

  console.log(JSON.stringify(state, null, 2));

  return (
    <main>
      <Header />
      <WavyBackgroundDemo />
      <Spacing size="md" />
      <SetAtomicStateFinal boxState={state} />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {box.suggestions.map((suggestion) => <Suggestion key={suggestion.id} suggestionId={suggestion.id} />)}
        </div>
      </Section>
      <PriceAndBuyButton prop={"hello"} />
    </main>
  );

};