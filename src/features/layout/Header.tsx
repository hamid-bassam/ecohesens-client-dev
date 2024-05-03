"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LinkedinIcon } from "../../../app/_components/icons/LinkedinIcon";
import { TwitterIcon } from "../../../app/_components/icons/TwitterIcon";
import { ModeToggle } from "../theme/ModeToggle";
import LogoSquare from "./LogoSquare";
import { Section } from "./Section";



export const Header = () => {


  return (
    <header id="Header" className="sticky top-0 px-4 py-4 z-10 backdrop-filter backdrop-blur-sm rounded-sm">

      <Section className="flex  justify-center items-center" >
        {/* <h1 className="text-lg font-bold text-primary">bassams.fr</h1> */}
        <LogoSquare />
        <div className="flex-1" />

        <ul className="flex items-center gap-2">
          <ModeToggle />
          <Link href="https://github.com/hamid-bassam" className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}>
            <img src="https://logo-marque.com/wp-content/uploads/2020/04/Instagram-Embleme.png" alt="instagram" width={12} height={12} className="w-12 h-auto" />
          </Link>
          <Link href="https://www.linkedin.com/in/hamid-bassam-802334207/" className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}>
            <LinkedinIcon size={12} className="text-foreground" />
          </Link>
          <Link href="https://twitter.com/ronaleddine/" className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}>
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
      <div className="header-overlay"></div>
    </header>
  )
    ;
};

