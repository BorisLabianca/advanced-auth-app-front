import { TiUserAddOutline } from "react-icons/ti";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import PasswordStrengthChecker from "../../components/passwordStrengthChecker/PasswordStrengthChecker";
import { useNotification } from "../../hooks";
import { validateEmail } from "../../redux/features/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { RESET, register } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { updateNotification } = useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isLoggedIn, isSuccess, message, isError } = useSelector(
    (store) => store.auth
  );
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (event) => {
    event.preventDefault();
    if (!name || !email || !password)
      return updateNotification("error", "All fileds are required.");
    if (password.length < 8)
      return updateNotification(
        "warning",
        "Password must be at least 8 characters long."
      );
    if (!validateEmail(email))
      return updateNotification("warning", "Please enter a valid email.");
    if (password !== confirmPassword)
      return updateNotification("warning", "Passwords do not match.");

    const userData = { name, email, password };

    await dispatch(register(userData));
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      updateNotification("success", "Registration successfull.");
      navigate("/profile");
    }
    if (isError) {
      updateNotification("error", message);
    }
    dispatch(RESET());
  }, [isLoggedIn, isSuccess, dispatch, navigate, isError, message]);

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form onSubmit={registerUser}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={handleInputChange}
            />
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
            <PasswordInput
              onChange={handleInputChange}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onPaste={(event) => {
                event.preventDefault();
                updateNotification("warning", "Cannot paste into this field.");
                return false;
              }}
            />
            <PasswordStrengthChecker password={password} />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p className="--px">Already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
