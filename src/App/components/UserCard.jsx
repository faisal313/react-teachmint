import { Link, useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const navigateToUserProfile = () => navigate(`/user/${user.username}`);
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4" onClick={navigateToUserProfile}>
      <h2 className="text-xl font-semibold">Name: {user.name}</h2>
      <p className="text-gray-600">Posts: {user.posts.length}</p>
    </div>
  );
};

export default UserCard;
