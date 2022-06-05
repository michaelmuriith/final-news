import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import Login from './pages/auth/login/login';
import Register from './pages/auth/register/register';
import Homepage from './pages/Home';
import Article from './pages/singlePage';
import AddArticle from './pages/addArticle'
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/article/:id' element={<Article />} />
        <Route path="addNews" element={<AddArticle />} />
      </Routes>
    </>
  );
}

export default App;
