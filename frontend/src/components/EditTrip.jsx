import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { createTrip, getTrip, updateTrip } from "../api/trips";
import "../css/CreateTrip.css";
import { formatDate } from "../utils";
import { useParams } from "react-router-dom";

const queryClient = new QueryClient();

function EditTrip() {
	const { id } = useParams();

	const tripQuery = useQuery({
		queryKey: ["trips", id],
		enabled: !!id,
		queryFn: () => getTrip(id),
	});

	const editTripMutation = useMutation({
		mutationFn: (data) => {
			if (id) return updateTrip(id, data);
			else return createTrip();
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["trips"]);
		},
	});

	const formRef = useRef();

	useEffect(() => {
		if (tripQuery.data) {
			const { title, description, startDate, endDate, mapUrl } = tripQuery.data?.data;

			if (!!formRef.current) {
				formRef.current.title.value = title ?? "";
				formRef.current.description.value = description ?? "";
				formRef.current.startDate.value = formatDate(startDate ?? Date.now());
				formRef.current.endDate.value = formatDate(endDate ?? Date.now());
				formRef.current.mapUrl.value = mapUrl ?? "";
			}
		}
	}, [tripQuery.data]);

	if (tripQuery.isLoading && tripQuery.fetchStatus !== "idle") return "Loading...";

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);
		editTripMutation.mutate(data);
	};

	return (
		<>
			<section id="create-trip" className="d-flex dir-col">
				<h2 className="text-center trip-title">Create Trip</h2>
				<div className="d-flex justify-content-center">
					<form className="input-container" ref={formRef} onSubmit={handleSubmit} method="post">
						<div className="d-flex g-3">
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="title">
									Title
								</label>
								<input type="text" id="trip-name" name="title" placeholder="Title for the trip" />
							</div>
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="image">
									Cover Image URL
								</label>
								<input type="text" id="image" name="coverImage" />
							</div>
						</div>
						<div>
							<label className="input-label" htmlFor="description">
								Description
							</label>
							<textarea
								name="description"
								id="description"
								cols="auto"
								rows={3}
								placeholder="Description for the trip"
							/>
						</div>
						<div className="d-flex g-3">
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="start-date">
									Start Date
								</label>
								<input type="date" id="start-date" name="startDate" />
							</div>
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="end-date">
									end Date
								</label>
								<input type="date" id="end-date" name="endDate" />
							</div>
						</div>
						<div className="d-flex dir-col stretch mb-1in">
							<label className="input-label" htmlFor="map-url">
								Map URL
							</label>
							<input
								type="text"
								id="map-url"
								name="mapUrl"
								placeholder="Enter the google maps link"
							/>
						</div>
						<button
							type="submit"
							className="btn d-flex align-items-center justify-content-center mx-auto"
						>
							Save
						</button>
					</form>
				</div>
			</section>
		</>
	);
}

export default EditTrip;
