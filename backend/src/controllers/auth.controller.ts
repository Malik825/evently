import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.model";
import { generateToken } from "../utils/generateToken";
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

export const registerAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ email, password });

    res.status(201).json({ message: "Admin created", adminId: admin._id });
  } catch (err) {
    res.status(500).json({ message: "Error registering admin", error: err });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = generateToken(admin._id.toString());

    res.json({ token, adminId: admin._id });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err });
  }
};
