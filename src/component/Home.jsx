import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"))
  }, [])
  const handleLogout= (e) => {
    localStorage.removeItem("loggedInUser")
    localStorage.removeItem("tokenJWT")
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
  }
  
  return (
    <div className='flex flex-col gap-3 justify-center items-center min-h-screen font-bold'>
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
      <h1>Hello {loggedInUser}!!!</h1>
      <button onClick={handleLogout} className='bg-red-500 text-white py-2  px-4 rounded-md'>Logout</button>
    </div>
  )
}

export default Home
