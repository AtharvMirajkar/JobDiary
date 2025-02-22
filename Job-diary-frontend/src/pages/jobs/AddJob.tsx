import React, { useState } from "react";
import { TextField, Button, MenuItem, CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { addJob } from "../../redux/slices/jobSlice";

interface JobDetails {
  platform: string;
  companyName: string;
  role: string;
  package?: string;
  location?: string;
  applicationDate?: string;
  status: "Applied" | "Interviewing" | "Offered" | "Rejected" | "Accepted";
  notes?: string;
}

const AddJob: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.jobs);
  const [jobDetails, setJobDetails] = useState<JobDetails>({
    platform: "",
    companyName: "",
    role: "",
    package: "",
    location: "",
    applicationDate: "",
    status: "Applied",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addJob(jobDetails));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Add Job Application
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Platform</label>
          <TextField
            name="platform"
            size="small"
            fullWidth
            required
            placeholder="For example LinkedIn"
            value={jobDetails.platform}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Company Name</label>
          <TextField
            name="companyName"
            size="small"
            fullWidth
            required
            placeholder="For example Google"
            value={jobDetails.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Role</label>
          <TextField
            name="role"
            size="small"
            fullWidth
            required
            placeholder="For example Software Engineer"
            value={jobDetails.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Package</label>
          <TextField
            name="package"
            size="small"
            fullWidth
            placeholder="For example $100,000"
            value={jobDetails.package}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <TextField
            name="location"
            size="small"
            fullWidth
            placeholder="For example New York"
            value={jobDetails.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Application Date</label>
          <TextField
            name="applicationDate"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            value={jobDetails.applicationDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700">Status</label>
          <TextField
            name="status"
            size="small"
            select
            fullWidth
            value={jobDetails.status}
            onChange={handleChange}
          >
            {["Applied", "Interviewing", "Offered", "Rejected", "Accepted"].map(
              (status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              )
            )}
          </TextField>
        </div>
        <div>
          <label className="block text-gray-700">Notes</label>
          <TextField
            name="notes"
            size="small"
            multiline
            rows={2}
            fullWidth
            placeholder="Additional details..."
            value={jobDetails.notes}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full md:w-auto"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Add Job"}
        </Button>
      </form>
    </div>
  );
};

export default AddJob;
