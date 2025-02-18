import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserList from './components/UserList.jsx';
import AddUser from './components/AddUser.jsx';
import Update from './components/Update.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <AddUser></AddUser>,
  },
  {
    path: '/users',
    element: <UserList></UserList>,
    loader: () => fetch('http://localhost:5000/users')
  },
  {
    path: '/update/:id',
    element: <Update></Update>,
    loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
