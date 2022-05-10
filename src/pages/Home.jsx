import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserList from '../components/userList'
import { getSearchedUsers, clearUsers } from '../services/operations/userAPIs'
import Spinner from '../components/assets/spinner.gif'
import { AiOutlineWarning } from 'react-icons/ai'

function Home() {
  const inpRef = useRef()
  const warnRef = useRef() // empty search handle
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.users)

  // empty search warning - add
  function addWarning() {
    warnRef.current.style.opacity = 1
    warnRef.current.style.visibility = 'visible'
  }

  // empty search warning - remove
  function clearWarning() {
    warnRef.current.style.opacity = 0
    warnRef.current.style.visibility = 'hidden'
  }

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = inpRef.current.value
    // check empty search
    if (!formData || formData === '') {
      addWarning()
      setTimeout(clearWarning, 2500)
      return
    }
    // search
    clearWarning()
    console.log('FormData: ', formData)
    dispatch(clearUsers())
    dispatch(getSearchedUsers(inpRef.current.value))
  }

  // handle clear state
  function clearState() {
    inpRef.current.value = ''
    dispatch(clearUsers())
  }

  return (
    <>
      <div className='container max-w-6xl px-4 py-16 mx-auto min-h-[85vh] flex flex-col justify-center'>
        <form onSubmit={handleSubmit} className='relative h-fit w-fit'>
          <input
            type='text'
            placeholder='search users'
            ref={inpRef}
            className='placeholder:text-slate-600 text-zinc-900 p-2 px-4 w-64 border-0 outline-0 rounded-l-md'
          />
          <p
            className='absolute left-0 -top-10 font-bold text-white flex items-center justify-center space-x-2 opacity-0 invisible transition-all duration-500'
            ref={warnRef}
          >
            <AiOutlineWarning fill='#f44' fontSize='1.25rem' />
            <span>Please Enter Something</span>
          </p>
          <button
            type='submit'
            className='bg-slate-500 hover:bg-slate-600 p-2 border-0 outline-0 text-white px-6 rounded-r-md'
          >
            Go
          </button>
          {userData.users.items && (
            <button className='ml-4 hover:text-white' onClick={clearState}>
              Clear
            </button>
          )}
        </form>
        {userData.loading && (
          <img
            src={Spinner}
            alt='spinner'
            className='w-64 h-64 mx-auto my-14'
          />
        )}
        {userData.users.items && <UserList users={userData.users.items} />}
      </div>
    </>
  )
}

export default Home
