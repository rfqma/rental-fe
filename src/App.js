import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import CariMobil from "./components/CariMobil";
import CarContainer from "./components/CarContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/carimobil" element={<CariMobil />} />

        <Route exact path="/car" element={<CarContainer />} />
      </Routes>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
