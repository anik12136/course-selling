import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Community from "../Pages/Community/Community";
import LoggedInHome from "../Pages/Home/LoggedInHome/LoggedInHome";
import MyAccount from "../Pages/MyAccount/MyAccount";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      
     
      {
        path: "/loggedInHome",
        element: <LoggedInHome></LoggedInHome>,
      },
     
      {
        path: "/myAccount",
        element: <MyAccount></MyAccount>,
      },
     
      
      
    ],
  },
]);
