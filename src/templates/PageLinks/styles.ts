import _Article from "@/components/atoms/Article";
import styled from "styled-components";
import _Image from "@/components/atoms/Image";

export const Content = styled(_Article)``;

export const Links = styled.div`
  margin-top: 30px;
  max-width: 358px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SocialShare = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const Link = styled.a`
  display: flex;
  gap: 10px;
`;

export const Image = styled(_Image)``;
