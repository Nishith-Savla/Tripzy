import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup";
import "./css/palette.css"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signin" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
