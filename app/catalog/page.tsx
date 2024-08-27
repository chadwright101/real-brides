import catalogData from "@/app/_data/general-data.json";
import Image from "next/image";
import Link from "next/link";

const { catalog } = catalogData;

const Catalog = () => {
  return (
    <main className="mt-10 mb-10 px-5 max-w-[1080px] mx-auto">
      <h1 className="text-center mb-15">Magazine Catalog</h1>
      <ul className="list-none flex flex-wrap gap-[60px] justify-around">
        {catalog.slice(0, 24).map(({ date, image, url }, index) => (
          <li key={index}>
            <Link
              href={url}
              aria-label={`Edition - ${date}`}
              className="grid place-items-center gap-4 p-4 -m-4 tablet:p-0 tablet:m-0  tablet:hover:opacity-75 ease-in-out duration-200"
              target="_blank"
            >
              <h2>{date}</h2>
              <Image
                src={image}
                alt={`Edition - ${date}`}
                width={198}
                height={280}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Catalog;
