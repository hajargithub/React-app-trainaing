import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SiteLayout from "./layouts/SiteLayout";
import AddArticle from "./pages/articles/AddArticle";
import EditArticle from "./pages/articles/EditArticle";
import ListArticle from "./pages/articles/ListArticle";
import ShowArticle from "./pages/articles/ShowArticle";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/blog",
    element: <SiteLayout />,
    children: [
      { path: "", element: <ListArticle /> },
      { path: "add", element: <AddArticle /> },
      { path: "edit/:id", element: <EditArticle /> },
      { path: "show", element: <ShowArticle /> },
    ],
  },
]);
