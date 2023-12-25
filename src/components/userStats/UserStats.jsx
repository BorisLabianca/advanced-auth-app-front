import InfoBox from "../infoBox/InfoBox";
import { FaUsers } from "react-icons/fa";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
import "./UserStats.scss";

const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

const UserStats = () => {
  return (
    <div className="user-summary">
      <h3 className="--mt">User Stats</h3>
      <div className="info-summary">
        <InfoBox icon={icon1} bgColor="card1" title="Total Users" count={"3"} />
        <InfoBox
          icon={icon2}
          bgColor="card2"
          title="Verified Users"
          count={"3"}
        />
        <InfoBox
          icon={icon3}
          bgColor="card3"
          title="Unverified Users"
          count={"3"}
        />
        <InfoBox
          icon={icon4}
          bgColor="card4"
          title="Suspended Users"
          count={"3"}
        />
      </div>
    </div>
  );
};

export default UserStats;
