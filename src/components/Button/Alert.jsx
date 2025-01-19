import React, { useEffect } from "react";

const Alert = ({ message, type, onClose, duration = 3000 }) => {
  const alertTypes = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
  };

  // Menutup alert secara otomatis setelah durasi tertentu
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Menutup alert setelah durasi
    }, duration);

    return () => clearTimeout(timer); // Membersihkan timer saat komponen di-unmount
  }, [duration, onClose]);

  return (
    <div
      className={`alertKu fixed top-5 left-1/2 transform -translate-x-1/2 w-1/3 p-4 rounded-md shadow-lg ${alertTypes[type]} transition-all duration-100`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-white"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
