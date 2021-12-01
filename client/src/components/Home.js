import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"}>음식 커뮤니티</Link>
      </div>
      <ul className="loginNregister">
        <li>
          <Link to={"/login"}>로그인</Link>
        </li>
        <li>
          <Link to={"/register"}>회원가입</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Home;
