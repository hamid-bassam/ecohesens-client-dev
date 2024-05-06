

import { Header } from "@/features/layout/Header";
import { Spacing } from "@/features/layout/Spacing";
import { ClientBoxTest } from "../../_components/ClientBoxTest";

import { SuggestionListTest } from "../../_components/SuggestionListTest";
import { WavyBackgroundDemo } from "../../_components/WavyBackGroundDemo";

export default async function BoxComponentServer({ params }: { params: { id: string } }) {
  const { id } = params;


  // const box = async () => await getBoxById(id);
  // useEffect(() => {
  //   box();
  // }, [])


  // // // // // await new Promise(
  // // // // //   (resolve) => setTimeout(resolve, 3000)
  // // // // // );
  // // // // // const box = await prisma.box.findUnique({
  // // // // //   where: { id: id as string }
  // // // // // });
  // TElephone dechargé j'arrive !!!!!!!!!!!!!!!!!!!!!

  // test API route 
  // const baseURL = 'http://localhost:3002'; // Assurez-vous de remplacer par l'URL de base appropriée si déployé
  // const url = `${baseURL}/api/box/${id}`;
  // await new Promise(resolve => setTimeout(resolve, 5000));
  // const res = await fetch(url);
  // const box = await res.json();

  return (
    <main>
      <Header />
      <WavyBackgroundDemo />
      <Spacing size="sm" />
      {/* <Suspense key={id} fallback={<p>loading...</p>}> */}
      <ClientBoxTest boxId={id} >
        <SuggestionListTest boxId={id} />

      </ClientBoxTest>
      {/* </Suspense> */}

    </main>
  );

};