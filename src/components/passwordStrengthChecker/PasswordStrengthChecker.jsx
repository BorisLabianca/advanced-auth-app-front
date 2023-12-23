import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import styles from "../../pages/auth/Auth.module.scss";
import Card from "../card/Card";

const PasswordStrengthChecker = ({ password }) => {
  const [upperCase, setUpperCase] = useState(false);
  const [num, setNum] = useState(false);
  const [specChar, setSpecChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const invalidIcon = <FaTimes size={15} color="red" />;
  const validIcon = <BsCheck2All size={15} color="green" />;

  const switchIcons = (condition) => {
    if (condition) {
      return validIcon;
    } else {
      return invalidIcon;
    }
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
  );
};

export default PasswordStrengthChecker;
