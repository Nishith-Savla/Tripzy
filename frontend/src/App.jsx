import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthProvider from "./context/auth";

function App() {
	return (
		<AuthProvider>
			<ToastContainer />
		</AuthProvider>
	);
}

export default App;
