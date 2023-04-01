import styled from "styled-components";

export const Section = styled.section`
	background-color: #fbffb1;
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
`;

export const Title = styled.h2`
	font-size: ${(props) => props.fontSize || "40px"};
	font-weight: 500;
	color: ${(props) => props.color || "#fff"};
	text-shadow: 1px 1px #000;
`;

export const Description = styled.p`
	font-size: 22px;
	background-color: #bfdb3890;
	padding: 10px;
`;

export const Content = styled.div`
	padding: 30px 15px;
	display: flex;
	justify-content: flex-start;
	gap: 15px;
	flex-direction: column;
	width: 100%;
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
	flex-direction: ${(props) => props.flexDirection || "row"};
	gap: 5px;
`;

export const Box = styled.h4`
	padding: 10px;
	border-radius: 5px;
	background-color: ${(props) => props.bgColor || "#4D455D"};
	color: ${(props) => props.color || "#fff"};
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	color: #fff;
	background-color: #4d455d;
	border: none;
	outline: none;
	font-size: 24px;
`;
