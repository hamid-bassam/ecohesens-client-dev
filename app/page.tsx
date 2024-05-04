

import { Header } from "../src/features/layout/Header";
import { Spacing } from "../src/features/layout/Spacing";
import { BackgroundGradientDemo } from "./_components/BackgroundGradientDemo";
import { BoxComponent } from './_components/BoxComponent';
import { ThreeDCardDemo } from "./_components/ThreeDCardDemo";
import { WavyBackgroundDemo } from "./_components/WavyBackGroundDemo";



export default function Home() {
  const image =
    'https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800';
  return (

    <main className="flex-1">
      <Header />
      <WavyBackgroundDemo />
      {/* <Spacing size="sm" />
      <Header2 /> */}
      {/* <ImageDeFond /> */}
      {/* <Header3 /> */}
      <Spacing size="sm" />
      <ThreeDCardDemo />
      <Spacing size="sm" />
      <BoxComponent boxId="2" />
      <Spacing size="sm" />
      <BackgroundGradientDemo />

    </main>

  );
}
