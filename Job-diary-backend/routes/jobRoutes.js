import express from "express";
import {
  createJob,
  getJobsByUser,
  getJobById,
  updateJob,
  deleteJob, 
} from "../controllers/jobController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createJob);

router.get("/user", authMiddleware, getJobsByUser);

router.get("/:id", getJobById);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

export default router;
