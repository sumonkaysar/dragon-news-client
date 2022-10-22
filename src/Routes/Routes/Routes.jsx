import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
    >
      <Route
        path="/"
        loader={() => fetch('https://dragon-news-server-4uhghl7k5-sumonkaysar.vercel.app/news')}
        element={<Home />}
      />
      <Route
        path="category/:id"
        element={<Category />}
        loader={({params}) => fetch(`https://dragon-news-server-4uhghl7k5-sumonkaysar.vercel.app/category/${params.id}`)}
      />
      <Route
        path="news/:id"
        element={<PrivateRoute><News /></PrivateRoute>}
        loader={({params}) => fetch(`https://dragon-news-server-4uhghl7k5-sumonkaysar.vercel.app/news/${params.id}`)}
      />
      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="signUp"
        element={<SignUp />}
      />
      <Route
        path="profile"
        element={<PrivateRoute><Profile /></PrivateRoute>}
      />
    </Route>
  )
)