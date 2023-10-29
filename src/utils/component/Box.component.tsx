//Creat a polymorphic component that encompasses other elements
import { ElementType, ComponentProps } from "react";

type BoxProps<E extends ElementType> = Omit<ComponentProps<E>, "as"> & {
  as?: E;
};

const Box = <E extends ElementType = "div">({ as, ...props }: BoxProps<E>) => {
  const TargetName = as || "div";
  return <TargetName {...props} />;
};

export default Box;
