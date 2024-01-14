import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage />
        <Routes>
          <Route path="/" element={Homepage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
