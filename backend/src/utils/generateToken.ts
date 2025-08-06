// src/utils/generateToken.ts
import jwt from "jsonwebtoken";

export const generateToken = (adminId: string) => {
  return jwt.sign({ adminId }, process.env.JWT_SECRET!, { expiresIn: "1d" });
};
