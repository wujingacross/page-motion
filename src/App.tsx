import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contack from "./pages/Contack";
import Carousel from "./pages/Carousel";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contack" element={<Contack />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
