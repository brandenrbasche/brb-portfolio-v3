import Container from "@/components/ui/Container";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Trippy from "@/components/ui/Trippy";
import React from "react";
import NewHero from "@/components/NewHero";
import Work from "@/components/Work";
import { spaceGrotesk } from "@/data/fonts";
import {twMerge} from "tailwind-merge";

export default function Home() {

  return (
      <main className={twMerge('bg-[#f4f1ea]', spaceGrotesk.className)}>
          <Container>
              <NewHero />
              <Work />
            {/*<Experience />*/}
          </Container>
          <Trippy />
          <Container>
              <Contact />
          </Container>
      </main>
  );
}
