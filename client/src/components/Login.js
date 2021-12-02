import React, { useState, useEffect } from "react";
import "./Register.css";
import Axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = () => {
    Axios.post("http://localhost:8000/api/login", {
      email: email,
      password: password,
    });
    // Axios.get("http://localhost:8000/api/get").then((response) => {
    //   if (response !== null) {
    //     alert("로그인 성공");
    //   } else {
    //     alert("실패!");
    //   }
    // });
  };

  return (
    <div className="loginregister">
      <div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일"
            value={email}
            onChange={onEmailHandler}
            className="loginregister__input"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
            className="loginregister__input"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={onSubmit}
            className="loginregister__button"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
