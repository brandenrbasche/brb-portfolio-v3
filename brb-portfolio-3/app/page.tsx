import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main>
          <Container>
              <Hero />
              {/*<TechStack />*/}
          </Container>
          <section className='bg-black text-white'>
            <Container>
                <TechStack />
                <Experience />
                {/*<Contact />*/}
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
