import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Trippy from "@/components/ui/Trippy";

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
                <Experience />
            </Container>
          </section>
          <Container>
              <Contact />
          </Container>


          {/*<Container>*/}
          {/*    <div className='px-2'>*/}
          {/*        <Hero />*/}
          {/*        <div>experience</div>*/}
          {/*        <div>tech stack</div>*/}
          {/*        <div>reach out</div>*/}
          {/*    </div>*/}
          {/*</Container>*/}

      </main>
  );
}
