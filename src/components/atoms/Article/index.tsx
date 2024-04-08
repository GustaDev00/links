import { FC } from "react";
import ArticleProps from "./props";
import * as S from "./styles";

const Article: FC<ArticleProps> = ({ title, description, className }) => {
  return (
    <S.Article className={className}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Article>
  );
};

export default Article;
