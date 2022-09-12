import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	title: [],
}
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.title.forEach((i) => {
				if (i.id === action.payload.id) {
					const arr = []
					arr.push({
						text: action.payload.value,
						id: Math.random().toString(),
					})
					return i.items.push(...arr)
				}
				return i
			})
		},
		addTitle(state, action) {
			const newTitle = {
				title: action.payload.title,
				id: action.payload.id,
				items: [],
			}
			state.title.push(newTitle)
		},
		removeItem(state, action) {
			console.log(action.payload, 'action')
			const arr = state.title?.map((i) => {
				const arr = i.items?.filter((i) => i.id !== action.payload)
				return { title: i.title, id: i.id, items: arr }
			})
			console.log(arr, 'arr')
			state.title = arr
		},
	},
})

export const { removeItem, addTitle } = cartSlice.actions
export const { addItem } = cartSlice.actions
export default cartSlice.reducer
