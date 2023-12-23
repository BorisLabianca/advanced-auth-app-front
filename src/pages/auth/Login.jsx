import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {};

  const loginUser = (params) => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button className="--btn --btn-google">Login with Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>
          <form onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <PasswordInput
              onChange={handleInputChange}
              placeholder="Password"
              name="password"
              value={password}
            />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password?</Link>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p className="--px">Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
