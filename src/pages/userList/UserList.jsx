import { FaTrashAlt } from "react-icons/fa";
import PageMenu from "../../components/pageMenu/PageMenu";
import Search from "../../components/search/Search";
import UserStats from "../../components/userStats/UserStats";
import "./UserList.scss";
import ChangeRole from "../../components/changeRole/ChangeRole";

const UserList = () => {
  return (
    <section className="verify">
      <div className="container">
        <PageMenu />
        <UserStats />
        <div className="user-list">
          <div className="table">
            <div className="--flex-between">
              <span>
                <h3>All Users</h3>
              </span>
              <span>
                <Search />
              </span>
            </div>
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Change Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bob</td>
                  <td>bob@mail.com</td>
                  <td>Admin</td>
                  <td>
                    <ChangeRole />
                  </td>
                  <td>
                    <span>
                      <FaTrashAlt size={20} color="red" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
