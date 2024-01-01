import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { useNotification } from "../../hooks";
import { validateEmail } from "../../redux/features/auth/authService";
import { RESET, login } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { updateNotification } = useNotification();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const { isLoading, isLoggedIn, isSuccess, message, isError } = useSelector(
    (store) => store.auth
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = async (event) => {
    event.preventDefault();
    if (!email || !password)
      return updateNotification("warning", "Please fill out all the fields.");
    if (!validateEmail(email))
      return updateNotification("warning", "Please enter a valid email.");
    if (password.length < 8)
      return updateNotification(
        "warning",
        "Password must be at least 8 characters long."
      );

    const userData = { email, password };
    await dispatch(login(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      updateNotification("success", "Login successfull.");
      navigate("/profile");
    }
    if (isError) {
      updateNotification(
        Object.keys(message)[0],
        message[Object.keys(message)[0]]
      );
    }
    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate, isError, message]);

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
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
