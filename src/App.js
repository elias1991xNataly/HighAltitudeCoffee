import './App.css';
import { Routes, Route } from 'react-router-dom';
import Shop from "./Parent_components/Shop/Shop";
import Cart from './Parent_components/Cart/Cart';
import Main from "./Parent_components/Main/Main";
import "../src/index.css";
import Success from './Parent_components/Success/Success';
import Checkout from './Parent_components/Checkout';
import CoffeeCart from '../src/Context/Cart_context';

function App() {



  return (

      <div className='App'>

        <CoffeeCart>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/Success" element={<Success />}></Route>
        </Routes>

        </CoffeeCart>
      </div>
  );
}

export default App;
