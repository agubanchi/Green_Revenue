import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Terms from './Terms.jsx'
import Layout from './components/Layout/Index.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />, children: [{
      path: "/",
      element: <App />,
    },
    {
      path: "/privacy-policy",
      element: <Terms />,
    },]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
