import Container from "@/components/ui/Container";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Trippy from "@/components/ui/Trippy";
import React from "react";

export default function Home() {
  return (
      <main className='bg-[#f4f1ea] text-[#001ecb]'>
          <Container>
              <Hero />
            <Experience />
          </Container>
          <Trippy />
          <Container>
              <Contact />
          </Container>
      </main>
  );
}
