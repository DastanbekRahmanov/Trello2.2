import React from 'react'
import styled from 'styled-components'
import asses from '../pages/asses/logo2.png'
import { Link } from 'react-router-dom'

function MainHeader() {
	return (
		<Main_Div>
			<Main_Left_Div>
				<TrelloMainPage_Logo src={asses} />
				<button>Рабочие пространства</button>
				<button>Недавные</button>
				<button>В избранном</button>
				<button>Шаблоны</button>
				<button>Создать</button>
			</Main_Left_Div>
			<Main_Right_Div>
				<input placeholder='Поиск...' />
				<div>DR</div>
				<Link to='/exit' style={{ textDecoration: 'none' }}>
					<Exit_Button>Выйти</Exit_Button>
				</Link>
			</Main_Right_Div>
		</Main_Div>
	)
}

export default MainHeader

const Main_Div = styled.div`
	background-color: hsla(188, 95.2%, 46.7%, 0.9);
	width: 100%;
	height: 44px;
	display: flex;
	justify-content: space-between;
`
const Main_Left_Div = styled.div`
	display: flex;
	margin-left: 15px;
	& > button {
		background-color: transparent;
		border: none;
		margin-right: 15px;
		cursor: pointer;
		width: 93px;
		height: 30px;
		margin-top: 7px;
	}
	& > button:hover {
		background: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
	}
	& > button:last-child {
		background-color: rgba(0, 0, 0, 0.08);
		border-radius: 5px;
	}
	& > button:last-child:hover {
		background-color: rgba(0, 0, 0, 0.14);
	}
`
const TrelloMainPage_Logo = styled.img`
	width: 75px;
	height: 31px;
	margin-top: 5px;
	margin-right: 15px;
`
const Main_Right_Div = styled.div`
	display: flex;
	margin-right: 18px;
	& > input {
		width: 250px;
		height: 30px;
		border: 1px solid rgba(0, 0, 0, 0.08);
		background-color: rgba(0, 0, 0, 0.04);
		outline: none;
		border-radius: 7px;
		margin-top: 5px;
	}
	& > input:hover {
		background: rgba(0, 0, 0, 0.1);
	}
	& > div {
		width: 35px;
		height: 26px;
		background-color: rgba(0, 0, 0, 0.18);
		border-radius: 10px;
		text-align: center;
		padding-top: 10px;
		margin-top: 3px;
		margin-left: 10px;
		cursor: pointer;
	}
	& > div:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`
const Exit_Button = styled.button`
	width: 60px;
	height: 32px;
	background-color: rgba(0, 0, 0, 0.18);
	margin-top: 5px;
	margin-left: 10px;
	border-radius: 10px;
	text-align: center;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`
