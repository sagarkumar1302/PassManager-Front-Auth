import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("tokenJWT");
    localStorage.removeItem("loggedInUserId");

    // setTimeout(() => {
    //   navigate("/login");
    // }, 1500);
    toast("🦄 Sign Out Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      onClose: () => navigate("/login"),
    });
  };
  return (
    <nav className="shadow-sm shadow-white bg-black flex justify-center  px-4 py-3">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container flex justify-between items-center">
        <div className="logo font-bold text-white text-xl md:text-3xl">
          <span className="text-green-400">&lt;</span>PassManager
          <span className="text-green-400">/&gt;</span>
        </div>
        <div className="github flex gap-3">
          <div>
            <a href="https://github.com/sagarkumar1302" target="blank">
              <img src="./icons/github.png" width={40} alt="github" />
            </a>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2  px-4 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
