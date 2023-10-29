import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button"> & {
  name: string;
  variant?: string;
};

const Button = ({ name, className, variant, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "button",
        variant === "primary" ? "btn-primary" : "btn-secondary",
        className
      )}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
