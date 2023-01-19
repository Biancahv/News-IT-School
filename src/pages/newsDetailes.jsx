import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function NewsDetailes() {
  const { newsId } = useParams();
  return (
    <Layout>
      <Container>
        <h1>Titlul Stirii</h1>
        <p>Parametrul venit din router: {newsId}</p>
      </Container>
    </Layout>
  );
}

export default NewsDetailes;
