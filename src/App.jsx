
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([

  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path:"/signup",
    element: <SignUpPage/>
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App

