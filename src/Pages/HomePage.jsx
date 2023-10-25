import React from 'react';
import { Link } from 'react-router-dom';

import HomePageImage from '../Assets/Images/homePageMainImage.png';
import HomeLayout from '../Layouts/HomeLayout';

function HomePage() {
  return (
    <HomeLayout>
      <div className="bg-primary min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto flex items-center justify-center gap-10">
          <div className="w-1/2 space-y-6">
            <h1 className="text-4xl font-semibold">
              Discover the Best Online Courses
            </h1>
            <p className="text-lg text-gray-300">
              Explore a vast library of high-quality courses taught by experienced instructors at affordable prices.
            </p>

            <div className="space-x-6 mt-4">
              <Link to="/courses">
                <button className="btn-primary">
                  Explore Courses
                </button>
              </Link>

              <Link to="/contact">
                <button className="btn-secondary">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="w-1/2">
            <img
              src={HomePageImage}
              alt="Homepage"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default HomePage;
