import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./css/style.css";
interface IProps {
  setIsLogin: any;
}
function Login(props: IProps) {
  const { setIsLogin } = props;
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (userName === "admin" && password === "admin") {
      navigate("/listUser");
      setIsLogin && setIsLogin(true);
    } else {
      alert("Thông tin không chính xác. Xin thử lại.");
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="text"
              name="userName"
              value={userName ? userName : ""}
              onChange={handleChange}
              placeholder="user name"
            />
            <input
              type="text"
              name="password"
              value={password ? password : ""}
              onChange={handleChange}
              placeholder="password"

            />
            <button onClick={() => handleSubmit()}>Login</button>
            <p className="message">
              Not registered?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;