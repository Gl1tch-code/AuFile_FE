import { JSX } from "react";
import "./styles.css";

type PropsType = {
  color?: string;
};

export default function Loader({ color }: PropsType): JSX.Element {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className={`lds-ripple text-[${color}]`}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
