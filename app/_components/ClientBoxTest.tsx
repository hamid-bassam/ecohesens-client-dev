"use client";
import { Box, Product, Suggestion, User } from "@prisma/client";
import { Section } from "../../src/features/layout/Section";

export type ClientBoxTestProps = {
  boxId: string;
  children: React.ReactNode;
};

export type BoxWithDetails = Box & {
  user: User;
  suggestions: (Suggestion & {
    products: Product[];
    id: string;
    createdAt: Date;
    boxId: string;
  })[];
};


export const ClientBoxTest = (props: ClientBoxTestProps) => {
  // const [box, setBox] = useRecoilState(boxState);

  return (
    <Section>
      {props.children}
    </Section>
  );
};