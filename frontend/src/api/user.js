import { axiosInstance } from "../utils";

export function postUser({ user, token }) {
	return axiosInstance.post("api/auth/login", { user, token }).then((res) => {
		return res.data;
	});
}
