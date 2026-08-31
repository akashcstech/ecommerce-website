import { Routes, Route } from 'react-router';
import {Orders} from './pages/Orders'
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckOutPage';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='Orders' element={<Orders />} />
      <Route path='CheckOut' element={<CheckOutPage />} />
    </Routes>
  );
}

export default App
