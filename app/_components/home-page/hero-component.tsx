import HeroSlider from "../utils/hero-slider";

import heroData from "@/app/_data/general-data.json";

const {
  images: {
    homePage: { heroSlider },
  },
} = heroData;

const HeroComponent = () => {
  return (
    <section className="relative max-w-[1280px] mx-auto">
      <div className="tablet:hidden">
        <HeroSlider data={heroSlider} cssClasses="h-[540px]" />
      </div>
      <div className="hidden tablet:block">
        <HeroSlider
          data={heroSlider}
          desktop
          cssClasses="hidden h-[600px] tablet:block"
        />
      </div>
      <div className="w-56 z-10 absolute bottom-20 bg-white/90 py-2 tablet:w-auto tablet:h-[120px] tablet:bottom-0 tablet:px-4 tablet:pt-4 tablet:left-[10%] desktop:left-[100px] desktop:w-[280px]">
        <h1 className="text-[52px] w-full text-right pr-3 tablet:text-[72px] tablet:pr-0 desktop:text-center">
          Real Brides
        </h1>
      </div>
    </section>
  );
};

export default HeroComponent;
