import React from 'react';
import { Link } from 'react-router-dom';

const GoBackToHome = () => {
    return (
        <Link
            to="/"
            className="text-blue-500 hover:underline inline-block mb-4"
        >
            {'< Back'}
        </Link>
    )
}

export default GoBackToHome