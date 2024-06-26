import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import CoffeeStore from './pages/CoffeeStore';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Navigate to='/online-store/coffee' />} />
        <Route path='/online-store/coffee' element={<CoffeeStore />} />
        <Route path='/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
