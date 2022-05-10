import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  user: {},
  loading: false,
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setUsers(state, value) {
      state.users = value.payload
    },
    setUser(state, value) {
      state.user = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUsers, setUser, setLoading } = userSlice.actions

export default userSlice.reducer
