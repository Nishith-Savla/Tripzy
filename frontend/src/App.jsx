import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddActivities from "./components/AddActivities";
import CreateTrip from "./components/CreateTrip";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Signup from "./components/signup";
import SingleTrip from "./components/SingleTrip/SingleTrip";
import AuthProvider from "./context/auth";
import "./css/palette.css";

function App() {
	return (
		<>
			<AuthProvider>
				<Navbar />
				<Router>
					<Routes>
						<Route path="/signin" element={<Signup />} />
						<Route path="/addActivity" element={<AddActivities />} />
						<Route path="/" element={<Dashboard />} />
						<Route path="/createTrip" element={<CreateTrip />} />
						<Route path="/single-trip" element={<SingleTrip />} />
					</Routes>
				</Router>
			</AuthProvider>
			<ToastContainer />
		</>
	);
}

export default App;
