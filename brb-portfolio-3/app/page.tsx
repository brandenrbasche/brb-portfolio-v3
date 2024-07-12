import Container from "@/components/ui/Container";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Trippy from "@/components/ui/Trippy";
import React from "react";

export default function Home() {
  return (
      <main>
          <Container className='bg-[#f4f1ea]'>
              <Hero />
          </Container>
          <section className='bg-black text-white'>
              <Container><p>EXPERIENCE</p></Container>
              <Experience />
              <Trippy />
              <Container>
                  <Contact />
              </Container>
          </section>
      </main>
  );
}
