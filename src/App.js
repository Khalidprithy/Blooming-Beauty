import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
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
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Shared/NotFound';
import RequireAuth from './components/Shared/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
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
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
