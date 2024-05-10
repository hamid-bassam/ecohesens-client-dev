"use client";
import { useRecoilValue } from "recoil";
import { Button } from "../../../src/components/ui/button";
import { Section } from "../../../src/features/layout/Section";
import { boxStateFinal } from "../../state/boxStateFinal";
import { BuyButton } from "./BuyButton";
import { Separator } from "@/components/ui/separator";

export type PriceAndBuyButtonProps = {};

export const PriceAndBuyButton = (props: PriceAndBuyButtonProps) => {
  const box = useRecoilValue(boxStateFinal);

  const getTotalPrice = () => {
    if (!box?.suggestions) return 0; // Retourne 0 si aucune suggestion n'est disponible

    return box.suggestions.reduce((totalPrice, suggestion) => {
      const primaryProduct = suggestion.products.find((p) => !p.isVariant);
      return totalPrice + (primaryProduct ? primaryProduct.product.price : 0);
    }, 0);
  };

  return (
    <Section>
      <div className="container max-w-4xl bg-[#f1e1d5] p-8 pb-16 pt-12 mb-16">
        <h3 className="text-3xl font-thin text-center text-primary">
          Votre commande
        </h3>
        <Separator className="my-4" />
        <br />
        <div className="grid grid-cols-2 gap-4 ">
          <div>Sous Total</div>

          <div className="flex justify-end">{getTotalPrice().toFixed(2)} €</div>
          <div>Livraison</div>

          <div className="flex justify-end">-- €</div>
          <div>Total</div>
          <div className="flex justify-end">
            <p className="font-bold">{getTotalPrice().toFixed(2)} €</p>
          </div>
        </div>
        {/* <div className="flex justify-center w-full items-center ">
          <div className="flex  items-center gap-3">
            <Button variant="outline"> */}
        {/* {box?.suggestions.map((s, price: number = 0) => price + Number(s.products.filter(p => !p.isVariant)[0].price))} € */}
        {/* Total Price: {getTotalPrice().toFixed(2)} €
            </Button>
            <BuyButton />
          </div>
        </div> */}
        <Separator className="my-4" />
        <div className="flex justify-center w-full items-center ">
          <div className="flex  items-center gap-3">
            <Button className="rounded-full h-14 px-14">
              Finaliser la commande
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
