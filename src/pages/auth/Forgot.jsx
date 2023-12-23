import { AiOutlineMail } from "react-icons/ai";
import Card from "../../components/card/Card";
import styles from "./Auth.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {};

  const loginUser = (params) => {};

  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password?</h2>

          <form onSubmit={loginUser}>
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
                <Link to="/register">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
