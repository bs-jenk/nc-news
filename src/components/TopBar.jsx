import { useContext, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import UserContext from "../contexts/userContext";

const TopBar = () => {
  const { signedInUser } = useContext(UserContext);


  return <nav className='top-bar'>
    <Header />
    <Link className='home-link' to='/'>Home</Link>
    <Link className='topics-link' to='/topics'>Topics</Link>
    <Link className='articles-link' to='/articles'>Articles</Link>
    {signedInUser ? <p id='signed-in-msg'>You are signed in as <strong>{signedInUser}</strong></p> : <button className='login-btn'>Log In</button>}
  </nav>
}

export default TopBar;
