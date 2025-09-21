import React, { useState } from 'react'
import {Navbar} from './components/Navbar.jsx'
import { NewsBoard } from './components/NewsBoard.jsx';

export default function App() {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState(''); 

  return (
    <div>
      {/* Pass both props down */}
      <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery} />
      <NewsBoard category={category} searchQuery={searchQuery} />
    </div>
  )
}
