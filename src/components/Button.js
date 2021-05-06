import React from "react";
import "./Button.css";

const isOperator = (val) => {
  return !isNaN(val) || val === ".";
};

export const Button = (props) => {
  return (
    <div
      className={`button-container ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.handleClick(props.val)}
    >
      {props.children}
    </div>
  );
};

export const Button0 = (props) => {
  return (
    <div
      className={`button0`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
};

// export const ButtonOps = (props) => {
//   return (
//     <div
//       className={`button-container ${
//         isOperator(props.children) ? null : "operator"
//       }`}
//       onClick={() => props.handleClick(props.op)}
//     >
//       {props.children}
//     </div>
//   );
// };

export default Button;
