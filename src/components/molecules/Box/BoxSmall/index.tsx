import { FC } from "react";
import BoxsProps from "../props";
import * as S from "../styles";

const BoxSmall: FC<BoxsProps> = ({ text, link, img, name }) => {
  return (
    <S.Link {...link}>
      <S.BoxSmallContainer type={name}>
        <S.ImgSvg {...img} />
        <S.BoxBigSmall>{text}</S.BoxBigSmall>
      </S.BoxSmallContainer>
    </S.Link>
  );
};

export default BoxSmall;
