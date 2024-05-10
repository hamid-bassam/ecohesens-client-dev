"use client";
import { useRecoilValue } from "recoil";

import Image from "next/image";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../src/components/ui/3d-card";
import { Button } from "../../../src/components/ui/button";
import { Card } from "../../../src/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../src/components/ui/dialog";
import { boxStateFinal } from "../../state/boxStateFinal";
import { Loading } from "../Loading";
import { VariantProductsFinal } from "./VariantProductsFinal";

export type SuggestionProps = {
  suggestionId: string;
};

export const Suggestion = (props: SuggestionProps) => {
  const box = useRecoilValue(boxStateFinal);
  if (box === undefined || box === null) {
    return (
      <>
        <CardContainer
          key={props.suggestionId}
          className="inter-var w-full h-full max-w-sm "
        >
          <CardBody className="bg-muted/50  relative group/card  dark:hover:shadow-md dark:hover:shadow-emerald-500/[0.1] h-full rounded-xl p-6 border  ">
            <CardItem
              as="div"
              translateZ="100"
              className="flex flex-col gap-4 items-center"
            >
              <div className="flex gap-4 items-center">
                <Loading />

                <div className="flex flex-col items-start ">
                  <div className=" font-bold text-neutral-600 dark:text-white">
                    {"title "}
                  </div>
                  <p className="text-neutral-500 text-xs pt-2 dark:text-neutral-300">
                    {"loading..."}
                  </p>
                  <p>0 €</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-2 mt-4">
                loading ...
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </>
    );
  }
  const suggestions = box.suggestions;
  const suggestion = suggestions.find(
    (suggestion) => suggestion.id === props.suggestionId
  );

  if (suggestion === undefined || suggestion === null) {
    return (
      <>
        <div>
          <Image
            alt="Picture of the author"
            src="blob:https://web.whatsapp.com/48a8340f-4d5d-4ed3-802c-e17b357e9871"
            width={500}
            height={500}
            layout="responsive"
          ></Image>
        </div>
        <p> Suggestion not found </p>;
      </>
    );
  }

  const mainProduct = suggestion.products.find(
    (product) => product.isVariant === false
  );

  const mainProductDescription =
    mainProduct?.product.description ??
    "Ce soin quotidien est un allié pour ceux qui cherchent à revitaliser leur peau avec une approche naturelle et biologique. Formulé à partir de cellules végétales de lys, il cible les signes visibles de l'âge en rendant la peau plus dense et élastique";

  const getMainDescriptionText = (description: string) => {
    // fonction pour garder que le text et enlever le reste  ( translation ... )
    return description.split("TRANSLATE")[0];
  };

  const getMainDescriptionTextHtml = () => {
    const description = mainProduct?.product.descriptionHtml ?? "hello world";
    return description.split('<meta charset="UTF-8">').join("");
  };

  console.log("description html", mainProduct?.product);
  return (
    <>

      <CardContainer key={props.suggestionId} className="inter-var w-full h-full  max-w-sm">
        <CardBody className="bg-muted/10  relative group/card  dark:hover:shadow-md dark:hover:shadow-emerald-500/[0.1] h-full rounded-xl p-6 border  ">
          <CardItem
            as="div"
            translateZ="100"
            className="flex  flex-col w-full  gap-4 items-center"
          >
            {suggestion.products
              .filter((product) => product.isVariant === false)
              .map((product) => (
                <div
                  key={product.product.id}
                  className="flex gap-4 items-center self-end pb-0 mb-0 h-full"
                >
                  <img
                    src={
                      (product.product.featuredImage as { url?: string })
                        ?.url ??
                      "https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"
                    }
                    height={1000}
                    width={1000}
                    className="h-32 w-auto object-cover rounded-xl dark:group-hover/card:shadow-white dark:group-hover/card:shadow-md group-hover/card:shadow-black/30 group-hover/card:shadow-sm"
                    alt="principal product"
                  />
                  <div className="flex flex-col items-start gap-1 h-auto ">
                    <p className=" font-bold text-sm text-neutral-600 dark:text-white">
                      {product.product.title ?? "object null"}
                    </p>
                    <p className="text-xs">{product.product.price ?? 0} €</p>
                    <p className="text-neutral-500 text-xs pt-2 dark:text-neutral-300">
                      {mainProductDescription.length > 100
                        ? mainProductDescription.substring(0, 100) + "..."
                        : mainProductDescription}
                    </p>
                    <div className="fixed h-[10% bottom-0 pb-0 self-end">
                      {mainProductDescription.length > 100 && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className=" w-20 rounded-full">
                              Voir plus
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-4xl  w-full h-full overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-primary">
                                Descritpion du produit
                              </DialogTitle>
                              {/* <DialogDescription>Composition du coffret</DialogDescription> */}
                            </DialogHeader>
                            <Card className="w-full">
                              <CardBody className="flex flex-col gap-4 w-full h-full overflow-y-auto p-4">
                                <div className=" flex items-center  gap-4">
                                  <img
                                    src={
                                      (
                                        product.product.featuredImage as {
                                          url?: string;
                                        }
                                      )?.url ??
                                      "https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"
                                    }
                                    height={1000}
                                    width={1000}
                                    className="h-32 w-auto object-cover border rounded-xl dark:hover:shadow-white dark:hover:shadow-md hover:shadow-black/30 hover:shadow-sm"
                                    alt="principal product"
                                  />
                                  <div className="flex  flex-col items-start p-4 gap-4 ">
                                    <div className="flex-1 font-bold text-muted-foreground">
                                      {mainProduct?.product.title ??
                                        "object null doumams techniquement tachtiquement "}
                                    </div>
                                    <p className="w-full text-muted-foreground ">
                                      {mainProduct?.product.price ?? 0} €
                                    </p>
                                  </div>
                                </div>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: getMainDescriptionTextHtml(),
                                  }}
                                  className="text-sm text-accent flex flex-col gap-2"
                                ></div>
                              </CardBody>
                            </Card>
                            <DialogFooter>
                              <DialogClose asChild>
                                <div className="flex w-full justify-center">
                                  <Button className="h-10 w-[50%]  rounded-full ">
                                    Fermer
                                  </Button>
                                </div>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            {suggestion.products?.filter((e) => e.isVariant)?.length > 0 && (
              <p className="text-left self-start font-semibold text-muted-foreground">
                Variants (
                {suggestion.products?.filter((e) => e.isVariant).length})
              </p>
            )}
            <div className="flex flex-wrap min-h-10 h-full w-52 self-start items-center gap-2">
              {suggestion.products.map(
                (product) =>
                  product.isVariant && (
                    <VariantProductsFinal
                      key={product.product.id}
                      suggestionId={suggestion.id}
                      productVariantId={product.product.variantId}
                    />
                  )
              )}
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>
  );
};
