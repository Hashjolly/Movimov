import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Accueil</Link> | <Link to="/user/1">Utilisateur 1</Link> | <Link to="/user/2">Utilisateur 2</Link>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/user/:userId" Component={User} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
