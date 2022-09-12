import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './reducers/cartSlice'
import uiUserSlice from './reducers/uiUserSlice'

const store = configureStore({
	reducer: {
		ui: uiUserSlice.reducer,
		cart: cartSlice,
	},
})
export default store
