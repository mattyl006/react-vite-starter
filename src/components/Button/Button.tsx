import React, { ComponentProps } from "react";
import { ButtonSize } from "./ButtonSize";
import "./button.css";

type ButtonProps = {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: ButtonSize;
  /** Button contents */
  label: string;
} & ComponentProps<"button">;

/** Primary UI component for user interaction */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}): JSX.Element => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        "disabled:bg-slate-400",
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
