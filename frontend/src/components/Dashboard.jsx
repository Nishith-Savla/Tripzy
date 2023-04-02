import React from "react";
import Card from "./card";
import "../css/dashboard.css";
import { getEnrolledTrips, getTrips } from "../api/trips";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "../utils";

function Dashboard() {
	const allTripsQuery = useQuery({
		queryKey: ["trips"],
		queryFn: getTrips,
	});

	const enrolledTripsQuery = useQuery({
		queryKey: ["trips", localStorage.getItem("access_token")],
		enabled: allTripsQuery.data !== undefined,
		queryFn: getEnrolledTrips,
	});

	if (allTripsQuery.isLoading && allTripsQuery.fetchStatus !== "idle") {
		return <div>Loading...</div>;
	}

	console.log(allTripsQuery.data);
	const { data: allTrips } = allTripsQuery.data;
	const enrolledTripsQueryData = enrolledTripsQuery.data;
	let enrolledTrips = null;
	if (enrolledTripsQueryData) {
		enrolledTrips = enrolledTripsQueryData.data;
	}

	return (
		<div id="dashboard">
			<div>
				<h1>All trips</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
					}}
				>
					{enrolledTrips?.length !== 0
						? enrolledTrips?.map((trip) => {
								return (
									<Card
										key={trip._id}
										title={trip.title}
										createdBy={trip.createdBy}
										startDate={formatDate(trip.startDate)}
										endDate={formatDate(trip.endDate)}
										memberCount={trip.memberCount}
										coverImage={trip.coverImage}
									/>
								);
						  })
						: null}
				</div>
			</div>
			<div>
				<h1>All trips</h1>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
					}}
				>
					{allTrips.map((trip) => {
						return (
							<Card
								key={trip._id}
								title={trip.title}
								createdBy={trip.createdBy}
								startDate={formatDate(trip.startDate)}
								endDate={formatDate(trip.endDate)}
								memberCount={trip.memberCount}
								coverImage={trip.coverImage}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
