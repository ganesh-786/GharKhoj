import express from "express";
import { getDetails } from "../controllers/controller.js";

const router = express.Router();

router.get("/", getDetails);

export default router;
