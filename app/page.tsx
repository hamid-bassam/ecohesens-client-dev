

import { Header } from "../src/features/layout/Header";
import { WavyBackgroundDemo } from "./_components/WavyBackGroundDemo";



export default function Home() {

  return (

    <main className="flex-1">
      <Header />
      <WavyBackgroundDemo minusHeight={70} />

    </main>

  );
}
