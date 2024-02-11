"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = usePathname();

  const listNav: string[] = [
    "/account",
    "/account-savelists",
    "/account-password",
    "/account-billing",
  ];

  return (
    <div className="container">
      <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
        {listNav.map((item) => {
          const isActive = pathname === item;
          return (
            <Link
              key={item}
              href={{
                pathname: item,
              }}
       
              className={`block py-5 md:py-8 border-b-2 flex-shrink-0 capitalize ${
                isActive
                  ? "border-primary-500 font-medium"
                  : "border-transparent"
              }`}
            >
              {item.replace("-", " ").replace("/", " ")}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
