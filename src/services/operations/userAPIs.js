import axios from 'axios'
import { setUsers, setUser, setUserRepos, setLoading } from '../../slices/users'

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
        dispatch(setLoading(false))
      }
    } catch (e) {
      console.log('Fetch User Error', e)
    }
  }
}

// get single user
export function getUser(user) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await axios(
        `${process.env.REACT_APP_GITHUB_API_URL}/users/${user}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_GITHUB_FINDER_ACCESS_TOKEN,
          },
        }
      )
      if (response.data) {
        dispatch(setUser(response.data))
        dispatch(setLoading(false))
      }
    } catch (e) {
      console.log('Fetch User Error', e)
    }
  }
}

// get user repos
export function getUserRepos(user) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await axios(
      `${process.env.REACT_APP_GITHUB_API_URL}/users/${user}/repos`,
      {
        headers: {
          Authorization: process.env.REACT_APP_GITHUB_FINDER_ACCESS_TOKEN,
        },
      }
    )
    if (response.data) {
      dispatch(setUserRepos(response.data))
      dispatch(setLoading(false))
    }
  }
}

// clear existing users
export function clearUsers() {
  return (dispatch) => {
    dispatch(setUsers([]))
  }
}

// clear exisiting user in state
export function clearUser() {
  return (dispatch) => {
    dispatch(setUser({}))
  }
}
