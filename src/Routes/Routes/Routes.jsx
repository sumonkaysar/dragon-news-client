import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import SignUp from "../../Pages/SignUp/SignUp";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
    >
      <Route
        path="/"
        loader={() => fetch('http://localhost:5000/news')}
        element={<Home />}
      />
      <Route
        path="category/:id"
        element={<Category />}
        loader={({params}) => fetch(`http://localhost:5000/category/${params.id}`)}
      />
      <Route
        path="news/:id"
        element={<News />}
        loader={({params}) => fetch(`http://localhost:5000/news/${params.id}`)}
      />
      <Route
        path="login"
        element={<Login />}
      />
      <Route
        path="signUp"
        element={<SignUp />}
      />
    </Route>
  )
)