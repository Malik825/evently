// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminRoutes from "./routes/admin/adminRoutes";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<LoginForm />} />

      {/* Admin Layout & Routes */}
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="*" element={<AdminRoutes />} />
      </Route>

      {/* Fallback redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
