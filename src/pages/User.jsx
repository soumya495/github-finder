import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../services/operations/userAPIs'
import Spinner from '../components/assets/spinner.gif'

function User() {
  const params = useParams()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.users)

  const { user } = params

  useEffect(() => {
    console.log(user)
    dispatch(getUser(user))
  }, [])

  if (userData.loading)
    return (
      <div className='w-screen min-h-[85vh] flex justify-center items-center'>
        <img src={Spinner} alt='spinner' className='w-96 h-96' />
      </div>
    )

  return <>{user}</>
}

export default User
