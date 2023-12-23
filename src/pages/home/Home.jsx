import loginIMG from "../../assets/login.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <section className="container hero">
        <div className="hero-text">
          <h2>MERN Statck Authentication System</h2>
          <p>
            Learn and master authentication and authorization using MERN stack.
          </p>
          <p>
            Implement user registration, login, password reset, social login,
            user permission, email notification, etc...
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">Register</button>
            <button className="--btn --btn-primary">Login</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={loginIMG} alt="Login illustration" />
        </div>
      </section>
    </div>
  );
};

export default Home;
