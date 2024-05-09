"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "../../src/components/ui/button";
import { Section } from "../../src/features/layout/Section";

export function ThreeDCardDemo() {
  return (
    <Section>
      {/* <div className="w-auto flex gap-2"> */}
      {/* <div className="flex-2"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (

          <CardContainer key={i} className="inter-var w-full max-w-sm">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
              {/* 
              <div className="flex justify-between items-center">
                <CardItem translateZ="100" className=" mt-4">

                  <img
                    src="https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"
                    height={1000}
                    width={1000}
                    className="h-40 w-auto object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="principal product"
                  />
                </CardItem>
                <div className="flex flex-col items-start ">
                  <CardItem
                    translateZ="100"
                    className=" max-w-xs font-bold text-neutral-600 dark:text-white"
                  >
                    Make things float in air
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs max-w-xs pt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                </div>
              </div> */}
              <CardItem as="div" translateZ="100" className="flex flex-col gap-4 items-center">
                <div className="flex gap-4 items-center">


                  <img
                    src="https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"
                    height={1000}
                    width={1000}
                    className="h-32 w-auto object-cover rounded-xl dark:group-hover/card:shadow-white dark:group-hover/card:shadow-md group-hover/card:shadow-xl"
                    alt="principal product"
                  />

                  <div className="flex flex-col items-start ">
                    <div
                      className=" font-bold text-neutral-600 dark:text-white"
                    >
                      Soin jour multi actif - Centifolia
                    </div>
                    <p


                      className="text-neutral-500 text-xs pt-2 dark:text-neutral-300"
                    >
                      Ce soin quotidien est un allié pour ceux qui cherchent à revitaliser leur peau avec une approche naturelle et biologique. Formulé à partir de cellules végétales de lys, il cible les signes visibles de l'âge en rendant la peau plus dense et élastique                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-2 mt-4">
                  {[1, 2, 3, 4].map((i) => (

                    <Button key={i} variant="outline" className=" px-0 w-10 h-10 rounded-xl  dark:bg-white  dark:text-black text-white text-xs font-bold 
                    dark:group-hover/card:shadow-md dark:group-hover/card:shadow-white group-hover/card:shadow-md group-hover/card:shadow-black/20
                    dark:hover:bg-white/70 hover:bg-muted bg-muted/10" >
                      {/* dark:hover:bg-secondary hover:bg-muted/10 bg-muted */}
                      <img
                        src="https://ecohesens.com/cdn/shop/files/Designsanstitre_9.png?v=1705573072&width=800"
                        height={10}
                        width={10}
                        className="h-10 w-auto  object-cover rounded-xl "
                        alt="thumbnail variant product">
                      </img>
                    </Button>
                  )
                  )}
                </div>
                {/* <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem> */}
              </CardItem>
            </CardBody>
          </CardContainer>
        )
        )}
      </div>
      {/* </div> */}
      {/* <div className="bg-secondary">sep</div>
        <div className=" flex-[1/4] bg-black">
          <p>this is an example</p>
        </div> */}
      {/* </div> */}
    </Section>
  );
}
