import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { usePleaseStay } from 'react-use-please-stay';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Blogs from './components/Pages/Blogs';
import Discover from './components/Pages/Discover';
import ErrorPage from './components/Pages/ErrorPage';

const App = () => {

  // animating the page title
  usePleaseStay({ titles: ["Don't leave us", 'We are still here'] });

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<ErrorPage />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Blogs' element={<Blogs />} />
          <Route exact path='/Discover' element={<Discover />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App