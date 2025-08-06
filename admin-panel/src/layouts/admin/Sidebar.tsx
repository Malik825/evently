import React, { useState } from 'react';
import {
  LogOut,
  BarChart3,
  Calendar,
  Package,
  FileText,
    Users,

    Home,
  PlusCircle
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Link = ({ to, children, className, onClick }) => {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
        console.log(`Navigating to: ${to}`);
      }}
    >
      {children}
    </a>
  );
};

const sidebarLinks = [
  { label: "Dashboard", path: "/admin/dashboard", icon: Home },
    { label: "Bookings", path: "/admin/bookings", icon: Calendar },
    {label:"Add Event", path: "/admin/add-event", icon: PlusCircle},
  { label: "Packages", path: "/admin/packages", icon: Package },
  { label: "Terms", path: "/admin/terms", icon: FileText },
  { label: "Staff", path: "/admin/staff", icon: Users },
];

export default function Sidebar() {
  const [activeLink, setActiveLink] = useState('/admin');
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(() => {
      alert('Logged out successfully!');
      setIsLoggingOut(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <aside className="w-64 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <BarChart3 size={20} className="text-white" />
            </div>
            <h2 className="text-xl font-bold">Admin Panel</h2>
          </div>
          <p className="text-indigo-100 text-sm">Manage your application</p>
        </div>

        <nav className="p-6">
          <div className="space-y-2">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeLink === link.path;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-decoration-none transition-all duration-300 transform hover:scale-[1.02] ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                      : 'text-gray-700 hover:bg-gray-50 hover:shadow-md'
                  } relative`}
                >
                  <Icon
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-500 group-hover:text-indigo-500'
                    }`}
                  />
                  <span
                    className={`font-medium transition-all duration-300 ${
                      isActive ? 'text-white' : 'group-hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <div className="absolute right-2 w-2 h-2 bg-white rounded-full animate-pulse" />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Logout Button */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`relative w-full group flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 transform hover:scale-[1.02] ${
                isLoggingOut
                  ? 'bg-red-100 text-red-400 cursor-not-allowed'
                  : 'text-red-500 hover:bg-red-50 hover:shadow-md hover:shadow-red-500/10'
              }`}
            >
              <LogOut
                size={18}
                className={`transition-all duration-300 ${
                  isLoggingOut ? 'animate-spin' : 'group-hover:rotate-12'
                }`}
              />
              <span className="font-medium">
                {isLoggingOut ? 'Logging out...' : 'Logout'}
              </span>

              {!isLoggingOut && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/5 transition-all duration-300" />
              )}
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Connected as</p>
            <p className="text-sm font-semibold text-gray-700">Administrator</p>
            <div className="flex items-center gap-1 mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">Online</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
