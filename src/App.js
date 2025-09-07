
import './App.css';
import React from 'react';
import { Nav } from './feature/component/Nav';
import { Home } from './feature/view/Home';
function App() {
  return (
     
    <div className="w-full relative">
     <Nav/>
     <Home/>
      
    </div>
  );
}

export default App;
