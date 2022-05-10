import { NavLink } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

function Navbar() {
  return (
    <nav className='bg-slate-500'>
      <div className='container max-w-6xl px-4 mx-auto flex justify-between py-4'>
        <NavLink to='/' className='flex items-center justify-center space-x-1'>
          <AiFillGithub className='text-xl font-bold text-white' />
          <h1 className='text-xl font-bold text-white leading-tight'>
            Github Finder
          </h1>
        </NavLink>
        <div className='space-x-6 text-white'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
