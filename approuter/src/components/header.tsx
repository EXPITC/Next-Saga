"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkTo = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`hover:font-semibold ${path === href ? "font-semibold" : ""}`}
    >
      {children}
    </Link>
  );
};

const listNav = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/about/team",
    text: "Team",
  },
];

const Header = () => {
  return (
    <div className="flex flex-col center bg-purple-500 min-h-fit py-5">
      <h1 className="font-semibold text-4xl mx-auto">Welcome to the example</h1>
      <nav className="mx-auto">
        <ul className="flex space-x-5">
          {listNav.map(({ href, text }, index) => (
            <li key={index} className="hover:font-semibold">
              <LinkTo href={href}>{text}</LinkTo>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
