import { useState } from "react";
import ArticleLister from "./components/ArticleLister";
import SingleArticle from "./components/SingleArticle";
// import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import UserContext from "./contexts/userContext";
import TopicLister from "./components/TopicLister";

function App() {
  const [signedInUser, setSignedInUser] = useState('tickle122');

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      <TopBar />
      <Routes>
        <Route path='/' element={<ArticleLister />} />
        <Route path='/articles' element={<ArticleLister />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/topics' element={<TopicLister />} />
        <Route path='/topics/:topic_slug' element={<ArticleLister />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App;
