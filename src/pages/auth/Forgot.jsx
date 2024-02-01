import { AiOutlineMail } from "react-icons/ai";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNotification } from "../../hooks";
import { validateEmail } from "../../redux/features/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { RESET, forgotPassword } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const Forgot = () => {
  const { updateNotification } = useNotification();
  const dispatch = useDispatch();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (store) => store.auth
  );
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const forgotPSWD = async (event) => {
    event.preventDefault();
    if (!email)
      return updateNotification("warning", "Please enter your email address.");
    if (!validateEmail(email))
      return updateNotification(
        "warning",
        "Please enter a valid email address."
      );

    const userData = { email };

    await dispatch(forgotPassword(userData));
    await dispatch(RESET());
  };

  useEffect(() => {
    if (isError) {
      updateNotification(
        Object.keys(message)[0],
        message[Object.keys(message)[0]]
      );
    }
    if (isSuccess) {
      updateNotification("success", message);
      dispatch(RESET());
    }
  }, [isSuccess, dispatch, isError, message]);

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password?</h2>

          <form onSubmit={forgotPSWD}>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Get Reset Email
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
