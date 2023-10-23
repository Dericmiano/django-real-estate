import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
import Footer from './components/Footer';
import {Homepage}  from './pages/Homepage';
import { ProprtiesPage } from './pages/ProprtiesPage';
import { NotFound } from './components/NotFound';
const  App = () => {
  return (
    <>
    <Router>
      <Header/>
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/properties'element={<ProprtiesPage/>}></Route>
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <ToastContainer theme='dark'/>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
