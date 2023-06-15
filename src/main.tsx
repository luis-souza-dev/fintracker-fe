import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/index.tsx';
import Expenses from './pages/expenses/index.tsx';
import ExpensesCategories from './pages/expenses-categories/index.tsx';
import Residents from './pages/residents/index.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "expenses",
        element: <Expenses />,
      },
      {
        path: "expenses-categories",
        element: <ExpensesCategories />,
      },
      {
        path: "residents",
        element: <Residents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
