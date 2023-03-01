import { Toaster } from 'react-hot-toast';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import ResetPassword from './components/Login/ResetPassword';
import SignUp from './components/Login/SignUp';
import AddItems from './components/Pages/AddItems';
import Dashboard from './components/Pages/Dashboard';
import Inventory from './components/Pages/Inventory';
import MyItems from './components/Pages/MyItems';
import Profile from './components/Pages/Profile';
import Purchase from './components/Pages/Purchase';
import Purchases from './components/Pages/Purchases';
import UpdateItems from './components/Pages/UpdateItems';
import Footer from './components/Shared/Footer';
import Header from './components/Shared/Header';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Shared/NotFound';
import RequireAuth from './components/Shared/RequireAuth';

function App() {

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';
  const isResetPassword = location.pathname === '/resetpassword';


  return (
    <div>
      {!isLoginPage && !isSignUpPage && !isResetPassword ? <Header /> : null}
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/inventory' element={
          <Inventory></Inventory>
        }></Route>

        <Route path="/products/:id" element={
          <RequireAuth>
            <UpdateItems></UpdateItems>
          </RequireAuth>

        } ></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/purchases' element={<Purchases></Purchases>}></Route>
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>} />
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>} />
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>} />
        <Route path='/profile' element={
          <RequireAuth>
            <Profile></Profile>
          </RequireAuth>} />

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {!isLoginPage && !isSignUpPage && !isResetPassword ? <Footer /> : null}
      <Toaster />
    </div>
  );
}

export default App;
