import { Button } from "../../src/components/ui/moving-border";

import Image from "next/image";
export function Loading() {
  return (
    <div>
      <Button
        borderRadius="50%"
        // className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        className="relative   bg-black/95 rounded-full overflow-hidden"
        as="div"
      >
        <Image
          className="bg-white transform -translate-x-1"
          alt="Chargement"
          src="/gif.gif"
          layout="fill"
          objectFit="cover"
        />



      </Button>
    </div>
  );
}
