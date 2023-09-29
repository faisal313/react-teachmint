import React from 'react';
import UserCard from '../components/UserCard';

const UserDirectory = ({ users }) => {
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mt-5 mb-[44px]">User Directory</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.values(users).map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserDirectory;