import { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { users } from '../slices/users'
import { getAllUsers } from '../services/operations/userAPIs'

function Home() {
  const inpRef = useRef()
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.users)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('FormData: ', inpRef.current.value)
  }

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <>
      {console.log(
        'USER DATA: ',
        userData.users.length > 0 ? userData.users : 'Loading...'
      )}
      <div className='container max-w-6xl px-4 mx-auto min-h-[85vh] flex items-center'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='search users'
            ref={inpRef}
            className='placeholder:text-slate-600 text-zinc-900 p-2 px-4 w-64 border-0 rounded-l-md'
          />
          <button type='submit' className='p-2 bg-zinc-800 px-4 rounded-r-md'>
            Go
          </button>
        </form>
      </div>
    </>
  )
}

export default Home
