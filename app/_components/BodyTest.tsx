import { Card } from "@/components/ui/card";
import { Section } from "../../src/features/layout/Section";


export default function Body() {
  const image =
    'https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800';
  return (
    <Section>
      <Card className=" flex-[2] p-4 w-full flex flex-col gap-2">
        <p className="text-lg font-extrabold text-muted-foreground">Your Products</p>
        <div className="flex w-full h-52 flex-col items-center justify-center gap-5 bg-secondary-foreground">
          <h1 className="text-5xl text-primary-foreground">Layout des produits</h1>
        </div>

      </Card>
    </Section>
  );
}
