import Var from "@/global";
import { Section } from "@/styles/components/sections";
import * as S from "./styles";
import Box from "@/components/molecules/Box";

const PageLinks = () => {
  return (
    <Section>
      <S.Content title={Var.name} description={Var.description} />
      <S.Links>
        {Var.links.map(({ type, ...props }, index) => (
          <Box type={type as "big" | "small"} key={index} {...props} />
        ))}
      </S.Links>
      <S.SocialShare>
        {Var.socialShare.map(({ img, link }, number) => (
          <S.Link key={number} {...link}>
            <S.Image {...img} />
          </S.Link>
        ))}
      </S.SocialShare>
    </Section>
  );
};

export default PageLinks;
