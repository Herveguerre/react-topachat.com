import React from 'react';
import Footer from '../../components/Footer/Footer';
import TopBrands from '../../components/TopBrands/TopBrands';
import Header from '../../components/Header/Header';
import HomePage from '../HomePage';


export default function layout() {
  return (
    <div>
        <Header/>
        <TopBrands />
        
        
        <Footer/>
  
    </div>
  )
}
