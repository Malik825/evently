// src/layouts/admin/AdminLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // your existing sidebar component

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
