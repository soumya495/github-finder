import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../services/operations/userAPIs'
import Spinner from '../components/assets/spinner.gif'
import { useNavigate } from 'react-router-dom'

function User() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  const {
    avatar_url,
    bio,
    blog,
    company,
    followers,
    following,
    html_url,
    hireable,
    type,
    location,
    login,
    name,
    public_gits,
    public_repos,
    twitter_username,
  } = userData.user

  return (
    <div className='container max-w-6xl px-4 py-16 mx-auto min-h-[85vh]'>
      {console.log(userData.user)}
      <button
        type='button'
        onClick={() => navigate('/')}
        className='uppercase mb-4 text-white'
      >
        back to search
      </button>
      <div className='w-full lg:flex items-start lg:space-x-6'>
        {/* profile-image */}
        <div className='relative w-full max-w-md mx-auto lg:mx-0 rounded-md overflow-hidden shadow-xl'>
          <div
            className='absolute top-0 left-0 z-5 w-full h-full'
            style={{ backgroundColor: 'rgba(20, 20, 20, 0.4)' }}
          ></div>
          <img src={avatar_url} alt={`Profile-${name}`} className='w-full' />
          <div className='absolute bottom-4 left-4 z-10'>
            <p className='text-white font-semibold text-xl'>{name}</p>
            <p className='text-white'>{login}</p>
          </div>
        </div>
        {/* profile-header-content */}
        <div className='my-8 max-w-md mx-auto md:items-center lg:max-w-fit lg:mx-0 lg:my-0 flex flex-col space-y-2 lg:items-start'>
          <div className='lg:flex items-center gap-2'>
            <h1 className='text-3xl font-extrabold text-white leading-tight'>
              {name}
            </h1>
            <div className='flex items-center md:justify-center lg:justify-start gap-2'>
              {type && (
                <span className='rounded-full px-2 bg-slate-700 text-emerald-400'>
                  {type}
                </span>
              )}
              {hireable && (
                <span className='rounded-full px-2 bg-slate-700 text-blue-400'>
                  Hireable
                </span>
              )}
            </div>
          </div>
          <p className='text-white md:text-center lg:text-left'>{bio}</p>
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='my-4 p-2 border-2 self-start md:mx-auto lg:mx-0 border-white text-slate-100 rounded-md hover:bg-white hover:text-slate-900'
          >
            Visit Github Profile
          </a>
          {(location || blog || twitter_username) && (
            <div className='self-stretch flex flex-col flex-wrap space-y-6 lg:flex-row lg:items-end'>
              {location && (
                <div className='w-full p-3 flex flex-col justify-center shadow-md rounded-md'>
                  <p>Location</p>
                  <p className='text-white text-lg font-bold'>{location}</p>
                </div>
              )}
              {blog && (
                <div className='w-full p-3 flex flex-col justify-center shadow-md rounded-md'>
                  <p>Blog</p>
                  <a
                    className='text-white text-lg font-bold '
                    href={blog.includes('http') ? blog : `http://${blog}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className='w-full p-3 flex flex-col justify-center shadow-md rounded-md'>
                  <p>Twitter</p>
                  <p className='text-white text-lg font-bold'>
                    {twitter_username}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default User
