function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "30px",
        background: "linear-gradient(to right, #f8f9fa, #eef1f7)",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Kim's Cat Breed Explorer 
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        Search and explore different cat breeds
      </p>
    </header>
  );
}

export default Header;
