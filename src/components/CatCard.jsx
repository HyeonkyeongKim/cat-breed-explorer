import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CatCard({ cat }) {
  const breed = cat.breeds && cat.breeds[0];

  return (
    <Card className="h-100 cat-card">
      <Card.Img
        variant="top"
        src={cat.url}
        alt={breed ? breed.name : "Cat"}
        className="cat-img"
      />
      <Card.Body>
        <Card.Title>{breed ? breed.name : "Unknown Cat"}</Card.Title>
        <Card.Text>
          Origin: {breed ? breed.origin : "Not available"}
        </Card.Text>
        <Button as={Link} to={`/cats/${cat.id}`} className="main-btn">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;