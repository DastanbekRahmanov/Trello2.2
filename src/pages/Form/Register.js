import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import asses from '../asses/logo2.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sentUsersData } from '../../store/reducers/uiUserSlice'
import { useNavigate } from 'react-router-dom'

function Register() {
	const navigation = useNavigate()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email не может быть пустым')
	const [passwordError, setPasswordError] = useState(
		'Password не может быть пустым',
	)
	const [formValid, setFormValid] = useState(false)
	// console.log(email)
	useEffect(() => {
		if (emailError || passwordError) {
			setFormValid(false)
		} else {
			setFormValid(true)
		}
	}, [emailError, passwordError])

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break
			case 'password':
				setPasswordDirty(true)
			default:
				break
		}
	}

	const emailHandler = (e) => {
		setEmail(e.target.value)
		if (!e.target.value.includes('@')) {
			setEmailError('некоректный email')
			if (!e.target.value) {
				setEmailError('Email не может быть пустым')
			}
		} else {
			setEmailError('')
		}
	}
	const passHandler = (e) => {
		setPass(e.target.value)
		if (e.target.value.length < 5) {
			setPasswordError('password должен длиннее 5')
			if (!e.target.value) {
				setPasswordError('Password не может быть пустым')
			}
		} else {
			setPasswordError('')
		}
	}

	const formSubmitHandler = (event) => {
		event.preventDefault()
		// alert('hello')
		dispatch(sentUsersData(email, pass))
		navigation('/login ')
	}

	return (
		<DivWrapper>
			<ImageLogo src={asses} />
			<FormTrello onSubmit={formSubmitHandler}>
				<H1>Вход в Trello</H1>
				{emailDirty && emailError && (
					<Error_Paragrap>{emailError}</Error_Paragrap>
				)}
				<Input
					value={email}
					onBlur={blurHandler}
					onChange={emailHandler}
					name='email'
					type='email'
					placeholder='Введите адрес электронный почты'
				/>
				{passwordDirty && passwordError && (
					<Error_Paragrap>{passwordError}</Error_Paragrap>
				)}
				<Input
					value={pass}
					onBlur={blurHandler}
					onChange={passHandler}
					name='password'
					type='password'
					placeholder='Введите пароль'
				/>
				{/* <Link to='/mainPage' style={{ textDecoration: 'none' }}> */}
				<Button title='navigate' type='submit' disabled={!formValid}>
					Регистрировать
				</Button>
				{/* </Link> */}
				<Orr>Или</Orr>
				<Link to='/login'>
					<Orr>У меня уже есть логинь</Orr>
				</Link>
				{/* <p>{email}</p> */}
			</FormTrello>
		</DivWrapper>
	)
}

export default Register

const DivWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 35px;
`
const ImageLogo = styled.img`
	width: 196px;
	height: 63px;
	margin-bottom: 35px;
`
const FormTrello = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 3px;
	padding: 25px 40px;
	box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
	width: 380px;
	height: 420px;
	-webkit-box-shadow: 3px 4px 30px 5px rgba(0, 0, 0, 0.33);
	box-shadow: 3px 4px 30px 5px rgba(0, 0, 0, 0.33);
	border-radius: 5px;
`
const H1 = styled.h1`
	text-align: center;
	color: #5e6c84;
	font-size: 16px;
	letter-spacing: -0.01em;
	line-height: 28px;
	margin-top: 10px;
	margin-bottom: 25px;
`
const Input = styled.input`
	width: 320px;
	height: 40px;
	margin-bottom: 17px;
	background-color: rgb(250, 250, 250);
	border: 2px solid rgb(211, 208, 208);
	border-radius: 5px;
	outline: none;
	&:focus {
		outline: none;
		background: #e6eff4;
		border-color: #4eaaf0;
	}
`
const Button = styled.button`
	width: 328px;
	height: 36px;
	background: #5aac44;
	border: none;
	color: white;
	font-weight: 600;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background: #68c54e;
	}
	&:disabled {
		background: gray;
	}
`
const Error_Paragrap = styled.p`
	color: red;
`
const Orr = styled.p`
	margin-top: 20px;
	margin-bottom: 0px;
	color: black;
	font-size: 16px;
	font-family: 'Times New Roman', Times, serif;
`
