import React from 'react'
import styled from 'styled-components'
import asses from '../asses/main_img.png'
import Header from './Header'
import { Link } from 'react-router-dom'

function MainPage() {
	return (
		<>
			<Header />
			<Div_Paragraph_Image>
				<Div_H1_P>
					<Main_H1>Trello helps teams move work forward.</Main_H1>
					<Main_P>
						Collaborate, manage projects, and reach new productivity
						peaks. From high rises to the home office, the way your
						team works is unique—accomplish it all with Trello.
					</Main_P>
				</Div_H1_P>
				<Main_Img src={asses} />
			</Div_Paragraph_Image>
		</>
	)
}

export default MainPage

const Div_Paragraph_Image = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 100%;
`
const Div_H1_P = styled.div`
	width: 45%;
	padding-top: 8rem;
`
const Main_H1 = styled.h1`
	font-size: 48px;
	color: black;
`
const Main_P = styled.p`
	font-size: 20px;
`
const Main_Img = styled.img`
	width: 400px;
	height: 400px;
	margin-top: 70px;
`
