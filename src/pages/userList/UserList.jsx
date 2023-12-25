import PageMenu from "../../components/pageMenu/PageMenu";
import UserStats from "../../components/userStats/UserStats";
import "./UserList.scss";

const UserList = () => {
  return (
    <section className="verify">
      <div className="container">
        <PageMenu />
        <UserStats />
      </div>
    </section>
  );
};

export default UserList;
