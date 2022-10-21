import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../../layout/Root";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
    >
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/category/:id"
        element={<Category />}
      />
      <Route
        path="/news/:id"
        element={<News />}
      />
    </Route>
  )
)