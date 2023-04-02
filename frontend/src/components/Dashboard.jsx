import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink } from "react-router-dom";
import { getEnrolledTrips, getTrips } from "../api/trips";
import "../css/dashboard.css";
import { formatDate } from "../utils";
import Card from "./card";

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

	const { data: allTrips } = allTripsQuery.data;
	const enrolledTripsQueryData = enrolledTripsQuery.data;
	let enrolledTrips = null;
	if (enrolledTripsQueryData) {
		enrolledTrips = enrolledTripsQueryData.data;
	}

	return (
		<div id="dashboard">
			{enrolledTrips?.length ? (
				<div>
					<h3 style={{ alignContent: "center" }}>Your trips</h3>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
						}}
					>
						{enrolledTrips
							? enrolledTrips.map((trip) => {
									return (
										<Card
											key={trip._id}
											title={trip.title}
											createdBy={trip.createdBy}
											startDate={formatDate(trip.startDate ?? Date.now())}
											endDate={formatDate(trip.endDate ?? Date.now())}
											memberCount={trip.memberCount}
											coverImage={trip.coverImage}
										/>
									);
							  })
							: null}
					</div>
				</div>
			) : null}
			<div>
				<h3>All trips</h3>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
					}}
				>
					{allTrips?.map((trip) => {
						return (
							<NavLink to={`/trips/${trip._id}`}>
								<Card
									key={trip._id}
									title={trip.title}
									createdBy={trip.createdBy}
									startDate={formatDate(trip.startDate)}
									endDate={formatDate(trip.endDate)}
									memberCount={trip.memberCount}
									coverImage={trip.coverImage}
								/>
							</NavLink>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
