"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const isSubmenuActive =
    item.submenu?.some((sub) => isActive(sub.href)) ?? false;

  const isParentActive = isActive(item.href) || isSubmenuActive;

  const handleToggle = () => {
    setSubmenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      {/* MENU DENGAN SUBMENU */}
      {item.submenu ? (
        <>
          <button
            onClick={handleToggle}
            className={`flex items-center justify-between w-full py-2 text-left transition
              ${isParentActive ? "text-primary font-medium" : "text-black dark:text-white"}
            `}
          >
            <span className="flex items-center gap-2">
              {isParentActive && (
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              )}
              {item.label}
            </span>

            <svg
              className={`transition-transform duration-300 ${
                submenuOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m7 10l5 5l5-5"
              />
            </svg>
          </button>

          {submenuOpen && (
            <div className="pl-6 mt-1 space-y-1 border-l border-gray-200">
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  onClick={() => setSubmenuOpen(false)}
                  className={`block py-2 px-2 text-sm rounded-md transition
                    ${
                      isActive(subItem.href)
                        ? "bg-primary text-white"
                        : "text-midnight_text hover:bg-gray-100 dark:text-white"
                    }
                  `}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        /* MENU TANPA SUBMENU */
        <Link
          href={item.href}
          className={`flex items-center py-2 transition
            ${
              isParentActive
                ? "text-primary font-medium"
                : "text-black dark:text-white"
            }
          `}
        >
          <span className="flex items-center gap-2">
            {isParentActive && (
              <span className="w-2 h-2 rounded-full bg-primary"></span>
            )}
            {item.label}
          </span>
        </Link>
      )}
    </div>
  );
};

export default MobileHeaderLink;