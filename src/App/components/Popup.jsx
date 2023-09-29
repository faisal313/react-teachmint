import React from 'react';

const Popup = ({ data, onClose }) => {

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        data ? '' : 'hidden'
      }`}
    >
      <div
        className={`fixed inset-0 bg-black opacity-50 transition-opacity ${
          data ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div className="bg-white p-4 rounded shadow-md relative">
        <h2 className="text-xl font-semibold mb-2">{data?.title}</h2>
        <p className="text-gray-600">
          {data?.content}
        </p>
        <p className="text-gray-600">
          {data?.additionalContent}
        </p>
      </div>
    </div>
  );
};

export default Popup;