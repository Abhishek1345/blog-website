import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './signup';
import Login from './login';
import Compose from './Compose';
import Blog from './Blog';
import Explore from './Explore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/compose' element={<Compose/>}></Route>
    <Route path='/blogs/:blogID' element={<Blog/>}></Route>
    <Route path='/blogs' element={<Explore/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

