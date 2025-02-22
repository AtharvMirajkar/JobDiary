import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TableChartIcon from "@mui/icons-material/TableChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col fixed">
      <Link
        to="/dashboard"
        className="p-4 text-2xl font-bold border-b border-gray-700 cursor-pointer"
      >
        Job Tracker
      </Link>
      <nav className="flex-grow p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-lg"
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/add-job"
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-lg"
            >
              <AddBoxIcon />
              <span>Add Job</span>
            </Link>
          </li>
          <li>
            <Link
              to="/applied-jobs"
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-lg"
            >
              <TableChartIcon />
              <span>Applied Jobs</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <ul className="space-y-4">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded-lg"
            >
              <AccountCircleIcon />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <button className="w-full flex items-center gap-4 p-2 hover:bg-gray-700 rounded-lg">
              <ExitToAppIcon />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
