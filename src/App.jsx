import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { Home } from './pages/Home'
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
