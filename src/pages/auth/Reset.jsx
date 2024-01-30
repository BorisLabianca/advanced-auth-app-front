import { MdPassword } from "react-icons/md";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import PasswordStrengthChecker from "../../components/passwordStrengthChecker/PasswordStrengthChecker";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import { useNotification } from "../../hooks";
import { RESET, resetPassword } from "../../redux/features/auth/authSlice";

const initialState = {
  password: "",
  confirmPassword: "",
};

const Reset = () => {
  const { isLoading, isSuccess, message, isError } = useSelector(
    (store) => store.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const { resetToken } = useParams();
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetPSWD = async (event) => {
    event.preventDefault();
    if (!password || !confirmPassword)
      return updateNotification("warning", "Please fill out all the fields.");
    if (password.length < 8)
      return updateNotification(
        "warning",
        "Your password must be at least 8 characters long."
      );
    if (!password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
      return updateNotification(
        "warning",
        "Your password must contain at least one uppercased character."
      );

    if (!password.match(/([0-9])/))
      return updateNotification(
        "warning",
        "Your password must contain at least one number."
      );

    if (!password.match(/([!,@,#,$,%,^,&,*,_,?,+])/))
      return updateNotification(
        "warning",
        "Your password must contain at least one special character."
      );
    if (password !== confirmPassword)
      return updateNotification("warning", "Passwords don't match.");

    const userData = { password, confirmPassword };
    try {
      await dispatch(resetPassword({ userData, resetToken }));
      await dispatch(RESET());
    } catch (error) {
      updateNotification("error", error);
    }
  };

  useEffect(() => {
    if (isSuccess && message.includes("successfully")) {
      updateNotification("success", "Paswword successfully reset.");
      navigate("/login");
    }
  }, [isSuccess, message, isError, dispatch, navigate]);

  return (
    <div className={`container ${styles.auth}`}>
      {isLoading && <Loader />}
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          <form onSubmit={resetPSWD}>
            <PasswordInput
              onChange={handleInputChange}
              placeholder="New Password"
              name="password"
              value={password}
            />
            <PasswordInput
              onChange={handleInputChange}
              placeholder="Confirm New Password"
              name="confirmPassword"
              value={confirmPassword}
            />
            <PasswordStrengthChecker password={password} />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Reset Password
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

export default Reset;
