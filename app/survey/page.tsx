import Image from "next/image";

// export const runtime = 'edge';

export const metadata = {
  title: "Questionnaire",
  description: "Questionnaire",
};

export default async function SurveyPage() {
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
      <div className="flex items-center justify-center">
        <div className="container max-w-4xl bg-[#f1e1d5] p-8 pb-16 pt-12">
          <h3 className="text-5xl font-thin">ecohesens</h3>
          <br />
          <p className="font-bold">
            Prêt.e pour ton diagnostic de peau gratuit ?<br />
            <br />
            Pour trouver ton coffret idéale ✨ je vais te poser des questions
            auxquelles tu devras répondre selon ton état actuel 👼.
            <br />
            <br />
            Je t’enverrais ensuite par e-mail ton coffrets sur-mesure ! Chaque
            produit recommandé a été sélectionné minutieusement par l’équipe
            pour son efficacité prouvée🧑‍🔬.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <a
          href="/survey/start"
          className="rounded-lg p-4 text-xl font-extrabold italic text-[#c77036]"
        >{`Commencer >>`}</a>
      </div>
    </div>
  );
}
