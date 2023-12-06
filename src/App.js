import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
  </Routes>
 </BrowserRouter>
    </>
  );
}

export default App;
