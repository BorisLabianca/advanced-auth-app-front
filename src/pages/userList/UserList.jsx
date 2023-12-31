import PageMenu from "../../components/pageMenu/PageMenu";
import Search from "../../components/search/Search";
import UserStats from "../../components/userStats/UserStats";
import "./UserList.scss";

const UserList = () => {
  return (
    <section className="verify">
      <div className="container">
        <PageMenu />
        <UserStats />
        <div className="user-list">
          <div className="--flex-between">
            <span>
              <h3>All Users</h3>
            </span>
            <span>
              <Search />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserList;
