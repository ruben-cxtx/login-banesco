import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login } from './components';
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
