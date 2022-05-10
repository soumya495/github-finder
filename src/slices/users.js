import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false,
}

const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setUsers(state, value) {
      state.users = value.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    },
  },
})

export const { setUsers, setLoading } = userSlice.actions

export default userSlice.reducer
