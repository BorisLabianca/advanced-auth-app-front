import { MdPassword } from "react-icons/md";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import PasswordStrengthChecker from "../../components/passwordStrengthChecker/PasswordStrengthChecker";

const initialState = {
  password: "",
  confirmPassword: "",
};

const Reset = () => {
  const [formData, setFormData] = useState(initialState);
  const { password, confirmPassword } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const loginUser = (params) => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>

          <form onSubmit={loginUser}>
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
