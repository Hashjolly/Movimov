import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { Home } from './pages/Home'
import { Header } from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
