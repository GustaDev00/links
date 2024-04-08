import { FC } from "react";
import { ImageProps } from "./props";
import * as S from "./styles";

const Image: FC<ImageProps> = ({ alt, ...props }) => {
  return <S.Img {...props} alt={alt} priority={true} quality={100} />;
};

export default Image;
