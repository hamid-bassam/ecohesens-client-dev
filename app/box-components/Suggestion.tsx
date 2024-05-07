'use client'
import { useRecoilValue } from "recoil";
import { CardBody, CardContainer, CardItem } from "../../src/components/ui/3d-card";
import { boxStateFinal } from "../state/boxStateFinal";
import { VariantProductsFinal } from "./VariantProductsFinal";

export type SuggestionProps = {
  suggestionId: string;
};

export const Suggestion = (props: SuggestionProps) => {
  const box = useRecoilValue(boxStateFinal);
  if (box === undefined || box === null) {
    return <p> Box not found </p>;
  }
  const suggestions = box.suggestions;
  const suggestion = suggestions.find(suggestion => suggestion.id === props.suggestionId);

  if (suggestion === undefined || suggestion === null) {
    return <p> Suggestion not found </p>;
  }
  return (

    <CardContainer key={props.suggestionId} className="inter-var w-full max-w-sm ">
      <CardBody className="bg-muted/50  relative group/card  dark:hover:shadow-md dark:hover:shadow-emerald-500/[0.1] h-auto rounded-xl p-6 border  ">
        {/* dark:bg-black dark:border-white/[0.2] */}
        {/* border-black/[0.1]  */}
        <CardItem as="div" translateZ="100" className="flex flex-col gap-4 items-center">
          {
            suggestion.products.filter((product) => product.isVariant === false).map((product) => (
              <div key={product.id} className="flex gap-4 items-center">
                <img
                  src={product.imageURL ?? "https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"}
                  height={1000}
                  width={1000}
                  className="h-32 w-auto object-cover rounded-xl dark:group-hover/card:shadow-white dark:group-hover/card:shadow-md group-hover/card:shadow-black/30 group-hover/card:shadow-sm"
                  alt="principal product"
                />
                <div className="flex flex-col items-start ">
                  <div
                    className=" font-bold text-neutral-600 dark:text-white"
                  >
                    {product.name ?? "object null doumams techniquement tachtiquement "}
                  </div>
                  <p
                    className="text-neutral-500 text-xs pt-2 dark:text-neutral-300"
                  >
                    {
                      product.description ?? "Ce soin quotidien est un allié pour ceux qui cherchent à revitaliser leur peau avec une approche naturelle et biologique. Formulé à partir de cellules végétales de lys, il cible les signes visibles de l'âge en rendant la peau plus dense et élastique"
                    }
                  </p>
                  <p>
                    {product.price ?? 0} €
                  </p>
                </div>
              </div>
            ))
          }
          <div className="flex justify-between items-center gap-2 mt-4">
            {
              suggestion.products.map((product) => (
                product.isVariant && <VariantProductsFinal key={product.id} suggestionId={suggestion.id} productId={product.id} />
              ))
            }
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>

  );
};