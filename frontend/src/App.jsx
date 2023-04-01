import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./components/signup";
import AuthProvider from "./context/auth";
import "./css/palette.css";
import AddActivities from "./components/AddActivities";
import CreateTrip from "./components/CreateTrip";
import Home from "./components/Home";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/signin" element={<Signup />} />
            <Route path="/addActivity" element={<AddActivities />} />
            <Route path="/" element={<Home />} />
            <Route path="/createTrip" element={<CreateTrip />} />
          </Routes>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
