import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AllCategory from './pages/AllCategory';
import AllBrand from './pages/AllBrand';
import Products from './pages/Products';
import ProductDetalisPage from './pages/ProductDetails';
import Favurite from './pages/Favurite';
import Cart from './pages/Cart';
import AddProduct from './pages/admin/AddProduct';
import AddBrand from './pages/admin/AddBrand';
import AllProduct from './pages/admin/AllProduct';
import AddCategory from './pages/admin/AddCategory';
import AddSubCategory from './pages/admin/AddSubCategory';
import AllOrders from './pages/admin/AllOrders';
import OrderDetails from './components/admin/all-order/OrderDetails';
import UserAllOrders from './pages/user/UserAllOrders';
import FavuriteProductPage from './pages/user/FavuriteProductPage';
import UserAllAddresPage from './pages/user/UserAllAddresPage';
import UserAddAddressPage from './pages/user/UserAddAddressPage';
import UserEditAddressPage from './pages/user/UserEditAddressPage';
import Profile from './pages/user/Profile';
function App() {
  return (
    <>
    
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/all-category' element={<AllCategory/>}/>
        <Route path='/all-brand' element={<AllBrand/>}/>
        <Route path='/all-brand' element={<AllBrand/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/products/productDetals/:id' element={<ProductDetalisPage/>}/>
        <Route path='/favurite' element={<Favurite/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/admin/all-product' element={<AllProduct/>}/>
        <Route path='/admin/add-product' element={<AddProduct/>}/>
        <Route path='/admin/add-brand' element={<AddBrand/>}/>
        <Route path='/admin/add-category' element={<AddCategory/>}/>
        <Route path='/admin/add-sub-category' element={<AddSubCategory/>}/>
        <Route path='/admin/all-orders' element={<AllOrders/>}/>
        <Route path='/admin/orders/:id' element={<OrderDetails/>}/>
        {/* user routes */}
        <Route path='/user/all-orders' element={<UserAllOrders/>}/>
        <Route path='/user/favuriteProduct' element={<FavuriteProductPage/>}/>
        <Route path='/user/address' element={<UserAllAddresPage/>}/>
        <Route path='/user/add-address' element={<UserAddAddressPage/>}/>
        <Route path='/user/edit-address' element={<UserEditAddressPage/>}/>
        <Route path="/user/profile" element={<Profile />} /> 
      </Routes>
      <Footer/>

    </Router>
    </>
  );
}

export default App;
