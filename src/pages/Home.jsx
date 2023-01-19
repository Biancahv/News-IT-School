import { Container } from "react-bootstrap";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <section>
        <Container>
          <h1>Tech</h1>
        </Container>
      </section>
      <section>
        <Container>
          <h1>Fotbal</h1>
        </Container>
      </section>
      <section>
        <Container>
          <h1>Fashion</h1>
        </Container>
      </section>
      <section>
        <Container>
          <h1>Favorite</h1>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
