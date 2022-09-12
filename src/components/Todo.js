import React, { useState } from 'react'
import styled from 'styled-components'
import { addTitle } from '../store/reducers/cartSlice'
import { useDispatch } from 'react-redux'
import AddTitle from './AddTitle'

function Todo() {
	const [show, setShow] = useState(false)
	// const [exit, setExit] = useState(false)
	const [title, setTitle] = useState('')
	const [set, setSet] = useState(false)
	const dispatch = useDispatch()

	const titleChangeHandler = (e) => {
		setTitle(e.target.value)
	}
	const TitleSubmitHandler = () => {
		dispatch(
			addTitle({
				title: title,
				id: Math.random().toString(),
			}),
		)
		if (title === '') return
		setSet(true)
		setTitle('')
	}

	return (
		<div style={{ display: 'flex' }}>
			{set && <AddTitle />}
			{(!show && (
				<Btn_Add onClick={() => setShow(true)}>
					+ Добaвить карточку
				</Btn_Add>
			)) || (
				<D>
					<Form_div>
						<TitleInput
							type='text'
							value={title}
							onChange={titleChangeHandler}
						/>
						<Button_Div>
							<Add_btn onClick={TitleSubmitHandler}>
								+ Добaвить список
							</Add_btn>
							<Exit_btn onClick={() => setShow(false)}>
								X
							</Exit_btn>
						</Button_Div>
					</Form_div>
				</D>
			)}
		</div>
	)
}

export default Todo
const D = styled.div`
	display: flex;
	background-color: red;
	width: 272px;
	height: 100%;
	margin: 20px 0px 0px 20px;
`
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
	display: flex;
	flex-direction: column;
	border-radius: 2px;
`

const Button_Div = styled.div`
	display: flex;
`
const Add_btn = styled.button`
	width: 147px;
	height: 32px;
	margin: 5px 0 5px 15px;
	border: none;
	border-radius: 5px;
	background-color: #066094;
	color: white;
`
const Exit_btn = styled.button`
	margin: 5px 0 0 5px;
	height: 32px;
	border: none;
	border-radius: 5px;
	width: 30px;
	background-color: transparent;
	&:hover {
		background-color: rgb(145, 138, 138);
	}
`
const TitleInput = styled.input`
	outline: none;
	margin: 5px 5px 0 5px;
`
