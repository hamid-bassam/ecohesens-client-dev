'use client'
import { useRecoilValue } from "recoil";


import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../../../src/components/ui/3d-card";
import { Button } from "../../../src/components/ui/button";
import { Card } from "../../../src/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../../src/components/ui/dialog";
import { boxStateFinal } from "../../state/boxStateFinal";
import { Loading } from "../Loading";
import { VariantProductsFinal } from "./VariantProductsFinal";

export type SuggestionProps = {
  suggestionId: string;
};

export const Suggestion = (props: SuggestionProps) => {
  const box = useRecoilValue(boxStateFinal);
  if (box === undefined || box === null) {
    return <>
      <CardContainer key={props.suggestionId} className="inter-var w-full h-full max-w-sm ">
        <CardBody className="bg-muted/50  relative group/card  dark:hover:shadow-md dark:hover:shadow-emerald-500/[0.1] h-full rounded-xl p-6 border  ">
          <CardItem as="div" translateZ="100" className="flex flex-col gap-4 items-center">
            <div className="flex gap-4 items-center">
              <Loading />

              <div className="flex flex-col items-start ">
                <div
                  className=" font-bold text-neutral-600 dark:text-white"
                >
                  {"title "}
                </div>
                <p
                  className="text-neutral-500 text-xs pt-2 dark:text-neutral-300"
                >
                  {
                    "loading..."
                  }
                </p>
                <p>
                  0 €
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2 mt-4">
              loading ...
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>;
  }
  const suggestions = box.suggestions;
  const suggestion = suggestions.find(suggestion => suggestion.id === props.suggestionId);

  if (suggestion === undefined || suggestion === null) {
    return <>
      <div>
        <Image
          alt="Picture of the author"
          src="blob:https://web.whatsapp.com/48a8340f-4d5d-4ed3-802c-e17b357e9871"
          width={500}
          height={500}
          layout="responsive"

        >

        </Image>
      </div>
      <p> Suggestion not found </p>;
    </>
  }

  const mainProduct = suggestion.products.find(product => product.isVariant === false);

  const mainProductDescription = mainProduct?.product.description ?? "Ce soin quotidien est un allié pour ceux qui cherchent à revitaliser leur peau avec une approche naturelle et biologique. Formulé à partir de cellules végétales de lys, il cible les signes visibles de l'âge en rendant la peau plus dense et élastique";

  const getMainDescriptionText = (description: string) => {
    // fonction pour garder que le text et enlever le reste  ( translation ... )
    // intput :
    // Découvrez notre Coffret Bien-Être Respiratoire, une sélection soigneusement choisie pour favoriser votre bien-être et prendre soin de votre santé respiratoire. Ce coffret harmonieux réunit trois produits naturels de haute qualité : Eucalyptus Feuilles BIO - Pochette Vrac 60 g - La Vie en Herbes Plongez dans l'arôme apaisant des feuilles d'eucalyptus bio. Utilisez-les en infusion pour bénéficier des propriétés respiratoires de cette plante reconnue. Les feuilles d'eucalyptus sont soigneusement récoltées, séchées et conditionnées dans une pochette vrac de 60 g pour préserver leur fraîcheur et leur qualité biologique. Huile Essentielle Eucalyptus Globulus BIO - 10 ml - Saint-Hilaire L'huile essentielle d'eucalyptus globulus bio de Saint-Hilaire est une essence pure extraite des feuilles de l'eucalyptus. Réputée pour ses propriétés antiseptiques et décongestionnantes, cette huile essentielle peut être utilisée en diffusion ou diluée dans une huile porteuse pour des massages réconfortants. Son format de 10 ml en fait un compagnon idéal pour votre routine bien-être. AlcaBain, Sel de Bain Minéral Alcalin - Pot 75 g Offrez à votre corps un moment de détente et de régénération avec AlcaBain, notre sel de bain minéral alcalin. Enrichi en minéraux essentiels, ce sel de bain favorise l'équilibre acido-basique de la peau. Plongez dans un bain apaisant pour libérer les tensions, nourrir votre épiderme, et profiter des bienfaits des minéraux naturels. Ce Coffret Bien-Être Respiratoire est une invitation à prendre soin de vous au quotidien. Que ce soit pour un moment de relaxation ou pour soutenir votre système respiratoire, chaque produit a été choisi avec soin pour contribuer à votre bien-être général. Offrez-vous ou offrez à vos proches ce coffret, une véritable pause régénérante pour le corps et l'esprit. TRANSLATE with x English Arabic Hebrew Polish Bulgarian Hindi Portuguese Catalan Hmong Daw Romanian Chinese Simplified Hungarian Russian Chinese Traditional Indonesian Slovak Czech Italian Slovenian Danish Japanese Spanish Dutch Klingon Swedish English Korean Thai Estonian Latvian Turkish Finnish Lithuanian Ukrainian French Malay Urdu German Maltese Vietnamese Greek Norwegian Welsh Haitian Creole Persian var LanguageMenu; var LanguageMenu_keys=[\"ar\",\"bg\",\"ca\",\"zh-CHS\",\"zh-CHT\",\"cs\",\"da\",\"nl\",\"en\",\"et\",\"fi\",\"fr\",\"de\",\"el\",\"ht\",\"he\",\"hi\",\"mww\",\"hu\",\"id\",\"it\",\"ja\",\"tlh\",\"ko\",\"lv\",\"lt\",\"ms\",\"mt\",\"no\",\"fa\",\"pl\",\"pt\",\"ro\",\"ru\",\"sk\",\"sl\",\"es\",\"sv\",\"th\",\"tr\",\"uk\",\"ur\",\"vi\",\"cy\"]; var LanguageMenu_values=[\"Arabic\",\"Bulgarian\",\"Catalan\",\"Chinese Simplified\",\"Chinese Traditional\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Estonian\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Haitian Creole\",\"Hebrew\",\"Hindi\",\"Hmong Daw\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Klingon\",\"Korean\",\"Latvian\",\"Lithuanian\",\"Malay\",\"Maltese\",\"Norwegian\",\"Persian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Slovenian\",\"Spanish\",\"Swedish\",\"Thai\",\"Turkish\",\"Ukrainian\",\"Urdu\",\"Vietnamese\",\"Welsh\"]; var LanguageMenu_callback=function(){ }; var LanguageMenu_popupid='__LanguageMenu_popup'; TRANSLATE with COPY THE URL BELOW Back EMBED THE SNIPPET BELOW IN YOUR SITE Enable collaborative features and customize widget: Bing Webmaster Portal Back var intervalId = setInterval(function () { if (MtPopUpList) { LanguageMenu = new MtPopUpList(); var langMenu = document.getElementById(LanguageMenu_popupid); var origLangDiv = document.createElement(\"div\"); origLangDiv.id = \"OriginalLanguageDiv\"; origLangDiv.innerHTML = \"ORIGINAL: \"; langMenu.appendChild(origLangDiv); LanguageMenu.Init('LanguageMenu', LanguageMenu_keys, LanguageMenu_values, LanguageMenu_callback, LanguageMenu_popupid); window[\"LanguageMenu\"] = LanguageMenu; clearInterval(intervalId); } }, 1);
    //output : Découvrez notre Coffret Bien-Être Respiratoire, une sélection soigneusement choisie pour favoriser votre bien-être et prendre soin de votre santé respiratoire. Ce coffret harmonieux réunit trois produits naturels de haute qualité : Eucalyptus Feuilles BIO - Pochette Vrac 60 g - La Vie en Herbes Plongez dans l'arôme apaisant des feuilles d'eucalyptus bio. Utilisez-les en infusion pour bénéficier des propriétés respiratoires de cette plante reconnue. Les feuilles d'eucalyptus sont soigneusement récoltées, séchées et conditionnées dans une pochette vrac de 60 g pour préserver leur fraîcheur et leur qualité biologique. Huile Essentielle Eucalyptus Globulus BIO - 10 ml - Saint-Hilaire L'huile essentielle d'eucalyptus globulus bio de Saint-Hilaire est une essence pure extraite des feuilles de l'eucalyptus. Réputée pour ses propriétés antiseptiques et décongestionnantes, cette huile essentielle peut être utilisée en diffusion ou diluée dans une huile porteuse pour des massages réconfortants. Son format de 10 ml en fait un compagnon idéal pour votre routine bien-être. AlcaBain, Sel de Bain Minéral Alcalin - Pot 75 g Offrez à votre corps un moment de détente et de régénération avec AlcaBain, notre sel de bain minéral alcalin. Enrichi en minéraux essentiels, ce sel de bain favorise l'équilibre acido-basique de la peau. Plongez dans un bain apaisant pour libérer les tensions, nourrir votre épiderme, et profiter des bienfaits des minéraux naturels. Ce Coffret Bien-Être Respiratoire est une invitation à prendre soin de vous au quotidien. Que ce soit pour un moment de relaxation ou pour soutenir votre système respiratoire, chaque produit a été choisi avec soin pour contribuer à votre bien-être général. Offrez-vous ou offrez à vos proches ce coffret, une véritable pause régénérante pour le corps et l'esprit.
    return description.split("TRANSLATE")[0];
  };

  const getMainDescriptionTextHtml = () => {
    // remove <meta charset="UTF-8">

    const description = mainProduct?.product.descriptionHtml ?? "hello world"
    return description.split('<meta charset="UTF-8">').join("");
    // return description.split("\n").join("<br>");


  };

  console.log("description html", mainProduct?.product);
  return (

    <>

      <CardContainer key={props.suggestionId} className="inter-var w-full h-full max-w-sm">
        <CardBody className="bg-muted/50  relative group/card  dark:hover:shadow-md dark:hover:shadow-emerald-500/[0.1] h-full rounded-xl p-6 border  ">
          {/* dark:bg-black dark:border-white/[0.2] */}
          {/* border-black/[0.1]  */}
          <CardItem as="div" translateZ="100" className="flex w-full h-full flex-col gap-4 items-center">
            {
              suggestion.products.filter((product) => product.isVariant === false).map((product) => (
                <div key={product.product.id} className="flex gap-4 items-center self-end pb-0 mb-0 h-full">
                  <img
                    src={(product.product.featuredImage as { url?: string })?.url ?? "https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"}
                    height={1000}
                    width={1000}
                    className="h-32 w-auto object-cover rounded-xl dark:group-hover/card:shadow-white dark:group-hover/card:shadow-md group-hover/card:shadow-black/30 group-hover/card:shadow-sm"
                    alt="principal product"
                  />
                  <div className="flex flex-col items-start gap-1 h-auto ">
                    <p
                      className=" font-bold text-sm text-neutral-600 dark:text-white"
                    >
                      {product.product.title ?? "object null"}
                    </p>
                    <p className="text-xs">
                      {product.product.price ?? 0} €
                    </p>
                    <p
                      className="text-neutral-500 text-xs pt-2 dark:text-neutral-300"
                    >
                      {
                        mainProductDescription.length > 100 ? mainProductDescription.substring(0, 100) + '...' : mainProductDescription
                      }
                    </p>
                    <div className="fixed h-[10%] bottom-0 pb-0 self-end">

                      {mainProductDescription.length > 100 && (

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className=" w-full rounded-full">Voir plus</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-4xl  w-full h-full overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-primary">Descritpion du produit</DialogTitle>
                              {/* <DialogDescription>Composition du coffret</DialogDescription> */}
                            </DialogHeader>
                            <Card className="w-full">

                              <CardBody className="flex flex-col gap-4 w-full h-full overflow-y-auto p-4">
                                <div className=" flex items-center  gap-4">
                                  <img
                                    src={(product.product.featuredImage as { url?: string })?.url ?? "https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"}
                                    height={1000}
                                    width={1000}
                                    className="h-32 w-auto object-cover border rounded-xl dark:hover:shadow-white dark:hover:shadow-md hover:shadow-black/30 hover:shadow-sm"
                                    alt="principal product"
                                  />
                                  <div className="flex  flex-col items-start p-4 gap-4 ">
                                    <div
                                      className="flex-1 font-bold text-muted-foreground"
                                    >
                                      {mainProduct?.product.title ?? "object null doumams techniquement tachtiquement "}
                                    </div>
                                    <p className="w-full text-muted-foreground ">
                                      {mainProduct?.product.price ?? 0} €
                                    </p>

                                  </div>

                                </div>
                                <div
                                  dangerouslySetInnerHTML={{ __html: getMainDescriptionTextHtml() }}
                                  className="text-sm text-accent flex flex-col gap-2">
                                </div>

                              </CardBody>
                            </Card>
                            <DialogFooter>
                              <DialogClose asChild>
                                <div className="flex w-full justify-center">

                                  <Button className="h-10 w-[50%]  rounded-full ">Fermer</Button>
                                </div>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>

                  </div>
                </div>
              ))
            }
            <div className="flex justify-between items-center gap-2 mt-4">
              {
                suggestion.products.map((product) => (
                  product.isVariant && <VariantProductsFinal key={product.product.id} suggestionId={suggestion.id} productVariantId={product.product.variantId} />
                ))
              }
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </>

  );
};