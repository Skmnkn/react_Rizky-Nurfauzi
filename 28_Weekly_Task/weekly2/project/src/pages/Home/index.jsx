import { AboutSection } from "../AboutSection";
import { ContactSection } from "../ContactSection";
import { GamesSection } from "../GamesSection";
import { MainSection } from "../MainSection";
import { PricingSection } from "../PricingSection";

export const HomePage = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <GamesSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};
