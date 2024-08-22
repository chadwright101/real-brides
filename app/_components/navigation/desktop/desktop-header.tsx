import Image from "next/image";
import Link from "next/link";

import navData from "@/app/_data/nav-data.json";

interface Props {
  cssClasses?: string;
}

const DesktopHeader = ({ cssClasses }: Props) => {
  return (
    <div
      className={`pt-3 pb-4 px-14 max-w-[1280px] mx-auto justify-between relative w-full items-end ${cssClasses}`}
    >
      <Link href="/">
        <Image
          src="/assets/real-brides-logo-black.png"
          alt="Real Brides logo"
          width={76}
          height={76}
          className="drop-shadow-none hover:opacity-80 ease-in-out duration-200"
          priority
        />
      </Link>
      <nav className="overflow-hidden w-full grid place-items-end mx-auto">
        <ul className="flex list-none gap-3 mb-1 z-10">
          {navData.map(({ title, url }, index) => (
            <li key={index}>
              <Link
                href={url}
                className="pb-1 -mb-1 hover:underline underline-offset-4 decoration-2 decoration-purple"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-full right-[76px] bottom-0 overflow-hidden absolute opacity-20">
          <Image
            src="/assets/images/protea-flower.png"
            alt="Protea flower image"
            width={520}
            height={1103.76}
            className="rotate-[15deg] -mt-12"
          />
        </div>
      </nav>
    </div>
  );
};

export default DesktopHeader;
