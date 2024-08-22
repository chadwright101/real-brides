import ContactSection from "./_components/home-page/contact-section";
import CtaSection from "./_components/home-page/cta-section";
import HeroComponent from "./_components/home-page/hero-component";
import LatestIssueSection from "./_components/home-page/latest-issues-section";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <CtaSection />
      <LatestIssueSection />
      <div className="-translate-y-32" id="contact"></div>
      <ContactSection />
    </>
  );
}
