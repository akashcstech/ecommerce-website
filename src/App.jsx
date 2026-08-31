import { Routes, Route } from 'react-router';
import {Orders} from './pages/Orders'
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/CheckOut/CheckOutPage';
import { Tracking } from './pages/Tracking';
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='Orders' element={<Orders />} />
      <Route path='CheckOut' element={<CheckOutPage />} />
      <Route path='Tracking' element={<Tracking />} />
    </Routes>
  );
}

export default App
