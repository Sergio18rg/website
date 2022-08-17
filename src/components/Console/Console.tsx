import React from "react";
import "./Console.styles.scss";

interface IConsoleProps {
  text?: string;
}

const Console = ({ text }: IConsoleProps) => {
  return (
    <>
      <div className="console">
        <div className="console-header">{text && <span>{text}</span>}</div>
        <div className="console-body">hey</div>
      </div>
    </>
  );
};

export default Console;
