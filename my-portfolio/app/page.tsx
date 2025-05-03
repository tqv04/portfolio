"use client";
import IntroducePage from "@/app/introduce/page";
import ProjectPage from "./project/page";
import Skill from "./skill/page";
import About from "./about/page";
import ScrollFadeIn from "./scrollfaein/ScrollFadeIn";
import ServicePage from "./service/page";
import ContactPage from "./contact/page";
export default function Home() {
  return (
    <>
      <ScrollFadeIn>
        <IntroducePage />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ServicePage />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <About />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Skill />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ProjectPage />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <ContactPage />
      </ScrollFadeIn>
    </>
  );
}
