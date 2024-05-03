

import { Header } from "../src/features/layout/Header";
import { Spacing } from "../src/features/layout/Spacing";
import { BoxComponent } from './_components/BoxComponent';
import { Header2 } from "./_components/Header2";
import { Header3 } from "./_components/Header3";
import ImageDeFond from "./_components/ImageDeFond";



export default function Home() {
  const image =
    'https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800';
  return (

    <main className="flex-1">
      <Header />
      <Spacing size="sm" />
      <Header2 />
      <ImageDeFond />
      <Header3 />
      <Spacing size="sm" />
      <BoxComponent boxId="2" />
    </main>

  );
}
