import Card from "../../components/card/Card";
import avatar from "../../assets/avatarr.png";
import { useEffect, useState } from "react";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./Profile.scss";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, isSuccess, message, user } = useSelector(
    (state) => state.auth
  );
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    photo: user?.photo || "",
    bio: user?.bio || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };
  const [profile, setProfile] = useState(initialState);

  const handleImageChange = () => {};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (user === null) return <Loader />;

  return (
    <section>
      <div className="container">
        <PageMenu />
        <h2>Profile</h2>
        <div className="--flex-start profile">
          <Card cardClass="card">
            <div>
              <div className="profile-photo">
                <div>
                  <img src={profile?.photo} alt="User Profile avatar" />
                  <h3>Role: {profile?.role}</h3>
                </div>
              </div>
              <form>
                <p>
                  <label>Change Photo:</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    onChange={handleImageChange}
                  />
                </p>
                <p>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={profile?.name}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={profile?.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </p>
                <p>
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    name="phone"
                    value={profile?.phone}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Bio:</label>
                  <textarea
                    name="bio"
                    cols="30"
                    rows="10"
                    value={profile?.bio}
                    onChange={handleInputChange}
                  ></textarea>
                </p>
                <button className="--btn --btn-primary --btn-block">
                  Update Profile
                </button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Profile;
