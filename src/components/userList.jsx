import { Link } from 'react-router-dom'

function UserList({ users }) {
  return (
    <div className='max-w-full my-8 gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {users.map((user) => (
        <div
          className='shadow-xl bg-base-200 flex items-center space-x-4 p-6 rounded-md'
          key={user.id}
        >
          <img
            src={user.avatar_url}
            alt={`profile-${user.login}`}
            className='w-14 h-14 rounded-full'
          />
          <div className=''>
            <h2 className='font-bold text-white'>{user.login}</h2>
            <div className=''>
              <Link
                className='text-sm leading-tight'
                to={`/users/${user.login}`}
              >
                Visit profile
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList
