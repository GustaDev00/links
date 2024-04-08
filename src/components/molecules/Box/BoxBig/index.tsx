import { FC } from "react";
import BoxsProps from "../props";
import * as S from "../styles";

const BoxBig: FC<BoxsProps> = ({ text, link, img }) => {
  return (
    <S.Link {...link}>
      <S.BoxContainer>
        <S.Img {...img} />
        <S.BoxShadow />
        <S.BoxBigTitle>{text}</S.BoxBigTitle>
      </S.BoxContainer>
    </S.Link>
  );
};

export default BoxBig;
