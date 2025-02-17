import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserList from './components/UserList.jsx';
import AddUser from './components/AddUser.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <AddUser></AddUser>,
  },
  {
    path: '/users',
    element: <UserList></UserList>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
