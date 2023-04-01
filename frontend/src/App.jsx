import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Signup from "./components/signup";
import AuthProvider from "./context/auth";
import "./css/palette.css";

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Routes>
						<Route path="/signin" element={<Signup />} />
					</Routes>
				</Router>
			</AuthProvider>
			<ToastContainer />
		</>
	);
}

export default App;
