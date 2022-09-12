import React from 'react'
import styled from 'styled-components'
import asses from '../asses/logo2.png'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<Main_Header>
			<Logo_Div>
				<Logo_Img src={asses} />
				<Button>Features</Button>
				<Button>Solutions</Button>
				<Button>Plans</Button>
				<Button>Pricing</Button>
				<Button>Resources</Button>
			</Logo_Div>
			<Login_Trello>
				<Link to='/form' style={{textDecoration: 'none'}}>
					<Log_In>Log in</Log_In>
				</Link>
				<Get_Trello>Get Trello for free</Get_Trello>
			</Login_Trello>
		</Main_Header>
	)
}

export default Header

const Main_Header = styled.div`
	background-color: white;
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 16px 30px -24px rgba(0, 0, 0, 0.99);
`
const Logo_Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 600px;
`
const Logo_Img = styled.img`
	width: 110px;
	height: 24px;
	margin-left: 13px;
`
const Button = styled.button`
	cursor: pointer;
	color: black;
	background-color: white;
	border: 0px;
	background-color: transparent;
	font-size: 16px;
	&:hover {
		color: blue;
	}
`
const Login_Trello = styled.div`
	display: flex;
	align-items: center;
`
const Log_In = styled.li`
	padding-top: 10px;
	padding-left: 10px;
	text-decoration: none;
	list-style: none;
  outline: none;
	margin-right: 10px;
	font-size: 19px;
	color: black;
	width: 60px;
	height: 40px;
	cursor: pointer;
	&:hover {
		color: blue;
	}
`
const Get_Trello = styled.div`
	width: 204px;
	height: 46px;
	background-color: blue;
	color: white;
	font-size: 20px;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	padding: 15px 0 0 24px;
	cursor: pointer;
	&:hover {
		background-color: rgb(18, 18, 160);
	}
`
