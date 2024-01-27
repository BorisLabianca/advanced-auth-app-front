import Card from "../../components/card/Card";
import avatar from "../../assets/avatarr.png";
import { useEffect, useLayoutEffect, useState } from "react";
import PageMenu from "../../components/pageMenu/PageMenu";
import "./Profile.scss";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../redux/features/auth/authSlice";
import Loader from "../../components/loader/Loader";
import { useNotification } from "../../hooks";

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const { updateNotification } = useNotification();
  const dispatch = useDispatch();
  const { isLoading, user, isSuccess } = useSelector((state) => state.auth);
  const initialState = {
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    photo: user?.photo?.url || "",
    bio: user?.bio || "",
    role: user?.role || "",
    isVerified: user?.isVerified || false,
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    setProfileImage(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (event) => {
    event.preventDefault();
    const userData = new FormData();
    if (
      profileImage !== null &&
      (profileImage.type === "image/jpeg" ||
        profileImage.type === "image/jpg" ||
        profileImage.type === "image/png")
    ) {
      userData.append("photo", profileImage);
    }
    if (profile.name) {
      userData.append("name", profile.name);
    }
    if (profile.phone) {
      userData.append("phone", profile.phone);
    }
    if (profile.bio) {
      userData.append("bio", profile.bio);
    }
    try {
      dispatch(updateUser(userData));
      if (!isLoading && user !== null) {
        updateNotification("success", "User updated successfully.");
      }
    } catch (error) {
      updateNotification("error", error);
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  useLayoutEffect(() => {
    if (user) {
      setProfile({
        ...profile,
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        photo: user?.photo?.url,
        bio: user?.bio,
        role: user?.role,
        isVerified: user?.isVerified,
      });
    }
  }, [user]);

  if (isLoading || user === null) return <Loader />;

  return (
    <section>
      <div className="container">
        <PageMenu />
        <h2>Profile</h2>
        <div className="--flex-start profile">
          <Card cardClass="card">
            {!isLoading && user && (
              <div>
                <div className="profile-photo">
                  <div>
                    <img
                      src={
                        imagePreview === null ? profile?.photo : imagePreview
                      }
                      alt="User Profile avatar"
                    />
                    <h3>Role: {profile?.role}</h3>
                  </div>
                </div>
                <form onSubmit={saveProfile}>
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
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export const UserName = (params) => {
  const { user } = useSelector((store) => store.auth);
  const username = user?.name || "...";
  return <p className="--color-white --ml5px">Hi, {username} |</p>;
};

export default Profile;
