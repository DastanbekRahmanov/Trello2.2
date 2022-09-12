import './App.css'
import Login from './pages/Form/Login'
import MainPage from './pages/main/MainPage'
import { Route, Routes } from 'react-router-dom'
import TrelloMainPage from './pages/trelloMain/TrelloMainPage'
import Register from './pages/Form/Register'
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainPage />} exact />
				<Route path='register' element={<Register />} exact />
				<Route path='login' element={<Login />} exact />
				<Route path='/form' element={<Login />} exact />
				<Route path='/mainPage' element={<TrelloMainPage />} exact />
				<Route path='/exit' element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
