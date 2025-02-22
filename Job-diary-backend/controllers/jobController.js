import Job from "../models/Job.js";

// Create a new job application
export const createJob = async (req, res) => {
  console.log("Create Job API called ...........")
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Not authorized, no user found" });
    }
  
    const { platform, companyName, role, package: pkg, location, applicationDate, status, notes } = req.body;
    console.log(req.body, "data <------")

    console.log("User id --->", req.userId)
   
    if (!platform || !companyName || !role) {
      return res.status(400).json({ message: "Required fields are missing." });
    }

    const newJob = new Job({
      userId: req.userId,
      platform,
      companyName,
      role,
      package: pkg,
      location,
      applicationDate,
      status,
      notes,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.log("Errror --->", error)
    res.status(500).json({ message: "Failed to create job application.", error });
  }
};

// Get all job applications for a user
export const getJobsByUser = async (req, res) => {
  try {
    const  userId  = req.userId;

    const jobs = await Job.find({ userId });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch jobs.", error });
  }
};

// Get a single job application by ID
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;

    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: "Job not found." });

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch job.", error });
  }
};

// Update a job application by ID
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedJob = await Job.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedJob) return res.status(404).json({ message: "Job not found." });

    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Failed to update job.", error });
  }
};

// Delete a job application by ID
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) return res.status(404).json({ message: "Job not found." });

    res.status(200).json({ message: "Job deleted successfully.", deletedJob });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete job.", error });
  }
};
