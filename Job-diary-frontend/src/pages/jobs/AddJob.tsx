import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

const AddJob = () => {
  const [jobDetails, setJobDetails] = useState({
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
    console.log("Job Details Submitted:", jobDetails);
    // Add API call logic to save job details
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Add Job Application
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Platform"
          name="platform"
          size="small"
          fullWidth
          required
          value={jobDetails.platform}
          onChange={handleChange}
        />
        <TextField
          label="Company Name"
          name="companyName"
          size="small"
          fullWidth
          required
          value={jobDetails.companyName}
          onChange={handleChange}
        />
        <TextField
          label="Role"
          name="role"
          size="small"
          fullWidth
          required
          value={jobDetails.role}
          onChange={handleChange}
        />
        <TextField
          label="Package"
          name="package"
          size="small"
          fullWidth
          value={jobDetails.package}
          onChange={handleChange}
        />
        <TextField
          label="Location"
          name="location"
          size="small"
          fullWidth
          value={jobDetails.location}
          onChange={handleChange}
        />
        <TextField
          label="Application Date"
          name="applicationDate"
          size="small"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={jobDetails.applicationDate}
          onChange={handleChange}
        />
        <TextField
          label="Status"
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
        <TextField
          label="Notes"
          name="notes"
          size="small"
          multiline
          rows={4}
          fullWidth
          value={jobDetails.notes}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full md:w-auto"
        >
          Add Job
        </Button>
      </form>
    </div>
  );
};

export default AddJob;
