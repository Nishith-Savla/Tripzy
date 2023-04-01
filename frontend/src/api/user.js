import { axiosInstance } from "../utils";

export function postUser({ user, token }) {
	return axiosInstance.post("/auth/login", { user, token }).then((res) => res.data);
}
