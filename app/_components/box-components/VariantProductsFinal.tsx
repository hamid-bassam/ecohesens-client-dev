"use client";

export type VariantProductsFinalProps = {
  productVariantId: string;
  suggestionId: string;
};

import { useRecoilValue, useSetRecoilState } from "recoil";
import { Button } from "../../../src/components/ui/button";
import { BoxState } from "../../services/boxService";
import { boxStateFinal } from "../../state/boxStateFinal";

export const VariantProductsFinal = (props: VariantProductsFinalProps) => {
  const setBox = useSetRecoilState(boxStateFinal);
  const box = useRecoilValue(boxStateFinal);

  const getProductVatiant = () => {
    return box?.suggestions
      .find((suggestion) => suggestion.id === props.suggestionId)
      ?.products.find(
        (product) => product.product.variantId === props.productVariantId
      );
  };
  const getImageUrl = () => {
    const product = getProductVatiant();
    return (
      (product?.product.featuredImage as { url: string }).url ??
      "https://ecohesens.com/cdn/shop/files/Designsanstitre_9.png?v=1705573072&width=800"
    );
  };
  const updateBox = () => {
    // console.log("updateBox");
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
                  if (product.product.variantId === props.productVariantId) {
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
      } else return null;
    });
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <Button
        variant="outline"
        onClick={() => updateBox()}
        key={props.productVariantId}
        className="  border-muted px-0 w-16 h-16 rounded-xl dark:text-black text-white text-xs font-bold 
dark:group-hover/card:shadow-sm dark:group-hover/card:shadow-white group-hover/card:shadow-sm group-hover/card:shadow-black/20
dark:hover:bg-white/70 hover:bg-muted bg-muted/10"
      >
        {/* TODO nextImage */}
        <img
          src={getImageUrl()}
          height={150}
          width={150}
          className="h-16 w-auto  object-cover rounded-xl "
          alt="thumbnail variant product"
        ></img>
      </Button>
    </div>
  );
};
