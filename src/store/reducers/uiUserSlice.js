import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
	status: null,
	usersData: [],
}

export const sentUsersData = createAsyncThunk(
	'ui/sentUsersData',
	async (data, { rejectWithValue }) => {
		console.log(data)
		try {
			const dataTodos = {
				email: data,
			}
			await fetch(
				'https://usersdata-30c2d-default-rtdb.firebaseio.com/user.json',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(dataTodos),
				},
			)
			return dataTodos
		} catch (error) {}
	},
)

const uiUserSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		emailToggle: (state, action) => {
			console.log(action.payload)
			state.status = 'success'
			// const dataOfUsers = action.payload
			// state.usersData.push(dataOfUsers)
			// console.log(dataOfUsers);
		},
	},
	extraReducers: {
		// [sentUsersData.fulfilled]: (state, action) => {
		// 	console.log(action.payload)
		// 	state.status = 'success'
		// },
	},
})

export const uiActions = uiUserSlice.actions
export default uiUserSlice
