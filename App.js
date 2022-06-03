import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Component/Contact'
import Menu from './Component/Menu'
import Music from './Component/Music'
import Pnf from './Component/Pnf'
import Track from './Component/sub/Track'




function App(){
  return(
    <BrowserRouter>

      <Menu/>

      <Routes>
        <Route path={`/`}  element={<Music/>} />
        <Route path={`/music`}  element={<Music/>} />
        <Route path={`/contact`}  element={<Contact/>} />
        <Route path={`/tracks/:id`}  element={<Track/>} />

        <Route path={`/*`}  element={<Pnf/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;