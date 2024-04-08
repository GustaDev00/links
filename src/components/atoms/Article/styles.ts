import styled from "styled-components";

export const Article = styled.article``;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.gunmetal};
`;

export const Description = styled.p`
  margin-top: 8px;
  width: 85%;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.darkSilver};
`;
