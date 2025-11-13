import React from 'react';

export type Icon = (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;

export type NavLink = {
  href: string;
  label: string;
  icon?: Icon;
  shortDescription?: string;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLinkWithSubLinks[];
  basePath?: string;
  category?: string;
};

export type IndustryFeature = {
  title: string;
  description: string;
  icon: Icon;
};

export type Industry = {
  id: string;
  name: string;
  icon: Icon;
  title: string;
  description: string;
  features: IndustryFeature[];
  cta: string;
  image: string;
  imageHint: string;
};
