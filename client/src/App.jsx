import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Header from './components/Header';
import Footer from './components/Footer';
import {Homepage}  from './pages/Homepage';
import { ProprtiesPage } from './pages/ProprtiesPage';
const  App = () => {
  return (
    <>
    <Router>
      <Header/>
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
        </Routes>
        <Routes>
          <Route path='/properties'element={<ProprtiesPage/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </Router>
    <ToastContainer/>
    </>
  );
}

export default App;
