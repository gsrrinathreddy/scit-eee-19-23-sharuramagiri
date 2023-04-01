import React from 'react';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

import './App.css';
import AboutUs from './Pages/AboutUs';
import Experience from './Pages/Experience';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Hobbies from './Pages/Hobbies';
function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path ="AboutUs"element={<AboutUs/>}/>
        <Route path ="Experience"element={<Experience/>}/>
        <Route path ="Qualification"element={<Qualification/>}/>
        <Route path ="Skills"element={<Skills/>}/>
        <Route path ="Hobbies"element={<Hobbies/>}/>
        </Routes>
        </BrowserRouter>

        
    </div>
  );
}
export default App;
