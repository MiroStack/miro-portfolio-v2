
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Nav } from './feature/component/Nav';
import { Home } from './feature/view/Home';
import { ThemeToggle } from './feature/component/ThemeToggle';
function App() {
  const [toggle, setToggle] = useState(false);
  return (

    <div className="w-full relative">


      <Nav />
      <ThemeToggle toggle={toggle} setToggle={setToggle} />
      <Home theme={toggle?"light":"dark"}/>

    </div>
  );
}

export default App;
