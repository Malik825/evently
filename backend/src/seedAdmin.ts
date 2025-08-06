import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "./models/admin.model";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ MongoDB connected for seeding");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

const seedAdmin = async () => {
  try {
    await connectDB();

    const existing = await Admin.findOne({
      email: "abdulmaliksuleman75@gmail.com",
    });
    if (existing) {
      console.log("⚠️ Admin already exists");
      process.exit(0);
    }

    const admin = new Admin({
      email: "abdulmaliksuleman75@gmail.com",
      password: "admin123", // It will be hashed by the pre-save hook
    });

    await admin.save();
    console.log("✅ Admin seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedAdmin();
