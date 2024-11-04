export type NavlinksProps = {
  links: {
    name: string;
    route: string;
    type?: string;
  }[];
};

export const Navlinks = [
  {
    name: "portfolio",
    route: "/Portfolio",
  },
  {
    name: "about us",
    route: "/about",
  },
  {
    name: "contact",
    route: "/contact",
  },
];
