import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot" ||
    pathname === "/resetPassword/:resetToken" ||
    pathname === "/loginWithCode/:email"
  )
    return null;

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <BiLogIn size={35} />
          <span>AdvAUTH</span>
        </div>

        <ul className="home-links">
          <li className="--flex-center">
            <FaUserCircle size={20} />
            <p className="--color-white --ml5px">Hi, Bobs</p>
          </li>
          <li>
            <button className="--btn --btn-primary">
              <Link to="/login">Login</Link>
            </button>
          </li>
          <li>
            <NavLink to="/profile" className={activeLink}>
              Profile
            </NavLink>
          </li>
          <li>
            <button className="--btn --btn-secondary">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
