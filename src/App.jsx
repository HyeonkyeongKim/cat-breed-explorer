import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import CatList from "./pages/CatList";
import CatDetails from "./pages/CatDetails";
import RandomCat from "./pages/RandomCat";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Header />
      <AppNavbar />

      <main>
        <Container className="my-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cats" element={<CatList />} />
            <Route path="/cats/:id" element={<CatDetails />} />
            <Route path="/random-cat" element={<RandomCat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;