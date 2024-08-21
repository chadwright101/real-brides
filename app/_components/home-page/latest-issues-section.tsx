import Button from "../utils/button";
import LatestIssuesSlider from "../utils/latest-issues-slider";

import catalogData from "@/app/_data/general-data.json";

const { catalog } = catalogData;

const LatestIssueSection = () => {
  return (
    <section className="max-w-[1080px] mx-auto px-5">
      <div className="grid gap-7 border-b border-black/25 pb-10 mb-10">
        <LatestIssuesSlider data={catalog} />
        <Button url="/catalog" cssClasses="tablet:place-self-center">
          View more
        </Button>
      </div>
    </section>
  );
};

export default LatestIssueSection;
