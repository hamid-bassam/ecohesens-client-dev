import { Header } from "../src/features/layout/Header";
import { Spacing } from "../src/features/layout/Spacing";
import Body from "./_components/BodyTest";
import { Header2 } from "./_components/Header2";
import ImageDeFond from "./_components/ImageDeFond";

export default function Home() {
  const image =
    'https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800';
  return (
    <main className="flex-1">
      <Header />
      <Spacing size="md" />
      <Header2 />
      <ImageDeFond />
      <Spacing size="md" />
      <Body />
    </main>
  );
}
