import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBackToHome from '../components/GoBack';
import Popup from '../components/Popup';
import UserProfile from '../components/UserProfile';

const UserDetails = ({ users }) => {
    const { username } = useParams();
    const user = users[username];
    const [currentPost, setCurrentPost] = useState(null);

    const showPopup = (post) => {
        setCurrentPost(post);
    };

    const closePopup = () => {
        setCurrentPost(null);
    };

    return (
        <div>
            <div className='flex flex-wrap my-4 justify-between'>
                <GoBackToHome />
                <h1 className="text-center text-2xl font-semibold">Profile Page</h1>
                <h3>Teachmint</h3>
            </div>
            <UserProfile user={user} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {user.posts.map((post, postIndex) => (
                    <div key={postIndex} className="bg-white p-4 rounded shadow-md" onClick={() => showPopup(post)}>
                        <h3 className="text-lg font-semibold">{post.title}</h3>
                        <p className="text-gray-600">{post.content}</p>
                    </div>
                ))}
            </div>
            <Popup data={currentPost} onClose={closePopup} />
        </div>
    );
};

export default UserDetails;