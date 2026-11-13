function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        marginTop: "40px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <p>© 2026 Cat Breed Explorer</p>
      <p>
        Data from{" "}
        <a
          href="https://thecatapi.com"
          target="_blank"
          rel="noreferrer"
        >
          The Cat API
        </a>
      </p>
    </footer>
  );
}

export default Footer;