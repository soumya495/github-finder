import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users/:user' element={<User />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
