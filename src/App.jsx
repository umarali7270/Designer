import React from 'react'
import Home from './page/Home'
import Article from './page/Article'
import Header2 from './components/Header2'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header2/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/article' element={<Article/>}/>

        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

    