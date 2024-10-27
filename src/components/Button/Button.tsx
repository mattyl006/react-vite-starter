import React, { ComponentProps } from "react";
import { ButtonSize } from "./ButtonSize";
import { cn } from "../../utils/cn";
import "./button.css";

type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: ButtonSize;
  label: string;
} & ComponentProps<"button">;

/** Primary UI component for user interaction */
const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  backgroundColor,
  className,
  disabled,
  label,
  ...props
}): JSX.Element => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={cn(
        `storybook-button, storybook-button--${size} ${mode} disabled:bg-slate-400`,
        className,
        { "hover:transparent": disabled }
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
