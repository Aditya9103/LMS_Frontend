import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../Components/Footer';

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if the user is logged in and get their role
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 'auto';
  };

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = '0';
  };

  const handleLogout = (e) => {
    e.preventDefault();

    // Dispatch the logout action, and upon success, navigate to the home page
    // const res = await dispatch(logout());
    // if (res?.payload?.success)
    navigate("/");
  };

  return (
    <div className="min-h-[90vh] relative">
      <div className="drawer absolute left-0 z-50 w-fit">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={32}
              className="text-blue-500 m-4"
            />
          </label>
        </div>
        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-gray-800 text-white relative">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} className="text-red-500" />
              </button>
            </li>
            <li>
              <Link to="/" className="text-white hover:underline">Home</Link>
            </li>
            {isLoggedIn && role === 'ADMIN' && (
              <li>
                <Link to="/admin/dashboard" className="text-white hover:underline">Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/courses" className="text-white hover:underline">All Courses</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:underline">About Us</Link>
            </li>
            {!isLoggedIn ? (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex space-x-2 justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/login" className="text-white hover:underline">Login</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/signup" className="text-white hover:underline">Signup</Link>
                  </button>
                </div>
              </li>
            ) : (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex space-x-2 justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to="/user/profile" className="text-white hover:underline">Profile</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                    <Link onClick={handleLogout} className="text-white hover:underline">Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
