import React from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { enrollTrip, getTrip } from "../api/trips";
import {
	Background,
	Box,
	Button,
	Content,
	Description,
	Flex,
	Heading,
	Section,
	Title,
} from "../components";
import { formatDate } from "../utils";

const ViewTripDetails = () => {
	const { id } = useParams();

	const tripQuery = useQuery({
		queryKey: ["trips", id],
		queryFn: () => getTrip(id),
	});

	const enrollTripMutation = useMutation({
		mutationFn: () => {
			return enrollTrip(id);
		},
		onSuccess: () => {
			// queryClient.invalidateQueries(["trips"]);
			console.log("Success");
		},
	});

	if (tripQuery.isLoading && tripQuery.fetchStatus !== "idle") {
		return <div>Loading...</div>;
	}

	const { data } = tripQuery.data;

	return (
		<>
			<Section>
				<Background
					style={{
						backgroundImage: "url(" + data?.coverImage + ")",
					}}
				>
					<Title>{data?.title}</Title>
					<Button
						onClick={() => {
							enrollTripMutation.mutate();
						}}
					>
						Join Now
					</Button>
				</Background>
				<Content>
					<Description>
						<Heading>Description:</Heading>
						<br />
						{data?.description}
					</Description>
					<hr />
					<Flex flexDirection="column" justify-content="left">
						<Flex flexDirection="row">
							<Box>Begins on</Box>
							<Box>{formatDate(data?.startDate ?? Date.now())}</Box>
							<Box>till</Box>
							<Box>{formatDate(data?.endDate ?? Date.now())}</Box>
						</Flex>
						<Flex flexDirection="row" bgColor="#FC730080">
							<Box>Members enrolled: </Box>
							<Box>{data?.memberCount ?? 45}</Box>
						</Flex>
					</Flex>
				</Content>
			</Section>
			<Section>
				<Content>
					<Title>Itinerary</Title>
				</Content>
			</Section>
		</>
	);
};

export default ViewTripDetails;
