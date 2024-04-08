import { FC } from "react";
import { BoxProps } from "./props";
import BoxBig from "./BoxBig";
import BoxSmall from "./BoxSmall";

const Box: FC<BoxProps> = ({ type, ...props }) => {
  const getBox = () => {
    switch (type) {
      case "big":
        return <BoxBig {...props} />;
      case "small":
        return <BoxSmall {...props} />;
    }
  };

  return getBox();
};

export default Box;
