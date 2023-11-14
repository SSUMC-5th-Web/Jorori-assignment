import {BrowserRouter, Route, Routes } from "react-router-dom";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";



function App() {


  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/movie/:id" element={<MovieDetail />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/movie" element={<Movies />}/>
        <Route path="/tv" element={<Tv />}/>
        <Route path="/person" element={<Celebrity />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
