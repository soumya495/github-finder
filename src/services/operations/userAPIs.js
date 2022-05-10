import axios from 'axios'
import { setUsers, setLoading } from '../../slices/users'

// get search results
export function getSearchedUsers(query) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await axios(
        `${process.env.REACT_APP_GITHUB_API_URL}/search/users?q=${query}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_FINDER_ACCESS_TOKEN,
          },
        }
      )
      if (response.data) {
        dispatch(setUsers(response.data))
        await dispatch(setLoading(false))
      }
    } catch (e) {
      console.log('Fetch User Error', e)
    }
  }
}

// clear existing users
export function clearUsers() {
  return (dispatch) => {
    dispatch(setUsers([]))
  }
}
