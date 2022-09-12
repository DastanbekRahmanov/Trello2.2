import React from 'react'
import styled from 'styled-components'
import MainHeader from '../../components/MainHeader'
import Todo from '../../components/Todo'
import asses from '../asses/back_img.jpg'

function TrelloMainPage() {
	return (
		<>
			<MainHeader />
			<TrelloMain_Img src={asses} />
			<Todo />
		</>
	)
}

export default TrelloMainPage

const TrelloMain_Img = styled.img`
	width: 100%;
	height: 100%;
	z-index: -1;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	position: fixed;
	top: 0;
`
