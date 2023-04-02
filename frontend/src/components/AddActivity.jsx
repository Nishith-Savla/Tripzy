import React from "react";
import "../css/modal.css";
import Navbar from "./Navbar";
import "../css/createTrip.css";

function AddActivity() {
	return (
		<>
			<section id="add-activity" className="d-flex dir-col">
				<h2 className="text-center trip-title">Add Activity</h2>
				<div className="d-flex justify-content-center">
					<form encType="multipart/form-data" className="input-container" method="post">
						<div className="d-flex g-3">
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="title">
									Title
								</label>
								<input
									type="text"
									id="activity-name"
									name="title"
									placeholder="Title for the trip"
								/>
							</div>
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="image">
									Upload Image URL
								</label>
								<input type="text" id="image" name="coverImage" placeholder="https://" />
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
								<label className="input-label" htmlFor="start-time">
									Start Time
								</label>
								<input type="time" id="start-time" name="startDate" />
							</div>
							<div className="d-flex dir-col stretch">
								<label className="input-label" htmlFor="end-time">
									End Time
								</label>
								<input type="time" id="end-time" name="endDate" />
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

export default AddActivity;
