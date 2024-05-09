'use client';
import { useRecoilValue } from "recoil";
import { BackgroundGradient } from "../../../src/components/ui/background-gradient";
import { boxStateFinal } from "../../state/boxStateFinal";

export type CompleteProductCardProps = {

};

export const CompleteProductCard = (props: CompleteProductCardProps) => {
  const box = useRecoilValue(boxStateFinal);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <img
            src="https://ecohesens.com/cdn/shop/files/Designsanstitre_10.png?v=1705573072&width=800"
            alt="product img"
            height="400"
            width="400"
            className="object-contain"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
            February 17, 2024. Your best opportunity to get these right now is by
            entering raffles and waiting for the official releases.
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black/80 mt-4 text-xs font-bold dark:bg-zinc-800">
            <span>Buy now </span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
              $100
            </span>
          </button>
        </BackgroundGradient>
      </div>
    </>
  );
};