import Card from "../../components/card/Card";
import avatar from "../../assets/avatarr.png";
import { useState } from "react";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./Profile.scss";

const initialState = {
  name: "",
  email: "",
  phone: "",
  photo: "",
  bio: "",
  role: "",
  isVerified: false,
};

const Profile = () => {
  const [profile, setProfile] = useState(initialState);
  const { name, email, phone, photo, bio, role, isVerified } = profile;

  const handleImageChange = () => {};

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

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
                  <img src={avatar} alt="User Profile avatar" />
                  <h3>Role: Subscriber</h3>
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
                    value={name}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    disabled
                  />
                </p>
                <p>
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                  />
                </p>
                <p>
                  <label>Bio:</label>
                  <textarea
                    name="bio"
                    cols="30"
                    rows="10"
                    value={bio}
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
