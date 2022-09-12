import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addItem } from '../store/reducers/cartSlice'
function ListItems(props) {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')
	const [exit, setExit] = useState(false)

	const inputHandler = (e) => {
		setValue({
			...value,
			title: e.target.value,
		})
		setValue(e.target.value)
	}
	const submitHandler = (event) => {
		event.preventDefault()
		if (value !== '') {
			dispatch(
				addItem({
					value: value,
					id: props.id,
				}),
			)
		}

		if (value === '') return
		setValue('')
	}
	return (
		<Form onSubmit={submitHandler}>
			{(!exit && (
				<>
					<Input_for_todo
						placeholder='Ввести заголовок для этой карточки'
						type='text'
						value={value}
						onChange={inputHandler}
					/>
					<Button_Div>
						<Add_btn type='submit'>+ Добaвить список</Add_btn>
						<Exit_btn onClick={() => setExit(true)}>X</Exit_btn>
					</Button_Div>
				</>
			)) || (
				<Btn_More onClick={() => setExit(false)}>
					+ Добaвить список
				</Btn_More>
			)}
		</Form>
	)
}

export default ListItems
const Button_Div = styled.div`
	display: flex;
`
const Form = styled.form``
const Input_for_todo = styled.textarea`
	outline: none;
	max-height: 162px;
	resize: none;
	border: 2px solid white;
	width: 230px;
	margin: 5px 0 0 2px;
	outline: none;
	word-wrap: break-word;
	border-radius: 4px;
	white-space: pre-wrap;
	::-webkit-input-placeholder {
		font-size: 11px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	overflow-wrap: break-word;
	height: 60px;
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
const Btn_More = styled.button`
	background-color: rgb(196, 191, 191);
	border: none;
	width: 220px;
	height: 30px;
	color: black;
	margin: 10px 0px 5px 5px;
	border-radius: 12px;
	&:hover {
		background-color: rgb(145, 138, 138);
	}
`
