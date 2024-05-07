import prisma from "@/lib/prisma";
import { BoxState } from "../state/boxStateFinal";
import { PriceAndBuyButton } from "./PriceAndBuyButton";
import { SetAtomicStateFinal } from "./SetAtomicStateFinal";
import { Suggestion } from "./Suggestion";

export type BoxFinalServerProps = {
  id: string;
};



export const BoxFinalServer = async (props: BoxFinalServerProps) => {

  const box: BoxState = await prisma.box.findUnique({
    where: { id: props.id as string },
    include: {
      suggestions: {
        include: {
          products: true,
        },
      },
    },
  }) as BoxState;


  // { id: string, suggestions: { id: string, products: { id: string }[] }[] };


  const state: BoxState = {
    id: box?.id,
    suggestions: box?.suggestions.map(suggestion => {
      return {
        id: suggestion.id,
        products: suggestion.products.map(product => {
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

  // console.log("box prisma transformed to state response ----------", state)
  console.log(JSON.stringify(state, null, 2));
  return (

    <>
      <SetAtomicStateFinal boxState={box} />
      {box.suggestions.map((suggestion) => <Suggestion key={suggestion.id} />)}
      <PriceAndBuyButton prop={"hello"} />
    </>
  )
};