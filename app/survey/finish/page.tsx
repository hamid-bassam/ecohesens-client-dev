"use client";

import Image from "next/image";

export default function SurveyFinalPage() {
  return (
    <div>
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
      <div className=" flex items-center justify-center">
        <div className="container max-w-4xl bg-[#f1e1d5] p-8 pb-16 pt-12">
          <h3 className="text-5xl font-thin">Merci</h3>
          <br />
          <p className="font-bold">
            Ecohesens vous remercie d&apos; répondu au questionnaire
            <br />
            <br />
            A bientôt
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
