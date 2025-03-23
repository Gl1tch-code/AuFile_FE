import React from "react";
import Show from "../Show";
import Loader from "../../components/Loader";
import "./styles.css";

type PropsType = {
    children: string | React.JSX.Element | React.JSX.Element[];
    infos?: boolean;
  };
  
export default function AppWrapper({
  children,
}: PropsType): React.JSX.Element {
  const [DomContentLoaded, setDomContentLoaded] =
    React.useState<boolean>(false);

    React.useEffect(() => {
    setTimeout(() => {
      setDomContentLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      <Show if={!DomContentLoaded}>
        <Loader />
      </Show>
      <Show if={DomContentLoaded}>{children}</Show>

      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </>
  );
}
