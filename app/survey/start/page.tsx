"use client";

import Image from "next/image";
import Script from "next/script";

export default function SurveyStartPage() {
  return (
    <div className="w-full ">
      <div className="relative -mx-5 mb-20 flex h-24 justify-center bg-[#fff8e1]">
        <div className="absolute -bottom-10 right-1/2 translate-x-1/2 transform  rounded  font-medium text-white">
          <Image
            alt="Logo"
            width={100}
            height={100}
            src="/logo-round.png"
            className="h-24 w-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container max-w-4xl bg-[#f1e1d5] p-8 pb-16 pt-9">
          <div className="content-container overflow-scroll p-6 pt-0">
            <iframe
              data-tally-src="https://tally.so/embed/3ly5AB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="test"
            />{" "}
            <Script
              id="tally-js"
              src="https://tally.so/widgets/embed.js"
              onLoad={() => {
                // @ts-ignore
                Tally.loadEmbeds();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
