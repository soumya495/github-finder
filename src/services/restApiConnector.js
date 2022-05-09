import axios from 'axios'

export const axiosInstance = axios.create({})

export const requestConnector = (method, url, auth) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    headers: {
      Authorization: auth ? auth : null,
    },
  })
}
