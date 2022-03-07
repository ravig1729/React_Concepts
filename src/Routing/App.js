import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import LaptopList from './LaptopList'
import MobileList from './MobileList'
import PageNotFound from './PageNotFound'
import Product from './Product'
import ProductDesc from './ProductDesc'
import DetailPage from './DetailPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/products' element={<Product />} >
            <Route path='mobile' element={<MobileList />}>
              <Route path=':myMobileParam' element={<ProductDesc />} />
            </Route>
            <Route path='laptop' element={<LaptopList />} />
          </Route>
          <Route path='/detailpage' element ={<DetailPage/>}/>
        </Routes>
        <Footer />
        {/* <div>
          <Header />
          <Home />
          <About />
          <Contact />
          <Footer />
        </div> */}
      </Router>
    )
  }
}

export default App