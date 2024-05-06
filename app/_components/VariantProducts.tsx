"use client";

import { Button } from "../../src/components/ui/button";
export type VariantProductsProps = {
  productId: string;
  suggestionId: string;
  boxWithDetails: BoxWithDetails;
};

// components/ChildComponent.js
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { boxState } from '../state/boxState';
import { BoxWithDetails } from "./ClientBoxTest";



export const VariantProducts = (props: VariantProductsProps) => {

  const setBox = useSetRecoilState(boxState);
  const box = useRecoilValue(boxState);
  const updateBox = () => {
    console.log("updateBox");
    setBox((prevBox: BoxWithDetails | null) => {
      if (prevBox !== null) {

        console.log("prevBox", prevBox);
        console.log(props.suggestionId, props.productId);
        return {
          ...prevBox,
          suggestions: prevBox.suggestions.map((suggestion) => {
            if (suggestion.id === props.suggestionId) {
              console.log("suggestion is equality **********", suggestion)
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
      <Button onClick={() => updateBox()} key={props.productId} variant="outline" className=" px-0 w-10 h-10 rounded-xl bg-black dark:bg-white  dark:text-black text-white text-xs font-bold 
dark:group-hover/card:shadow-md dark:group-hover/card:shadow-white group-hover/card:shadow-md group-hover/card:shadow-black/20
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