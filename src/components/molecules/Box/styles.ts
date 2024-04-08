import styled from "styled-components";
import Image from "@/components/atoms/Image";

export const BoxContainer = styled.div`
  position: relative;
  border-radius: 8px;
`;

export const BoxSmallContainer = styled.div<{ type: string }>`
  position: relative;
  background: ${({ theme, type }) => theme[type]};
  border-radius: 8px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxShadow = styled.div`
  width: 100%;
  height: 130px;
  background-color: ${({ theme }) => theme.gunmetal};
  opacity: 0.6;
  border-radius: 8px;
`;

export const BoxBigTitle = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

export const BoxBigSmall = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 20px;
  font-weight: 300;
`;

export const Link = styled.a``;

export const Img = styled(Image)`
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: 8px;
`;

export const ImgSvg = styled(Image)`
  position: absolute;
  left: 10px;
`;
