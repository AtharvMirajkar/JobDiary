import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome to the Dashboard
      </h1>
      <p className="mt-4 text-gray-600">
        Here you can track all your job applications and manage your progress.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-700">
            Total Applications
          </h2>
          <p className="mt-2 text-2xl font-bold">12</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-green-700">
            Accepted Offers
          </h2>
          <p className="mt-2 text-2xl font-bold">3</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-red-700">
            Pending Responses
          </h2>
          <p className="mt-2 text-2xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
