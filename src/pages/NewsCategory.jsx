import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

function NewsCategory() {
  const { categoryId } = useParams();
  return (
    <Layout>
      <Container>
        <h1>Numele Categoriei</h1>
        <p>Parametrul venit din router: {categoryId}</p>
      </Container>
    </Layout>
  );
}

export default NewsCategory;
