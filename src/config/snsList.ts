export type SnsItem = {
  name: string;
  src: string;
  alt: string;
  link: string;
};

export const SnsList: SnsItem[] = [
  {
    name: "GitHub",
    src: "images/sns/github.svg",
    alt: "GitHub",
    link: "https://github.com/KM0912",
  },
  {
    name: "Zenn",
    src: "images/sns/zenn.svg",
    alt: "Zenn",
    link: "https://zenn.dev/torakm",
  },
  {
    name: "X",
    src: "images/sns/x.svg",
    alt: "X",
    link: "https://twitter.com/torao_km",
  },
];
