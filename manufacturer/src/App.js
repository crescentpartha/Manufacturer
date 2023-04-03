import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RetrievePassword from './components/Authentication/RetrievePassword';
import NotFound from './components/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/retrieve-password' element={<RetrievePassword></RetrievePassword>}></Route>
        <Route path='/notfound' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
