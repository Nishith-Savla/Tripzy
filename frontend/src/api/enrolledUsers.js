import { axiosInstance } from "../utils";

export const getEnrolledUsers = async (tripId) => {
	return axiosInstance.get(`/enrolledTrips/getEnrolledUsers/${tripId}`).then((res) => res.data);
};
