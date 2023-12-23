import { TiUserAddOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/PasswordInput";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;
  const [upperCase, setUpperCase] = useState(false);
  const [num, setNum] = useState(false);
  const [specChar, setSpecChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const invalidIcon = <FaTimes size={15} color="red" />;
  const validIcon = <BsCheck2All size={15} color="green" />;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const switchIcons = (condition) => {
    if (condition) {
      return validIcon;
    } else {
      return invalidIcon;
    }
  };

  const registerUser = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUpperCase(true);
    } else {
      setUpperCase(false);
    }

    if (password.match(/([0-9])/)) {
      setNum(true);
    } else {
      setNum(false);
    }

    if (password.match(/([!,@,#,$,%,^,&,*,_,?,+])/)) {
      setSpecChar(true);
    } else {
      setSpecChar(false);
    }

    if (password.length > 7) {
      setPasswordLength(true);
    } else {
      setPasswordLength(false);
    }
  }, [password]);

  return (
    <div className={`container ${styles.auth}`}>
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
            />
            <Card cardClass={styles.group}>
              <ul className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {switchIcons(upperCase)}&nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcons(num)}&nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcons(specChar)}&nbsp; Special Characters (!@#$%^&*)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcons(passwordLength)}&nbsp; At Least 8 Characters
                  </span>
                </li>
              </ul>
            </Card>
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
