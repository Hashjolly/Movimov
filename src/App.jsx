import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Movies from "./pages/Movies";
import { MovieDetails } from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
