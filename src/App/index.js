import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { userMap } from './mock/data';
import UserDetails from './pages/UserDetails';
import UserDirectory from './pages/UserDirectory';
import "./style.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen p-4">
        <Routes>
          <Route
            path="/user/:username"
            element={<UserDetails users={userMap} />}
          />
          <Route
            path="/"
            element={<UserDirectory users={userMap} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
};

export default App;



