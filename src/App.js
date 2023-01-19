import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NewsCategory from "./pages/NewsCategory";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:categoryId" element={<NewsCategory />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      <Home />
    </div>
  );
}

export default App;
