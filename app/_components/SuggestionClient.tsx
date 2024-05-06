"use client";
import { Suggestion } from "@prisma/client";
import { useRecoilValue } from "recoil";
import { CardBody, CardContainer, CardItem } from "../../src/components/ui/3d-card";
import { Button } from "../../src/components/ui/button";
import { Section } from "../../src/features/layout/Section";
import { Spacing } from "../../src/features/layout/Spacing";
import { boxState } from "../state/boxState";
import { VariantProducts } from "./VariantProducts";

export type SuggestionClientProps = {
  suggestion: Suggestion
};

export const SuggestionClient = (props: SuggestionClientProps) => {
  const box = useRecoilValue(boxState);
  // ici le state passe en props 
  return (
    <Section>
      {/* {[1, 2, 3, 4, 5, 6].map((i) => ( */}
      {/*  box?suggestions.map(s => return ... ) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <CardContainer key={"x"} className="inter-var w-full max-w-sm ">
          <CardBody className="bg-slate-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
            <CardItem as="div" translateZ="100" className="flex flex-col gap-4 items-center">
              {
                box?.suggestions[0].products.filter((product) => product.isVariant === false).map((product) => (
                  // <div key={product.id} className="flex flex-col items-start ">
                  //   <div
                  //     className=" font-bold text-neutral-600 dark:text-white"
                  //   >
                  //     {product.name}
                  //   </div>
                  //   <p
                  //     className="text-neutral-500 text-xs pt-2 dark:text-neutral-300"
                  //   >
                  //     {product.description}
                  //   </p>
                  // </div>
                  <div className="flex gap-4 items-center">
                    <img
                      src={product.imageURL ?? "https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"}

                      height={1000}
                      width={1000}
                      className="h-32 w-auto object-cover rounded-xl dark:group-hover/card:shadow-white dark:group-hover/card:shadow-md group-hover/card:shadow-xl"
                      alt="principal product"
                    />
                    {/* <Suspense key={product.id} fallback={<p>loading...</p>}>
                <BocContentSuspensTest mainProductIdId={product.id} /> */}
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
                    </div>
                    {/* </Suspense> */}
                    {/* <Suspense key={props.boxId + "X"} fallback={<p>loading other props...</p>}>
              <BoxContentSuspensOther boxId={props.boxId} />
            </Suspense> */}
                  </div>
                ))
              }
              <div className="flex justify-between items-center gap-2 mt-4">
                {/* {[1, 2, 3, 4].map((i) => (
              
              <Button key={i} variant="outline" className=" px-0 w-10 h-10 rounded-xl bg-black dark:bg-white  dark:text-black text-white text-xs font-bold 
              dark:group-hover/card:shadow-md dark:group-hover/card:shadow-white group-hover/card:shadow-md group-hover/card:shadow-black/20
              dark:hover:bg-white/70 hover:bg-muted bg-muted/10" >
              
              <img
              src="https://ecohesens.com/cdn/shop/files/Designsanstitre_9.png?v=1705573072&width=800"
              height={10}
              width={10}
              className="h-10 w-auto  object-cover rounded-xl "
              alt="thumbnail variant product">
              </img>
              </Button>
            )
          )} */}
                {
                  box?.suggestions[0].products.map((suggestion) => (
                    suggestion.isVariant && <VariantProducts key={suggestion.id} productId={suggestion.id} suggestionId={box?.suggestions[0].id} boxWithDetails={box} />
                  ))
                }


              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <Spacing size="sm" />
      <div className="flex justify-center w-full items-center ">
        <div className="flex  items-center gap-3">
          <Button variant='outline'>
            {box?.suggestions.map((s, price = 0) => price + s.products.filter(p => !p.isVariant)[0].price)} €
          </Button>
          <Button>Buy</Button>
        </div>
      </div>
    </Section>
  )
};