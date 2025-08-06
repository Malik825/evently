// src/routes/AdminRoutes.tsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/admin/Dashboard";
import Bookings from "../../pages/admin/Bookings";
import Packages from "../../pages/admin/Packages";
import Terms from "../../pages/admin/Terms";
import Staff from "../../pages/admin/Staff";
import AddEvent from "../../pages/admin/AddEvent";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="add-event" element={<AddEvent />} />
      <Route path="packages" element={<Packages />} />
      <Route path="terms" element={<Terms />} />
      <Route path="staff" element={<Staff />} />
    </Routes>
  );
}
