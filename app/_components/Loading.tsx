import { Button } from "../../src/components/ui/moving-border";

import Image from "next/image";
export function Loading() {
  return (
    <div>
      <Button
        borderRadius="50%"
        // className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        className="relative   bg-black/80 rounded-full overflow-hidden"
        as="div"
        containerClassName=" p-[8px]"
      >
        <Image
          className="bg-black/80 transform -translate-x-1"
          alt="Chargement"
          src="/gif.gif"
          layout="fill"
          objectFit="cover"
        />



      </Button>
    </div>
  );
}
