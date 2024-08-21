import CtaSection from "./_components/home-page/cta-section";
import HeroComponent from "./_components/home-page/hero-component";
import LatestIssueSection from "./_components/home-page/latest-issues-section";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <CtaSection />
      <LatestIssueSection />
    </>
  );
}
