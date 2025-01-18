import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      platform: "LinkedIn",
      companyName: "Google",
      role: "Software Engineer",
      package: "15 LPA",
      location: "Bangalore",
      applicationDate: "2025-01-01",
      status: "Interviewing",
      notes: "Reached the final round",
    },
    {
      id: 2,
      platform: "Naukri",
      companyName: "Amazon",
      role: "Data Analyst",
      package: "12 LPA",
      location: "Hyderabad",
      applicationDate: "2025-01-10",
      status: "Applied",
      notes: "",
    },
  ]);

  const handleDelete = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleEdit = (id: number) => {
    console.log("Edit job with ID:", id);
    // Logic for editing the job
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Applied Jobs</h1>
      <TableContainer component={Paper} className="rounded-lg shadow-md">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell className="font-semibold">Platform</TableCell>
              <TableCell className="font-semibold">Company</TableCell>
              <TableCell className="font-semibold">Role</TableCell>
              <TableCell className="font-semibold">Package</TableCell>
              <TableCell className="font-semibold">Location</TableCell>
              <TableCell className="font-semibold">Application Date</TableCell>
              <TableCell className="font-semibold">Status</TableCell>
              <TableCell className="font-semibold">Notes</TableCell>
              <TableCell className="font-semibold text-center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id} hover>
                <TableCell>{job.platform}</TableCell>
                <TableCell>{job.companyName}</TableCell>
                <TableCell>{job.role}</TableCell>
                <TableCell>{job.package}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.applicationDate}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell>{job.notes}</TableCell>
                <TableCell className="text-center">
                  <Tooltip title="Edit Job">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(job.id)}
                    >
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Job">
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(job.id)}
                    >
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AppliedJobs;
