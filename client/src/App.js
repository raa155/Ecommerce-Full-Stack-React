import React from 'react'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <span>Home Page</span>
  },
  {
    path: '/products/:id',
    element: <span>Collections</span>
  },
  {
    path: 'product/:id',
    element: <span>Individual Product</span>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
