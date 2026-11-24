import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { About } from "@/components/sections/about";
import { AnimatedContentSections } from "@/components/sections/animated-content-sections";
import { Contact } from "@/components/sections/contact";
import { Credentials } from "@/components/sections/credentials";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <AnimatedContentSections>
          <Experience />
          <About />
          <Skills />
          <Credentials />
          <Contact />
        </AnimatedContentSections>
      </main>
      <SiteFooter />
    </>
  );
}
