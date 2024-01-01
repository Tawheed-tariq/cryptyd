import './App.css'
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css"; 
import Dashboard from './pages/Dashboard/dashboard';
import TransactionPage from './pages/Transaction/transaction';
import SupportPage from './pages/Support/support'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/transactions",
      element: <TransactionPage/>,
    },
    {
      path: "/support",
      element: <SupportPage/>,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
