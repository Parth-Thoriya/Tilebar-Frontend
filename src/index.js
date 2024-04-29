import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import DetailView from './pages/detailView';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/login';
import SignUp from './pages/signup';
import CreateProduct from './Admin/createProduct';
import CatogaryPage from './pages/catogaryPage';
import Dashboard from './pages/adminPages/dashboard';
import Aboutus from './pages/aboutus';
import ProfilePage from './pages/profilePage';
import CartPage from './pages/cartPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        if(localStorage.getItem("jwt") === null){
          <>
            <Route path='/' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
          </>
        }
        else{
          <Route path='/home' element={<Navbar />}>            
            <Route index element={<Home />} />
            <Route path='/home/aboutus' element={<Aboutus />} />
            <Route path='/home/admin' element={<Dashboard/>}>
            <Route index element={<Home/>}/>
            <Route path='/home/admin/aboutus' element={<Aboutus />} />  
            <Route path='/home/admin/createProduct' element={<CreateProduct/>}/>
            </Route>
            <Route path='/home/cart' element={<CartPage/>}/>
            <Route path='/home/profile' element={<ProfilePage/>}/>
            <Route path='/home/catogary/:cat' element={<CatogaryPage/>}/>
            <Route path='/home/detailView/:_id' element={<DetailView />} />            
          </Route>
        }
      </Routes>
    </BrowserRouter>


  </>
);


