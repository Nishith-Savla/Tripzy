import { useEffect, useRef } from "react";
import "../css/CreateTrip.css";
import Navbar from "./navbar";

function EditTrip({ title, description, startDate, endDate, mapUrl }) {
	const tripQuery = use

	const formRef = useRef();

	useEffect(() => {
		formRef.current.title.value = title ?? "";
		formRef.current.description.value = description ?? "";
		formRef.current.startDate.value = startDate ?? Date.now();
		formRef.current.endDate.value = endDate ?? Date.now();
		formRef.current.mapUrl.value = mapUrl ?? "";
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);
		const data = Object.fromEntries(formData);

	};

	return (
		<>
			<section id="create-trip" className="d-flex dir-col">
				<Navbar />
				<h2 className="text-center trip-title">Create Trip</h2>
				<div className="d-flex justify-content-center">
					<form
						encType="multipart/form-data"
						className="input-container"
						ref={formRef}
						onSubmit={handleSubmit}
						method="post"
					>
						<div className="d-flex g-3">
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="title">
									Title
								</label>
								<input type="text" id="trip-name" name="title" placeholder="Title for the trip" />
							</div>
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="image">
									Upload Cover Image
								</label>
								<input type="file" id="image" name="coverImage" />
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
