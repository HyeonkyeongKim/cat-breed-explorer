import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import CatCard from "../components/CatCard";
import { getCats } from "../services/catApi";




function CatList() {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCats() {
      try {
      const data = await getCats();
      setCats(data);
    } catch (error) {
      console.log("Error fetching cats:", error);
      setError("Failed to load cat data. Please try again.");
    
    }
  }

    fetchCats();
  }, []);

    const filteredCats = cats.filter((cat) => {
    const breedName = cat.breeds && cat.breeds[0] ? cat.breeds[0].name : "";
    return breedName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Container>
      <h2 className="mb-4 text-center">Cat Breeds</h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {error && (
        <p style={{ color: "red", textAlign: "center" }}>
          {error}
        </p>
      )}

      {filteredCats.length === 0 ? (
        <p className="text-center mt-4">No cat breeds found.</p>
      ) : (
        <Row className="mt-4">
          {filteredCats.map((cat) => (
            <Col key={cat.id} md={4} className="mb-4">
              <CatCard cat={cat} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}


export default CatList;