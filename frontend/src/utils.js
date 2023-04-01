import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message, type) => {
	toast(message, {
		position: toast.POSITION.TOP_RIGHT,
		autoClose: 5000,
		pauseOnHover: true,
		type: type,
	});
};

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_backendURL,
	headers: {
		"ngrok-skip-browser-warning": true,
    Authorization : `Bearer ${localStorage.getItem("access_token")}`
	},
	// timeout: 1000,
});

// format in yyyy-MM-dd
export const formatDate = (date) => {
	return new Date(date).toISOString().slice(0, 10);
};
