import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './router/Router';
import AuthProvider from './context/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={Router} />
  </AuthProvider>
)
