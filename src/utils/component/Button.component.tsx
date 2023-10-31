import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button"> & {
  name: string;
  variant?: string;
  icon?: React.JSX.Element;
};

const Button = ({
  name,
  className,
  icon,
  variant,

  ...props
}: ButtonProps) => {
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
      {icon}
    </button>
  );
};

export default Button;
