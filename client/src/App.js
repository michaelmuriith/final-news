import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
