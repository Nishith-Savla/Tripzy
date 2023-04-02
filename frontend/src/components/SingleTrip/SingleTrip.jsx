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
			<Section>
				<Content>
					<Title>Itinerary</Title>
				</Content>
			</Section>
		</>
	);
};

export default SingleTrip;
