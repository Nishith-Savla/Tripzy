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
} from "./components";

const SingleTrip = () => {
	return (
		<Section>
			<Background
				style={{
					backgroundImage:
						"url('https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress')",
				}}
			>
				<Title>Jammu & Kashmir in India</Title>
				<Description>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi assumenda repellat
					mollitia cumque obcaecati accusantium. Necessitatibus vitae architecto similique iste
					itaque, beatae iusto fugiat, distinctio accusantium ipsa autem modi suscipit.
				</Description>
			</Background>

			<Content>
				<Flex>
					<Title color="#4D455D" fontSize="34px">
						Jammu & Kashmir in India
					</Title>
					<Button>Join Now</Button>
				</Flex>

				<Cards>
					<Card
						style={{
							backgroundImage:
								"url('https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress')",
						}}
					>
						<Title color="#fff" fontSize="30px">
							Srinagar
						</Title>
					</Card>
					<Card
						style={{
							backgroundImage:
								"url('https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress')",
						}}
					>
						<Title color="#fff" fontSize="30px">
							Srinagar
						</Title>
					</Card>
					<Card
						style={{
							backgroundImage:
								"url('https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress')",
						}}
					>
						<Title color="#fff" fontSize="34px">
							Srinagar
						</Title>
					</Card>
				</Cards>

				<Flex>
					<Flex flexDirection="column">
						<Box>Starts On</Box>
						<Box bgColor="#FC7300">03-01-2023</Box>
					</Flex>
					<Flex flexDirection="column">
						<Box>Members</Box>
						<Box bgColor="#FC7300">100</Box>
					</Flex>
					<Flex flexDirection="column">
						<Box>Ends On</Box>
						<Box bgColor="#FC7300">03-05-2023</Box>
					</Flex>
				</Flex>
			</Content>
		</Section>
	);
};

export default SingleTrip;
