// NavItem.tsx
"use client";

import Link from "next/link";

interface NavItemProps {
  title: string;
  url: string;
}

const scrollIntoView = (section: string) => {
  const element = document.getElementById(section);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavItem = ({ title, url }: NavItemProps) => {
  return (
    <li>
      <Link
        href={url}
        className="pb-1 -mb-1 hover:underline underline-offset-4 decoration-2 decoration-purple"
        onClick={() => scrollIntoView(url)}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
