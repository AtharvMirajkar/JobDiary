import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

// Define the type for a job
export interface Job {
  _id?: string;
  userId?: string;
  platform: string;
  companyName: string;
  role: string;
  package?: string;
  location?: string;
  applicationDate?: string;
  status: "Applied" | "Interviewing" | "Offered" | "Rejected" | "Accepted";
  notes?: string;
}

// Define the state for the slice
export interface JobState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

// Initial state for jobs
const initialState: JobState = {
  jobs: [],
  loading: false,
  error: null,
};

// Async thunk to fetch jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/jobs/user`); // Fetch jobs for the logged-in user
    return response.data; // Returns the list of jobs
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed to fetch jobs");
  }
});

// Async thunk to add a job
export const addJob = createAsyncThunk("jobs/addJob", async (jobData: Job, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/jobs/create", jobData);
    return response.data; // Returns the created job
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed to add job");
  }
});

// Async thunk to update a job
export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, updates }: { id: string; updates: Partial<Job> }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`/jobs/${id}`, updates);
      return response.data; // Returns the updated job
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to update job");
    }
  }
);

// Async thunk to delete a job
export const deleteJob = createAsyncThunk("jobs/deleteJob", async (id: string, { rejectWithValue }) => {
  try {
    await axiosInstance.delete(`/jobs/${id}`);
    return id; // Return the deleted job ID
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed to delete job");
  }
});

// Create the job slice
const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch jobs
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.fulfilled, (state, action: PayloadAction<Job[]>) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch jobs";
      })
      // Add job
      .addCase(addJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addJob.fulfilled, (state, action: PayloadAction<Job>) => {
        state.loading = false;
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "Failed to add job";
      })
      // Update job
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action: PayloadAction<Job>) => {
        state.loading = false;
        const index = state.jobs.findIndex((job) => job._id === action.payload._id);
        if (index !== -1) state.jobs[index] = action.payload;
      })
      .addCase(updateJob.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "Failed to update job";
      })
      // Delete job
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.jobs = state.jobs.filter((job) => job._id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete job";
      });
  },
});

// Export the reducer to be added in the store
export default jobSlice.reducer;
