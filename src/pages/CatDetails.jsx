import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { getCats } from "../services/catApi";


function CatDetails() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCatDetails() {
      try {
        const data = await getCats();
        const selectedCat = data.find((item) => item.id === id);
        setCat(selectedCat);
      } catch (error) {
        console.log("Error fetching cat details:", error);
        setError("Failed to load cat details.");
      }
    }

    fetchCatDetails();
  }, [id]);


  if (error) {
    return (
      <Container className="text-center">
        <h2>Cat Details</h2>
        <p style={{ color: "red" }}>{error}</p>
        <Button as={Link} to="/cats" variant="secondary">
          Back to Cats
        </Button>
      </Container>
    );
  }


  if (!cat) {
    return (
      <Container className="text-center">
        <h2>Cat Details</h2>
        <p>Cat information is not available.</p>
        <Button as={Link} to="/cats" variant="secondary">
          Back to Cats
        </Button>
      </Container>
    );
  }


  const breed = cat.breeds[0];

  
  return (
    <Container>
      <h2 className="mb-4 text-center">Cat Details</h2>

      <Card className="mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Img variant="top" src={cat.url} alt={breed.name} />

        <Card.Body>
          <Card.Title>{breed.name}</Card.Title>
          <Card.Text>
            <strong>Origin:</strong> {breed.origin}
          </Card.Text>
          <Card.Text>
            <strong>Temperament:</strong> {breed.temperament}
          </Card.Text>
          <Card.Text>
            <strong>Life Span:</strong> {breed.life_span} years
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {breed.description}
          </Card.Text>

          <Button as={Link} to="/cats" variant="primary">
            Back to Cats
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default CatDetails;