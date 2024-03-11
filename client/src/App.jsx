import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
