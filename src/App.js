import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Book from "./components/Book";
import BookList from "./components/BookList";
import NewBook from "./components/NewBook";
import NotFound from "./components/NotFound";
import BookLayout from "./components/BookLayout";
import { useRoutes } from "react-router-dom";

function App() {
  // const element = useRoutes([
  //   { path: "/", element: <Home /> },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      {/* <Route path="/book/:id" element={<Book />} />
        <Route path="book" element={<BookList />} />
        <Route path="/book/new" element={<NewBook/>}/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookLayout/>}>
          <Route index element={<BookList/>}/>
          <Route path=":id" element={<Book/>}></Route>
          <Route path="new" element={<NewBook/>}></Route>

        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
