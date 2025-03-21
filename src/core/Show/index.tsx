import * as React from "react";

type PropsType = {
  if: boolean;
  children: string | React.JSX.Element | React.JSX.Element[];
};

export default function Show({ if: condition, children }: PropsType) {
  if (condition) {
    return <>{children}</>;
  }
}
