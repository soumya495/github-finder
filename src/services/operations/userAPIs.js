import { requestConnector } from '../restApiConnector'
import { setUsers } from '../../slices/users'

export function getAllUsers() {
  return async (dispatch) => {
    try {
      const response = await requestConnector(
        'GET',
        `${process.env.REACT_APP_GITHUB_API_URL}/users`,
        process.env.REACT_APP_GITHUB_FINDER_ACCESS_TOKEN
      )

      if (response.data) {
        dispatch(setUsers(response.data))
      }
    } catch (err) {
      console.log('User fetch error:', err)
    }
  }
}
