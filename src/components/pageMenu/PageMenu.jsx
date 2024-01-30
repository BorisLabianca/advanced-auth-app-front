import { NavLink } from "react-router-dom";
import { ForAdminAuthorOnly } from "../protect/HiddenLink";

const PageMenu = () => {
  return (
    <div>
      <nav className="--btn-google --p --mb">
        <ul className="home-links">
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/change-password">Change Password</NavLink>
          </li>
          <ForAdminAuthorOnly>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ForAdminAuthorOnly>
        </ul>
      </nav>
    </div>
  );
};

export default PageMenu;
