import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='border-b-2 border-b-slate-200'>
      <div className='container max-w-6xl px-4 mx-auto flex justify-between py-4'>
        <h1>Github Finder</h1>
        <div className='space-x-6'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
