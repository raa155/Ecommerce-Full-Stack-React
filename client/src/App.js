import React from 'react'
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

//Page Imports for : Home, Products, Product
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import About from './pages/About/About';
import ContactPage from './pages/ContactPage/ContactPage';


//Import Footer and Navbar Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';




const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      },
      {
        path: '/products/:id',
        element: <Products/>
      },
      {
        path: '/product/:id',
        element: <Product/>
      }
    ]
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
