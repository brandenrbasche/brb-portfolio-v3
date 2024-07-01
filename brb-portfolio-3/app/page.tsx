import Container from "@/components/ui/Container";
import Hero from "@/components/Hero";

export default function Home() {
  return (
      <main>
          <Container>
              <div className='px-2'>
                  <Hero />
                  <div>experience</div>
                  <div>tech stack</div>
                  <div>reach out</div>
              </div>
          </Container>

      </main>
  );
}
