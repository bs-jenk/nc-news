import { useState } from "react";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
// import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import UserContext from "./contexts/userContext";

function App() {
  const [signedInUser, setSignedInUser] = useState('tickle122');

  return (
    <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
      <TopBar />
      <Routes>
        <Route path='/' element={<Articles />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App;
