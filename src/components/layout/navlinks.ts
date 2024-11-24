export type NavlinksProps = {
  links: {
    name: string;
    route: string;
    type?: string;
  }[];
};

export const navLinks = [
  {
    name: "portfolio",
    route: "/portfolio",
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
