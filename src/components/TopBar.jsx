import Header from "./Header";

const TopBar = () => {

  return <nav className="top-bar">
    <Header />
    <button className="home-btn">Home</button>
    <button className="login-btn">Log In</button>
  </nav>
}

export default TopBar;
