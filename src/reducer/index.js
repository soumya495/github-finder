import userReducer from '../slices/users'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: userReducer,
})

export default rootReducer
