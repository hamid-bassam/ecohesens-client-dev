"use client";
import { useRecoilState } from 'recoil';
import { useBoxDetails } from '../hooks/useBoxDetails';
import { boxState } from '../state/boxState';

export type BoxComponentProps = {
  boxId: string;
};

export const BoxComponent = (props: BoxComponentProps) => {
  const { data, isLoading, error } = useBoxDetails(props.boxId);
  const [box, setBox] = useRecoilState(boxState);


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading box details.</div>;

  // setBox(data as unknown as BoxType);
  setBox(data satisfies { id: string, message: string });

  return (

    <div>
      {/* Render suggestions and other components */}
      <p>Composant Box</p>
      <p>{data.id}</p>

    </div>


  );
}