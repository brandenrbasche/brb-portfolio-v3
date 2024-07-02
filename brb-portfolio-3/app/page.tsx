import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

export default function Home() {
  return (
      <main>
          <Container>
              <Hero />
              <Experience />
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
