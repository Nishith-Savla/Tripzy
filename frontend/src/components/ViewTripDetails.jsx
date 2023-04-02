import React, { useRef } from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTrip } from "../api/trips";
import {
	Activities,
	Activity,
	ActivityDate,
	ActivityDescription,
	ActivityFlex,
	ActivityImage,
	ActivityTitle,
	Background,
	Box,
	Button,
	Container,
	Content,
	Day,
	Description,
	Flex,
	Form,
	Heading,
	Itinerary,
	MapLink,
	Message,
	MessageAuthor,
	MessageFlex,
	MessageStatus,
	MessageTitle,
	Section,
	Span,
	Suggestion,
	TextArea,
	Title,
} from "../components";
import { axiosInstance, formatDate } from "../utils";

const ViewTripDetails = () => {
	const { id } = useParams();
	const sug = useRef(null);

	const tripQuery = useQuery({
		queryKey: ["trips", id],
		queryFn: () => getTrip(id),
	});

	function createSuggestion(id, dt) {
		return axiosInstance
			.post(`suggestions/${id}`, {
				tripId: id,
				dt,
			})
			.then((res) => res.dt);
	}

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

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		// const data = Object.fromEntries(formData);
		let dt = {
			suggestion: sug?.current.value,
		};
		createSuggestionMutate.mutate(id, dt);
	};

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
					<MapLink href={data?.mapUrl} target="_blank" textAlign="center">
						Open in map
					</MapLink>
				</Content>
			</Section>
			<Itinerary>
				<Title color="#000">Itinerary</Title>
				<Day>
					<Heading font-size="20px">Day 1</Heading>
					<Activities>
						<Activity>
							<Flex>
								<ActivityDate>
									Start <Span>03-03-2023</Span>
								</ActivityDate>
								<ActivityDate>
									End <Span>05-03-2023</Span>
								</ActivityDate>
							</Flex>
							<Flex gap="10px">
								<ActivityImage src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a" />
								<ActivityFlex>
									<ActivityTitle>Activity Title</ActivityTitle>
									<ActivityDescription>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos facere iure
										eligendi!
									</ActivityDescription>
								</ActivityFlex>
							</Flex>
							<MapLink href="https://maps.google.com/">Open in Map</MapLink>
						</Activity>
					</Activities>
				</Day>
			</Itinerary>

			<Suggestion>
				<div className="left-side">
					<Title color="#000">Suggestions</Title>
					<Form onSubmit={handleSubmit}>
						<TextArea ref={sug} placeholder="Type your suggestion..." rows={5} />
						<Button type="submit">Submit</Button>
					</Form>
				</div>

				<div className="right-side">
					<Title color="#000">Approvals</Title>
					<Container>
						<MessageFlex>
							<Message>
								<Flex bgColor="transparent">
									<MessageAuthor>Hello World</MessageAuthor>
									<MessageStatus>PENDING</MessageStatus>
								</Flex>
								<MessageTitle>Can we bring something in the trip.</MessageTitle>
								<Flex bgColor="transparent">
									<Button>Accept</Button>
									<Button>Decline</Button>
								</Flex>
							</Message>
						</MessageFlex>
					</Container>
				</div>
			</Suggestion>
		</>
	);
};

export default ViewTripDetails;
