import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import Compose from './Compose';
import Blog from './Blog';
import Explore from './Explore';
import Edit from './Edit';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/compose' element={<Compose/>}></Route>
    <Route path='/blogs/:blogID' element={<Blog/>}></Route>
    <Route path='/blogs' element={<Explore author=""/>}></Route>
    <Route path='/blogs/user' element={<Explore author={localStorage.getItem("email")}/>}></Route>
    <Route path='edit/:blogID' element={<Edit/>}></Route>
  </Routes>
  </BrowserRouter>
);

