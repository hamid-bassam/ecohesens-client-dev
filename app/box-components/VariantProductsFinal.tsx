"use client";

import { Button } from "../../src/components/ui/button";
export type VariantProductsFinalProps = {
  productId: string;
  suggestionId: string;
};

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { BoxState, boxStateFinal } from "../state/boxStateFinal";




export const VariantProductsFinal = (props: VariantProductsFinalProps) => {

  const setBox = useSetRecoilState(boxStateFinal);
  const box = useRecoilValue(boxStateFinal);
  const updateBox = () => {
    console.log("updateBox");
    setBox((prevBox: BoxState | null) => {
      if (prevBox !== null) {

        console.log("prevBox", prevBox);
        // console.log(props.suggestionId, props.productId);
        return {
          ...prevBox,
          suggestions: prevBox.suggestions.map((suggestion) => {
            if (suggestion.id === props.suggestionId) {
              return {
                ...suggestion,
                products: suggestion.products.map((product) => {
                  if (product.id === props.productId) {
                    return { ...product, isVariant: false };
                  }
                  return { ...product, isVariant: true };
                }),
              };
            }
            console.log("sugges", suggestion);
            return suggestion;
          }),
        };

      }
      else return null;
    });
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <Button variant="outline" onClick={() => updateBox()} key={props.productId} className="  border-muted px-0 w-10 h-10 rounded-xl dark:text-black text-white text-xs font-bold 
dark:group-hover/card:shadow-sm dark:group-hover/card:shadow-white group-hover/card:shadow-sm group-hover/card:shadow-black/20
dark:hover:bg-white/70 hover:bg-muted bg-muted/10" >

        <img
          src={
            // box?.suggestions.forEach((suggestion) => {
            //   if (suggestion.id === props.suggestionId) {
            //     return suggestion.products.forEach((product) => {
            //       if (product.id === props.productId) {
            //         console.log("imgURL $$$$$$", product.imageURL);
            //         return product.imageURL;
            //       }
            //     });
            //   }
            // }) ??


            //parcourir suggestions de box filtrer par id puis parcourtir products filtrer par id
            // output  l'image produit product.imageURL

            box?.suggestions.filter((suggestion) => suggestion.id === props.suggestionId)[0].products.filter((product) => product.id === props.productId)[0].imageURL ?? "https://ecohesens.com/cdn/shop/files/Designsanstitre_9.png?v=1705573072&width=800"

          }
          height={150}
          width={150}
          className="h-10 w-auto  object-cover rounded-xl "
          alt="thumbnail variant product">
        </img>

      </Button>
      <p className="text-primary">
        {
          box?.suggestions.map((suggestion) => {
            if (suggestion.id === props.suggestionId) {
              return suggestion.products.map((product) => {
                if (product.id === props.productId) {
                  return product.name + " " + product.price + "€";
                }
              });
            }
          })
        }
      </p>
    </div>
  );
}