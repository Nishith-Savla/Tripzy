import styled from "styled-components";

export const Section = styled.section`
	background-color: #f5e9cf;
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 100%;
	width: 100%;
	padding: 20px;
`;

export const Background = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	gap: 20px;
	height: calc(100vh - 130px);
	width: 100%;
	padding: 20px;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 40px;
`;

export const Title = styled.h2`
	font-size: ${(props) => props.fontSize || "34px"};
	font-weight: 600;
	color: ${(props) => props.color || "#fff"};
	text-shadow: 1px 1px #000;
`;

export const Heading = styled.div`
	font-size: ${(props) => props.fontSize || "30px"};
	padding: 20px 20px 10px 20px;
	font-weight: 600;
	margin-bottom: 0px;
`;
export const Description = styled.div`
	font-size: 22px;
	color: #000;
	font-weight: 400;
	background-color: #f5e9cf95;
	padding: 10px;
`;

export const Content = styled.div`
	padding: 10px 15px;
	display: flex;
	justify-content: flex-start;
	gap: 15px;
	flex-direction: column;
	width: 100%;
`;

export const Itinerary = styled.section`
	background-color: #f5e9cf10;
	display: grid;
	grid-template-columns: 1fr;
	height: 100%;
	width: 100%;
	padding: 20px;
`;

export const Day = styled.div`
	display: block;
	background-color: #f5e9cf80;
`;

export const Cards = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
`;

export const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 50vh;
	width: 30vh;
	padding: 20px;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 5px;
`;

export const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.bgColor || "#fbffb180"};
	flex-direction: ${(props) => props.flexDirection || "row"};
	gap: ${(props) => props.gap || "5px"};
`;

export const Box = styled.h4`
	padding: 10px;
	border-radius: 5px;
	//background-color: ${(props) => props.bgColor || "#4D455D"};
	color: ${(props) => props.color || "#000"};
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
`;

export const Button = styled.button`
	padding: 5px 20px;
	color: #fff;
	background-color: #fc7300;
	border: none;
	outline: none;
	font-size: 24px;
`;

export const Activities = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const Activity = styled.div`
	margin-left: 40px;
	background-color: #f5e9cf;
	padding: 10px;
`;

export const ActivityImage = styled.img`
	height: 100px;
	width: 100px;
	border-radius: 5px;
`;

export const ActivityFlex = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
`;

export const ActivityTitle = styled.h4`
	font-size: 20px;
	font-weight: 600;
	color: #333;
`;

export const ActivityDescription = styled.p`
	font-size: 16px;
	font-weight: 400;
	color: #555;
`;

export const ActivityDate = styled.p`
	font-size: 18px;
	font-weight: 00;
	background-color: #4d455d;
	color: #fff;
	padding: 10px;
	border-radius: 5px;
`;

export const Span = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: #333;
	background-color: #fff;
	padding: 5px;
	border-radius: 5px;
	margin-left: 10px;
`;

export const MapLink = styled.a`
	font-size: 20px;
	font-weight: 400;
	color: #5611df;
	text-align: ${(props) => props.textAlign || "left"};
`;

export const Suggestion = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	padding: 20px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const TextArea = styled.textarea`
	padding: 10px;
	border: 2px solid #333;
	outline: none;
	border-radius: 5px;
`;

export const Container = styled.div`
	background-color: #f5e9cf;
	height: 35vh;
	width: 100%;
	overflow-y: scroll;
	margin-top: 20px;
	padding: 10px;
`;

export const Message = styled.div`
	padding: 20px;
	background-color: #4d455d;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const MessageFlex = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`;

export const MessageTitle = styled.h4`
	font-size: 18px;
	color: #bdbcbc;
`;

export const MessageAuthor = styled.p`
	font-size: 20px;
	font-weight: 600;
	color: #fff;
`;

export const MessageStatus = styled.p`
	font-size: 16px;
	background-color: gray;
	color: #fff;
	padding: 10px;
	border-radius: 5px;
`;
