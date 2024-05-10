export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black dark:text-white md:flex-row">
        <div className="order-last min-h-screen w-full md:order-none">
          {children}
        </div>
      </div>
    </div>
  );
}
