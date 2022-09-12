import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { removeItem } from '../store/reducers/cartSlice'
import ListItems from './ListItems'

function List_Map(props) {
	const dispatch = useDispatch()
	const { title } = useSelector((state) => state.cart)
	console.log(title)
	console.log(props)
	const deleteHandler = (id) => {
		dispatch(removeItem(id))
	}
	return (
		<>
			<Button_Div>
				{props.data?.map((el) => {
					return (
						<WrapperItems key={Math.random()}>
							<Map_Paragraph key={el.id}>{el.text}</Map_Paragraph>
							<Delet_Button onClick={() => deleteHandler(el.id)}>
								x
							</Delet_Button>
						</WrapperItems>
					)
				})}
				<ListItems id={props?.id} />
			</Button_Div>
		</>
	)
}

export default List_Map
const WrapperItems = styled.div`
	display: flex;
	background-color: white;
	width: 240px;
	justify-content: space-between;
	margin-top: 5px;
	/* margin-right: 10px; */
	border-radius: 3px;
`
const Button_Div = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	width: 240px;
	margin: 5px 10px 0 8px;
	border-radius: 2px;
	word-wrap: break-word;
`
const Map_Paragraph = styled.div`
	margin: 5px 0 0 5px;
	word-wrap: break-word;
	white-space: pre-wrap;
	display: block;
	overflow: hidden;
	text-decoration: none;
`
const Delet_Button = styled.button`
	margin: 3px 3px 0 0;
	width: 24px;
	height: 26px;
	background-color: white;
	border-radius: 1px;
	border: none;
	&:hover {
		background-color: rgb(145, 138, 138);
		border-radius: 2px;
	}
	&:first-child {
		background-color: red;
	}
`
