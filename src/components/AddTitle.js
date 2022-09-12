import React from 'react'
import { useSelector } from 'react-redux'
import List_Map from './List_Map'
import styled from 'styled-components'

const AddTitle = () => {
	const title = useSelector((state) => state.cart.title)
	return (
		<TitleAdd>
			{title?.map((el) => {
				return (
					<MiniTitle key={Math.random().toString()}>
						<WrapperTitleMap>
							<H2Title key={el.id}>{el.title}</H2Title>
							<WrapperList>
								<List_Map data={el.items} id={el.id} />
							</WrapperList>
						</WrapperTitleMap>
					</MiniTitle>
				)
			})}
		</TitleAdd>
	)
}

export default AddTitle
const WrapperTitleMap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	background-color: rgb(196, 191, 191);
	justify-content: flex-start;
	/* gap: 20px; */
	border-radius: 3px;
	margin: 20px 10px;
`
const WrapperList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: min-content;
`
const TitleAdd = styled.div`
	display: flex;
	border-radius: 3px;
`
const H2Title = styled.h2`
	margin-left: 15px;
	width: 230px;
	word-wrap: break-word;
	white-space: pre-wrap;
	overflow: hidden;
`
const MiniTitle = styled.div``
