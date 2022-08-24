import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Blog from './components/Pages/Blog';
import Dashboard from './components/Pages/Dashboard';
import Inventory from './components/Pages/Inventory';
import Purchase from './components/Pages/Purchase';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Shared/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/inventory' element={
          <Inventory></Inventory>

        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
