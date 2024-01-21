import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ModulePage from "./ModulePage/ModulePage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import PassPage from "./PassPage/PassPage";
import CompPage from "./CompPage/CompPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/modules" element={<ModulePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/passes" element ={<PassPage />}/>
          <Route path="/comp" element ={<CompPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
