import React, { useState } from 'react'
import styled from 'styled-components'
import ListItems from './ListItems'
import List_Map from './List_Map'

function TrelloCard() {
	const [show, setShow] = useState(false)

	return (
		<>
			{(!show && (
				<Btn_Add onClick={() => setShow(true)}>
					+ Добaвить карточку
				</Btn_Add>
			)) || (
				<Form_div>
					<List_Map />
					<ListItems />
				</Form_div>
			)}
		</>
	)
}

export default TrelloCard

const Btn_Add = styled.button`
	background-color: #00000050;
	border: none;
	width: 272px;
	height: 40px;
	color: white;
	margin: 20px 0px 0px 20px;
	border-radius: 15px;
`
const Form_div = styled.div`
	background-color: rgb(196, 191, 191);
	width: 272px;
	height: 100%;
	margin: 20px 0px 0px 20px;
	display: flex;
	flex-direction: column;
`
