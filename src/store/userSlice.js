import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loader: false
}

export const getUserInfo = createAsyncThunk(
    "getUserInfo",
    async function (userInfo, { dispatch, rejectWithValue }) {
        dispatch(loaderOn())
        const request = await fetch("http://jsonplaceholder.typicode.com/users")
        const response = await request.json()
        dispatch(setUsersInfo(response))
        dispatch(loaderOff())
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUsersInfo: (state, action) => {
            state.users = action.payload
        },
        loaderOn: (state) => {
            state.loading = true
        },
        loaderOff: (state) => {
            state.loading = false
        },
    }
})

export const { setUsersInfo, loaderOn, loaderOff } = userSlice.actions

export default userSlice.reducer