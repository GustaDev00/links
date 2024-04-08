export default interface BoxsProps {
  name: string;
  text: string;
  link: {
    href: string;
    target: string;
    rel?: string;
  };
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface BoxProps extends BoxsProps {
  type: "big" | "small";
}
