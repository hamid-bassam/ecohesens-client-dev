"use client";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { boxState } from "../state/boxState";
import { BoxWithDetails } from "./ClientBoxTest";

export type SetAtomicStateProps = {
  boxWithDetails: BoxWithDetails;
};

export const SetAtomicState = (props: SetAtomicStateProps) => {
  // setBox the atomic state with the box data in this server component
  const setBox = useSetRecoilState(boxState);
  useEffect(() => {
    setBox(props.boxWithDetails);
    console.log("Rerendered SetAtomicState");
  }, []);

  return <></>
};