import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



function Home() {
  return (
    <Container className="text-center">
      <h2>Welcome to Cat Breed Explorer</h2>
      <p>Discover different cat breeds and learn about them.</p>

      <Button
        as={Link}
        to="/cats"
        style={{
          backgroundColor: "#6f42c1",
          border: "none",
          padding: "10px 20px",
        }}
      >
        View Cats
      </Button>
    </Container>
  );
}


export default Home;