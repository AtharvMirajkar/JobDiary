import React, { useEffect } from "react";

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
  CircularProgress,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { deleteJob, fetchJobs } from "../../redux/slices/jobSlice";
import { formatDate } from "../../utils/dateUtils";

const AppliedJobs: React.FC = () => {
  const dispatch = useAppDispatch();
  const { jobs, loading, error } = useAppSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    dispatch(deleteJob(id));
  };

  const handleEdit = (id: string) => {
    console.log("Edit job with ID:", id);
    // Extend this function to navigate to an edit page or open a modal
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Applied Jobs</h1>

      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
        <TableContainer component={Paper} className="rounded-lg shadow-md">
          <Table>
            <TableHead className="bg-gray-100">
              <TableRow>
                <TableCell className="font-semibold">Platform</TableCell>
                <TableCell className="font-semibold">Company</TableCell>
                <TableCell className="font-semibold">Role</TableCell>
                <TableCell className="font-semibold">Package</TableCell>
                <TableCell className="font-semibold">Location</TableCell>
                <TableCell className="font-semibold">
                  Application Date
                </TableCell>
                <TableCell className="font-semibold">Status</TableCell>
                <TableCell className="font-semibold">Notes</TableCell>
                <TableCell className="font-semibold text-center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job._id} hover>
                  <TableCell>{job.platform}</TableCell>
                  <TableCell>{job.companyName}</TableCell>
                  <TableCell>{job.role}</TableCell>
                  <TableCell>{job.package}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{formatDate(job.applicationDate)}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>{job.notes}</TableCell>
                  <TableCell className="text-center">
                    <Tooltip title="Edit Job">
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(job._id)}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Job">
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(job._id)}
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
      )}
    </div>
  );
};

export default AppliedJobs;
