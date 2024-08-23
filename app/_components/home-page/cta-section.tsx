import Image from "next/image";
import Button from "../utils/button";

import catalogData from "@/app/_data/general-data.json";

const { catalog } = catalogData;

const CtaSection = () => {
  return (
    <main className="mt-10 mb-10 flex flex-wrap justify-around gap-10 px-5 max-w-[1080px] mx-auto desktop:border-b border-black/25 tablet:px-10 tablet:mt-15 desktop:pb-10 desktop:justify-between desktop:px-0">
      <article className="flex flex-col gap-7 w-full max-w-[400px] desktop:w-[280px]">
        <h2 className="text-center">{catalog[0].date} Edition</h2>
        <Image
          src={catalog[0].image}
          alt="Free download"
          width={400}
          height={565.64}
          className="h-auto"
        />
        <Button url={catalog[0].url} cssClasses="w-full">
          Free Download
        </Button>
        <hr className="border-black/25 mt-5 desktop:hidden" />
      </article>
      <article className="flex flex-col gap-7 w-full max-w-[400px] desktop:w-[280px]">
        <h2 className="text-center">Submit your wedding to be featured</h2>
        <p className="text-center">
          What to be featured in one of our upcoming editions? We’d love to hear
          from you!
        </p>
        <Image
          src="/assets/images/IMG-20240404-WA0044.jpg"
          alt="Submit your wedding"
          width={400}
          height={400}
          className="object-cover aspect-square w-full h-full"
        />
        <Button url="/#contact" cssClasses="w-full">
          Submit your wedding
        </Button>
        <hr className="border-black/25 mt-5 desktop:hidden" />
      </article>
      <article className="flex flex-col gap-7 w-full max-w-[400px] desktop:w-[280px]">
        <h2 className="text-center">Advertise in Real Brides magazine</h2>
        <p className="text-center">
          Our publication reaches over 10 000 soon-to-be-brides from around the
          country. Contact us now to include your brand in our an upcoming
          edition.
        </p>
        <div className="desktop:w-full desktop:h-[40%]">
          <Image
            src="/assets/images/magazine-spread.png"
            alt="Advertise with us"
            width={400}
            height={190}
            className="desktop:object-cover desktop:h-full desktop:w-full desktop:overflow-visible desktop:mt-2"
          />
        </div>
        <Button url="/#contact" cssClasses="w-full desktop:mt-auto">
          Advertise with us
        </Button>
        <hr className="border-black/25 mt-5 desktop:hidden" />
      </article>
    </main>
  );
};

export default CtaSection;
