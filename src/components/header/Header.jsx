import { BiLogIn } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import "./Header.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RESET, logout } from "../../redux/features/auth/authSlice";
import { useNotification } from "../../hooks";
import { ShowWhileLoggedIn, ShowWhileLoggedOut } from "../protect/HiddenLink";

const activeLink = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { updateNotification } = useNotification();

  const goHome = () => {
    navigate("/");
  };

  const logoutUser = async () => {
    dispatch(RESET());
    const response = await dispatch(logout());
    updateNotification("success", response.payload.success);
    navigate("/login");
  };

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot" ||
    pathname === `/reset-password/${pathname.split("/")[2]}` ||
    pathname === `/login-with-code/${pathname.split("/")[2]}`
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
          <ShowWhileLoggedIn>
            <li className="--flex-center">
              <FaUserCircle size={20} />
              <p className="--color-white --ml5px">Hi, Bobs</p>
            </li>
          </ShowWhileLoggedIn>
          <ShowWhileLoggedOut>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ShowWhileLoggedOut>
          <ShowWhileLoggedIn>
            <li>
              <NavLink to="/profile" className={activeLink}>
                Profile
              </NavLink>
            </li>
            <li>
              <button className="--btn --btn-secondary" onClick={logoutUser}>
                Logout
              </button>
            </li>
          </ShowWhileLoggedIn>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
