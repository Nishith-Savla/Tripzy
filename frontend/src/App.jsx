import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddActivity from "./components/AddActivity";
import Dashboard from "./components/Dashboard";
import EditTrip from "./components/EditTrip";
import ViewTripDetails from "./components/ViewTripDetails";
import Navbar from "./components/Navbar";
import Signin from "./components/SignIn";
import AuthProvider from "./context/auth";
import "./css/palette.css";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 1000 * 30,
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<AuthProvider>
					<Router>
						<Navbar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/signin" element={<Signin />} />
							<Route path="/trips">
								<Route path="new" element={<EditTrip />} />
								<Route path=":id" element={<ViewTripDetails />} />
								<Route path=":id/update" element={<EditTrip />} />
								<Route path=":id/add-activity" element={<AddActivity />} />
							</Route>
						</Routes>
					</Router>
				</AuthProvider>
			</QueryClientProvider>
			<ToastContainer />
		</>
	);
}

export default App;
