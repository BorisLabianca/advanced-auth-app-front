import { GrInsecure } from "react-icons/gr";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNotification } from "../../hooks";
import {
  RESET,
  loginWithCode,
  sendLoginCode,
} from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const LoginWithCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const { email } = useParams();
  const { isLoading, isLoggedIn, message, isError, isSuccess, twoFactor } =
    useSelector((store) => store.auth);
  const [loginCode, setLoginCode] = useState("");

  const logingUserWithCode = async (event) => {
    event.preventDefault();
    if (!loginCode)
      return updateNotification("warning", "Please fill in the login code.");

    if (loginCode.length !== 6)
      return updateNotification(
        "error",
        "The login code must be 6 characters."
      );

    const code = {
      loginCode,
    };

    await dispatch(loginWithCode({ code, email }));
  };

  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email));
    await dispatch(RESET());
  };

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/profile");
      dispatch(RESET());
    }
    if (isError) {
      updateNotification(
        Object.keys(message)[0],
        message[Object.keys(message)[0]]
      );
    }
  }, [dispatch, isLoggedIn, isSuccess, navigate]);

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <GrInsecure size={35} color="#999" />
          </div>
          <h2>Enter Access Code</h2>

          <form onSubmit={logingUserWithCode}>
            <input
              type="text"
              placeholder="Access Code"
              required
              name="loginCode"
              value={loginCode}
              onChange={(event) => setLoginCode(event.target.value)}
            />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Proceed To Login
            </button>
            <span className="--flex-center">
              Check your email for login access code.
            </span>
            <div className={styles.links}>
              <p>
                <Link to="/">Home</Link>
              </p>
              <p className="v-link --color-primary" onClick={sendUserLoginCode}>
                <b>Resend Code</b>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginWithCode;
