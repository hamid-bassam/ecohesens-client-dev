import prisma from "../../src/lib/prisma";


export type BocContentSuspensTestProps = {
  mainProductIdId: string;
};

export const BocContentSuspensTest = async (props: BocContentSuspensTestProps) => {
  await new Promise(
    (resolve) => setTimeout(resolve, 3000)
  );
  const mainProductId = await prisma.product.findUnique({
    where: { id: props.mainProductIdId as string }
  });


  return (
    <div className="flex flex-col items-start ">
      <div
        className=" font-bold text-neutral-600 dark:text-white"
      >
        {mainProductId?.name ?? "object null doumams techniquement tachtiquement "}
      </div>
      <p
        className="text-neutral-500 text-xs pt-2 dark:text-neutral-300"
      >
        {/* Ce soin quotidien est un allié pour ceux qui cherchent à revitaliser leur peau avec une approche naturelle et biologique. Formulé à partir de cellules végétales de lys, il cible les signes visibles de l'âge en rendant la peau plus dense et élastique */}
        {mainProductId?.description ?? "object null description doumams techniquement tachtiquement "}
      </p>
    </div>
  )
};