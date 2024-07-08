import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Trippy from "@/components/ui/Trippy";
import React from "react";

export default function Home() {
  return (
      <main>
          <Container>
              <Hero />
          </Container>
          <Trippy />
          <section className='bg-black text-white'>
              <Container>
                  <TechStack />
              </Container>
              <Container className='flex flex-col items-center'>
                  <div className='background-red h-[20px] z-10 absolute top-1/2' />
                  <Experience />
              </Container>
          </section>
          {/*<ScreenFitText text={'Reach out'} />*/}
          {/*<Container>*/}
          {/*    <Contact />*/}
          {/*</Container>*/}

      </main>
  );
}
