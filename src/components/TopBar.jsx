import Header from "./Header";

const TopBar = () => {

  return <nav className="top-bar">
    <Header />
    <a className="home-link">Home (all articles)</a>
    <button className="login-btn">Log In</button>
  </nav>
}

export default TopBar;
