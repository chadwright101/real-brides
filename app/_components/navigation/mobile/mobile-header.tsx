"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import classNames from "classnames";

import navData from "@/app/_data/nav-data.json";

interface Props {
  cssClasses?: string;
}

const MobileHeader = ({ cssClasses }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <>
      <div className={`h-20 px-7 pt-4 pb-4 flex justify-between ${cssClasses}`}>
        <div className="w-full h-20 top-0 -ml-8 overflow-hidden absolute opacity-25">
          <Image
            src="/assets/images/protea-flower.png"
            alt="Protea flower image"
            width={261}
            height={275}
            className="rotate-[15deg] -ml-[80px] -mt-6"
          />
        </div>
        <Link href="/">
          <Image
            src="/assets/real-brides-logo-black.png"
            alt="Real Brides logo"
            width={44}
            height={44}
            className="drop-shadow-none"
            priority
          />
        </Link>
        <button
          className="p-3 -mr-3 z-40"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <Image
            src={
              !showMenu
                ? "/assets/icons/menu-icon.svg"
                : "/assets/icons/close-icon.svg"
            }
            alt="Menu icon"
            width={24}
            height={24}
            className={classNames("drop-shadow-none", {
              "mr-4": showMenu,
            })}
            priority
          />
        </button>
      </div>
      {showMenu && (
        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-purple/[97%] z-30 pt-32 ${cssClasses}`}
        >
          <Image
            src="/assets/real-brides-logo-white.png"
            alt="Real Brides logo"
            width={44}
            height={44}
            className="absolute top-4 left-7 drop-shadow-none"
          />
          <ul className="text-white grid gap-2 list-none px-7">
            {navData.map(({ title, url }, index) => (
              <li key={index}>
                <Link
                  key={index}
                  href={url}
                  className="text-white text-subheading font-bold uppercase p-3 -ml-3"
                  onClick={() => setShowMenu(false)}
                >
                  {title}
                </Link>
                {index !== navData.length - 1 && (
                  <hr className="border-white mt-[16px] mb-2" />
                )}
              </li>
            ))}
          </ul>
          <div className="overflow-hidden absolute -bottom-10 right-4 protea-container">
            <Image
              src="/assets/images/protea-flower.png"
              alt="Protea flower image"
              width={315.34}
              height={331.51}
              className="protea-image translate-y-1 rotate-[-7.58deg]"
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default MobileHeader;
