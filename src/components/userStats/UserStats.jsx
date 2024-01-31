import InfoBox from "../infoBox/InfoBox";
import { FaUsers } from "react-icons/fa";
import { BiUserCheck, BiUserMinus, BiUserX } from "react-icons/bi";
import "./UserStats.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  CALCULATE_SUSPENDED_USERS,
  CALCULATE_VERIFIED_USERS,
} from "../../redux/features/auth/authSlice";

const icon1 = <FaUsers size={40} color="#fff" />;
const icon2 = <BiUserCheck size={40} color="#fff" />;
const icon3 = <BiUserMinus size={40} color="#fff" />;
const icon4 = <BiUserX size={40} color="#fff" />;

const UserStats = () => {
  const dispatch = useDispatch();
  const { verifiedUsers, suspendedUsers, users } = useSelector(
    (store) => store.auth
  );

  const notVerifiedUser = users.length - verifiedUsers;

  useEffect(() => {
    dispatch(CALCULATE_VERIFIED_USERS());
    dispatch(CALCULATE_SUSPENDED_USERS());
  }, [dispatch, users]);
  return (
    <div className="user-summary">
      <h3 className="--mt">User Stats</h3>
      <div className="info-summary">
        <InfoBox
          icon={icon1}
          bgColor="card1"
          title="Total Users"
          count={users.length}
        />
        <InfoBox
          icon={icon2}
          bgColor="card2"
          title="Verified Users"
          count={verifiedUsers}
        />
        <InfoBox
          icon={icon3}
          bgColor="card3"
          title="Unverified Users"
          count={notVerifiedUser}
        />
        <InfoBox
          icon={icon4}
          bgColor="card4"
          title="Suspended Users"
          count={suspendedUsers}
        />
      </div>
    </div>
  );
};

export default UserStats;
