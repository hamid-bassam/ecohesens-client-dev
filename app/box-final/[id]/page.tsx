import { Header } from "@/features/layout/Header";
import { Spacing } from "@/features/layout/Spacing";
import { WavyBackgroundDemo } from "../../_components/WavyBackGroundDemo";
import { BoxFinalServer } from "../../box-components/BoxFinalServer";

export default async function BoxComponentServer({ params }: { params: { id: string } }) {
  const { id } = params;


  return (
    <main>
      <Header />
      <WavyBackgroundDemo />
      <Spacing size="sm" />
      <BoxFinalServer id={id} />
    </main>
  );

};