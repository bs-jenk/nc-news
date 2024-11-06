import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
// import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
    </>
  )
}

export default App;
