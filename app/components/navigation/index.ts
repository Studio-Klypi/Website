import type { Listed } from "~/types/generic/object";

export interface NavigationLink {
  key: string;
  path: string;
  mobileOnly?: boolean;
}

export const LINKS: Listed<NavigationLink> = [
  {
    key: "home",
    path: "/",
    mobileOnly: true,
  },
  {
    key: "services",
    path: "/services",
  },
  {
    key: "projects",
    path: "/projects",
  },
  {
    key: "about",
    path: "/about",
  },
  {
    key: "contact",
    path: "/contact",
  },
];
