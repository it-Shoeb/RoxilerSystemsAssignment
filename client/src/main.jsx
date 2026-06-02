import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import StoreDashboard from './pages/StoreDashboard.jsx'
import Navbar from './components/Navbar.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Signup from './pages/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/signup",
    element: <Signup />
  },

  {
    path: "/",
    element: <Navbar />,

    children: [
      {
        path: "/usersdashboard",
        element: <Dashboard />
      },
      {
        path: "/storedashboard",
        element: <StoreDashboard />
      }

    ]
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
