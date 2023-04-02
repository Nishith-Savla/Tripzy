import React, { Fragment } from "react";

import Navbar from "../navbar";
import {
	Background,
	Description,
	Section,
	Title,
	Content,
	Cards,
	Card,
	Flex,
	Box,
	Button,
	Heading,
	Itinerary,
	Day,
	Activity,
	Activities,
	ActivityImage,
	ActivityDescription,
	ActivityTitle,
	ActivityDate,
	ActivityFlex,
	MapLink,
	Span,
} from "./components";

const SingleTrip = () => {
	return (
		<>
			<Section>
				<Background
					style={{
						backgroundImage:
							"url('https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress')",
					}}
				>
					<Title>Jammu & Kashmir in India</Title>
					<Button>Join Now</Button>
				</Background>
				<Content>
					<Description>
						<Heading>Description:</Heading>
						<br />
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi assumenda repellat
						mollitia cumque obcaecati accusantium. Necessitatibus vitae architecto similique iste
						itaque, beatae iusto fugiat, distinctio accusantium ipsa autem modi suscipit.
					</Description>
					<hr />
					<Flex flexDirection="column" justify-content="left">
						<Flex flexDirection="row">
							<Box>Begins on</Box>
							<Box>03-01-2023</Box>
							<Box>till</Box>
							<Box>03-05-2023</Box>
						</Flex>
						<Flex flexDirection="row" bgColor="#FC730080">
							<Box>Members enrolled: </Box>
							<Box>100</Box>
						</Flex>
					</Flex>
				</Content>
			</Section>
			<Itinerary>
				<Title color="#000">Itinerary</Title>
				<Day>
					<Heading font-size="20px">Day 1</Heading>
					<Activities>
						<Activity></Activity>
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
		</>
	);
};

export default SingleTrip;
