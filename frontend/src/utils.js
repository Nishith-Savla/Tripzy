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
	timeout: 1000,
});
