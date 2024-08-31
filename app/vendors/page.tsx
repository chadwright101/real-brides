import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import vendorData from "@/app/_data/general-data.json";

const { vendors } = vendorData;

export const metadata: Metadata = {
  title: "Vendors - Real Brides Magazine",
};

const Vendors = () => {
  const sortedVendors = vendors.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="mt-10 mb-10 px-5 max-w-[1080px] mx-auto">
      <h1 className="mb-15 text-center">Vendors</h1>
      <ul className="flex flex-wrap justify-around items-center gap-[60px] list-none">
        {sortedVendors.map(({ name, url, logo }, index) => (
          <li key={index} className="py-4 px-8 border border-purple">
            <Link
              href={url}
              aria-label={`${name} website`}
              target="_blank"
              className="p-4 -m-4 tablet:p-0 tablet:m-0  tablet:hover:opacity-75 ease-in-out duration-200"
            >
              <Image
                src={logo}
                alt={name}
                width={200}
                height={200}
                className="drop-shadow-none h-[200px] object-contain"
              />

              <p className="text-center mt-4 max-w-[200px] text-[18px]">
                {name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Vendors;
