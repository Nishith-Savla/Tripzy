import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddActivities from "./components/AddActivities";
import EditTrip from "./components/EditTrip";
import Home from "./components/Home";
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
						<Routes>
							<Route path="/signin" element={<Signup />} />
							<Route path="/addActivity" element={<AddActivities />} />
							<Route path="/" element={<Home />} />
							<Route path="/createTrip" element={<EditTrip id="6428199dd63fe521bc4a8dc4" />} />
						</Routes>
					</Router>
				</AuthProvider>
			</QueryClientProvider>
			<ToastContainer />
		</>
	);
}

export default App;
