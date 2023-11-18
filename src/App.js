import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import Loginpage from './pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="login">About Us</Link>
      </div>
    ),
  },
  {
    path: "login",
    // element: <div>login</div>,
    element:<Loginpage/>
  },
]);

function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App;
