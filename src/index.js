import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductList from './pages/ProductMain';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import Product from './pages/ProductDetails';
import Cart from './pages/Cart';
import ShowCheckout from './pages/CheckOut';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PageNotFound from './pages/PageNotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

   <BrowserRouter>

   <Provider store={store}>

   <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart />} />
      <Route path="/productlist" element={<ProductList></ProductList>}></Route>
      <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path='/checkout' element={<ShowCheckout></ShowCheckout>}></Route>
     <Route path="/product/:id" element={<Product></Product>}></Route>
     </Routes>
   </Provider>

   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();