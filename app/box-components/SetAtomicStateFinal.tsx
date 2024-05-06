"use client";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { BoxState, boxStateFinal } from "../state/boxStateFinal";



export type SetAtomicStateProps = {
  boxState: BoxState;
};

export const SetAtomicStateFinal = (props: SetAtomicStateProps) => {
  // setBox the atomic state with the box data in this server component
  const setBox = useSetRecoilState(boxStateFinal);
  useEffect(() => {
    setBox(props.boxState);
    console.log("Rerendered SetAtomicState");
  }, []);

  return <></>
};