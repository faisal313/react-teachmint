import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBackToHome from '../components/GoBack';
import Popup from '../components/Popup';
import UserProfile from '../components/UserProfile';
import { useCountryTime, useFetchCountries } from '../hooks';

const UserDetails = ({ users }) => {
    const { username } = useParams();
    const user = users[username];
    const [currentPost, setCurrentPost] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('Africa/Abidjan');
    const [isClockRunning, setIsClockRunning] = useState(false);
    const countries = useFetchCountries();
    const currentTimeForCountry = useCountryTime(selectedCountry, isClockRunning);

    const showPopup = (post) => {
        setCurrentPost(post);
    };

    const closePopup = () => {
        setCurrentPost(null);
    };

    const toggleClock = () => {
        setIsClockRunning((prevState) => !prevState);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    return (
        <div>
            <div className='flex flex-wrap my-4 justify-between'>
                <GoBackToHome />
                <div className='flex justify-between items-center'>
                    <select className='mr-2 w-[24vw]' onChange={handleCountryChange}>
                        {countries.map((country) => {
                            return (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            );
                        })}
                    </select>
                    <h4 className='bg-black text-green-500 px-1 mr-1'>
                        {currentTimeForCountry}
                    </h4>                    <button onClick={toggleClock}>
                        {isClockRunning ? "Pause" : "Start"}
                    </button>
                </div>
            </div>
            <h1 className="text-center text-2xl font-semibold">Profile Page</h1>
            <UserProfile user={user} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {user.posts.map((post, postIndex) => (
                    <div
                        key={postIndex}
                        className="bg-white p-4 rounded shadow-md"
                        onClick={() => showPopup(post)}
                    >
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