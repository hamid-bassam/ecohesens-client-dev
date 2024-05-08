"use client";
import { useRecoilValue } from "recoil";
import { Button } from "../../../src/components/ui/button";
import { Section } from "../../../src/features/layout/Section";
import { boxStateFinal } from "../../state/boxStateFinal";
import { BuyButton } from "./BuyButton";


export type PriceAndBuyButtonProps = {

};

export const PriceAndBuyButton = (props: PriceAndBuyButtonProps) => {
  const box = useRecoilValue(boxStateFinal);

  const getTotalPrice = () => {
    if (!box?.suggestions) return 0; // Retourne 0 si aucune suggestion n'est disponible

    return box.suggestions.reduce((totalPrice, suggestion) => {
      const primaryProduct = suggestion.products.find(p => !p.isVariant);
      return totalPrice + (primaryProduct ? primaryProduct.product.price : 0);
    }, 0);
  };



  return (
    <Section>
      <div className="flex justify-center w-full items-center ">
        <div className="flex  items-center gap-3">
          <Button variant='outline'>
            {/* {box?.suggestions.map((s, price: number = 0) => price + Number(s.products.filter(p => !p.isVariant)[0].price))} € */}
            Total Price: {getTotalPrice().toFixed(2)} €
          </Button>
          <BuyButton />
        </div>
      </div>
    </Section>
  );
};