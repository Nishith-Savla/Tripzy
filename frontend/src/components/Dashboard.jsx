import React from "react";
import Card from "./card";
import "../css/dashboard.css";

function Dashboard() {
	return (
		<div id="dashboard">
			<h1>My trips</h1>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
				}}
			>
				<Card
					title="Span"
					createdBy="Aayush Patel"
					startDate="23"
					endDate="24"
					memberCount={12}
					coverImage={[
						"https://travellersworldwide.com/wp-content/uploads/2022/06/shutterstock_712575202.jpg.webp",
					]}
				/>
			</div>
		</div>
	);
}

export default Dashboard;
