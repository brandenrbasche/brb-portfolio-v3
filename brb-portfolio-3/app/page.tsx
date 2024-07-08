import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Trippy from "@/components/ui/Trippy";
import {ScreenFitText} from "@/components/ui/ScreenFitText";
import React from "react";

export default function Home() {
  return (
      <main>
          <Container>
              <Hero />
          </Container>
          {/*<Trippy />*/}
          <section className='bg-black text-white'>
              <Container>
                  <TechStack />
              </Container>
              <Container className='flex flex-col items-center'>
                <Experience />
              </Container>
          </section>
          {/*<ScreenFitText text={'Reach out'} />*/}
          <Container>
              <Contact />
          </Container>

      </main>
  );
}
