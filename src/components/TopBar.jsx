import Header from "./Header";
import { Link } from "react-router-dom";

const TopBar = () => {

  return <nav className='top-bar'>
    <Header />
    <Link className='articles-link' to="/articles">Articles</Link>
    <button className='login-btn'>Log In</button>
  </nav>
}

export default TopBar;
