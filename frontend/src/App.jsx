import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddActivities from "./components/AddActivities";
import Dashboard from "./components/Dashboard";
import EditTrip from "./components/EditTrip";
import SingleTrip from "./components/SingleTrip/SingleTrip";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import AuthProvider from "./context/auth";
import "./css/palette.css";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Router>
						<Navbar />
						<Routes>
							<Route path="/signin" element={<Signup />} />
							<Route path="/addActivity" element={<AddActivities />} />
							<Route path="/" element={<Dashboard />} />
							<Route path="/createTrip" element={<EditTrip id="6428199dd63fe521bc4a8dc4" />} />
							<Route path="/single-trip" element={<SingleTrip />} />
						</Routes>
					</Router>
				</AuthProvider>
			</QueryClientProvider>
			<ToastContainer />
		</>
	);
}

export default App;
