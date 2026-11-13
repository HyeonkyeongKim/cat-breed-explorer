import { Form } from "react-bootstrap";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <Form.Control
      type="text"
      placeholder="Search cat breeds..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mb-3"
    />
  );
}

export default SearchBar;