import Container from "@/components/ui/Container";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Trippy from "@/components/ui/Trippy";
import React from "react";

export default function Home() {
  return (
      <main className='bg-[#f4f1ea]'>
          <Container>
              <Hero />
          {/*</Container>*/}
          {/*<section className='bg-black text-white'>*/}
          {/*<Container><p>experience</p></Container>*/}
            <Experience />
          </Container>
          <Trippy />
          <Container>
              <Contact />
          </Container>
          {/*</section>*/}
      </main>
  );
}
