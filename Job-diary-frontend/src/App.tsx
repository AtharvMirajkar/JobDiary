import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddJob from "./pages/jobs/AddJob";
import AppliedJobs from "./pages/jobs/AppliedJobs";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} /> */}

        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
