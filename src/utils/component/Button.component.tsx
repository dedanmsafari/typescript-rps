import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonProps = ComponentProps<"button"> & {
  name: string;

  icon?: React.JSX.Element;
};

const Button = ({
  name,
  className,
  icon,

  ...props
}: ButtonProps) => {
  return (
    <button className={clsx("button", className)} {...props}>
      {name}
      {icon}
    </button>
  );
};

export default Button;
