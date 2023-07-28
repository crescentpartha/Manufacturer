import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import RetrievePassword from './components/Authentication/RetrievePassword';
import NotFound2 from './components/Shared/NotFound2';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import BlogLists from './components/Blogs/Bloglists/Bloglists';
import ImprovingPerformance from './components/Blogs/ImprovingPerformance';
import ReactStateManagement from './components/Blogs/ReactStateManagement';
import PrototypalInheritance from './components/Blogs/PrototypalInheritance';
import ModifyReactStateDirectly from './components/Blogs/ModifyReactStateDirectly';
import ImplementSearch from './components/Blogs/ImplementSearch';
import UnitTesting from './components/Blogs/UnitTesting';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<BlogLists></BlogLists>}></Route>
        <Route path='/blogs/how-will-you-improve-the-performance-of-a-react-application' element={<ImprovingPerformance></ImprovingPerformance>}></Route>
        <Route path='/blogs/what-are-the-different-ways-to-manage-a-state-in-a-react-application' element={<ReactStateManagement></ReactStateManagement>}></Route>
        <Route path='/blogs/how-does-prototypical-inheritance-work' element={<PrototypalInheritance></PrototypalInheritance>}></Route>
        <Route path='/blogs/why-you-do-not-set-the-state-directly-in-react' element={<ModifyReactStateDirectly></ModifyReactStateDirectly>}></Route>
        <Route path='/blogs/how-will-you-implement-a-search-to-find-products-by-name-of-an-array-of-products' element={<ImplementSearch></ImplementSearch>}></Route>
        <Route path='/blogs/what-is-a-unit-test-&-why-should-write-unit-tests' element={<UnitTesting></UnitTesting>}></Route>
        <Route path='/retrieve-password' element={<RetrievePassword></RetrievePassword>}></Route>
        <Route path='/*' element={<NotFound2></NotFound2>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
