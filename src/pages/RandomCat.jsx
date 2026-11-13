import { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { getRandomCat } from "../services/catApi";


function RandomCat() {
  const [cat, setCat] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function fetchRandomCat() {
      try {
        const data = await getRandomCat();
        setCat(data);
        setError(null);
      } catch (err) {
        console.log("Error fetching random cat:", err);
        setError("Failed to load cat. Please try again.");
      }
    }

    fetchRandomCat();
  }, []);
  

  async function handleNewCat() {
    try {
      const data = await getRandomCat();
      setCat(data);
      setError(null);
    } catch (err) {
      console.log("Error fetching random cat:", err);
      setError("Failed to load cat. Please try again.");
    }
  }


  if (error) {
    return (
      <Container className="text-center">
        <h2>Today's Cat</h2>
        <p style={{ color: "red" }}>{error}</p>
      </Container>
    );
  }



  if (!cat) {
    return (
      <Container className="text-center">
        <h2>Cat of the Day</h2>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="text-center">
      <h2 className="mb-4">Today's Cat</h2>

      <Card className="mx-auto" style={{ maxWidth: "500px" }}>
        <Card.Img variant="top" src={cat.url} alt="Random cat" />
        <Card.Body>
          <Button onClick={handleNewCat} variant="primary">
            Show Another Cat
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default RandomCat;