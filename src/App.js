import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NewsCategory from "./pages/NewsCategory";
import Page404 from "./pages/Page404";
import NewsDetailes from "./pages/newsDetailes";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:categoryId" element={<NewsCategory />} />
        <Route path="/news/:newsId" element={<NewsDetailes />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
