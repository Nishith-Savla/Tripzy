import { axiosInstance } from "../utils";

export function getTrips() {
	return axiosInstance.get("/trips").then((res) => res.data);
}

export function getTrip(id) {
	return axiosInstance.get(`trips/${id}`).then((res) => res.data);
}

export function createTrip({
	title,
	description,
	coverImage,
	startDate,
	endDate,
	mapUrl,
	itineraryId,
	createdBy,
}) {
	return axiosInstance
		.post("/trips", {
			title,
			description,
			coverImage,
			startDate,
			endDate,
			mapUrl,
			itineraryId,
			createdBy,
		})
		.then((res) => res.data);
}

export function updateTrip(id, params) {
	return axiosInstance
		.patch(`/trips/${id}`, {
			...params,
		})
		.then((res) => res.data);
}

export function deleteTrip(id) {
	return axois.delete(`trips/${id}`).then((res) => res.data);
}
