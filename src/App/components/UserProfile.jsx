import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className="w-100 bg-white p-5 my-[40px] rounded shadow-md flex-wrap flex justify-between">
      <div>
        <p className="text-gray-600">{user.name}</p>
        <p className="text-gray-600">
          {user.username} | {user.catchPhrase}
        </p>
      </div>
      <div>
        <p className="text-gray-600">{user.address}</p>
        <p className="text-gray-600">
          {user.email} | {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
