import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setUsers(state, value) {
      state.users = value.payload
    },
  },
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer
