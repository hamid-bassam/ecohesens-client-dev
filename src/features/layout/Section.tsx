import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";



export const Section = (props: PropsWithChildren<{ id?: string, className?: string }>) => {
  return (
    <section className={cn("max-w-6xl m-auto", props.className)}>
      {props.children}
    </section>
  );
};


