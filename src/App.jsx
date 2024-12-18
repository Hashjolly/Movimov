import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Favorites from "./pages/Favorites";
import Movies from "./pages/Movies";
import { MovieDetails } from "./pages/MovieDetails";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
