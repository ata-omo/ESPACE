import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { ThemeProvider } from '../src/Store/theme.js';
import { useEffect, useState } from 'react';

const App = () => {


  const [dark,setDark] = useState(true);

  const darkMode =()=>{
    setDark(true);
  }

  const lightMode=()=>{
    setDark(false);
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    if(dark)document.querySelector('html').classList.add('dark');
  },[dark])

  return (
    <ThemeProvider value={{dark,darkMode,lightMode}}>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
