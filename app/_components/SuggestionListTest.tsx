import prisma from "../../src/lib/prisma";
import { BoxWithDetails } from "./ClientBoxTest";
import { SetAtomicState } from "./SetAtomicState";
import { SuggestionClient } from "./SuggestionClient";

export type SuggestionListTestProps = {
  boxId: string;
};
export const SuggestionListTest = async (props: SuggestionListTestProps) => {

  const box = await prisma.box.findUnique({
    where: { id: props.boxId as string },
    include: {
      suggestions: {
        include: {
          products: true
        }
      }
    }
  }) as BoxWithDetails;

  console.log("box prisma ----------", box)
  return (
    <>
      <SetAtomicState boxWithDetails={box} />

      {/* {[1, 2, 3, 4, 5, 6].map((i) => ( */}
      <SuggestionClient suggestion={box.suggestions[0]} />

      {/* ) */}
      {/* )} */}

    </>
  );
};