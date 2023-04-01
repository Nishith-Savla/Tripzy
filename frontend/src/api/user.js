import { axiosInstance } from "../utils";

export function postUser({ user, token }) {
	return axiosInstance.post("/auth/users", { user, token }).then((res) => res.data);
}
