
import './App.css';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Product from  './pages/Products/Product';
function App() {
  return (
  
      <Router>
        <Routes>
          <Route path='/' element= {<Layout/>}/>
          <Route path='Product' element= {<Product/>}/>
        </Routes>
      </Router>
      
    
  );
}

export default App;
