"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const AccountSettings = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [profileData, setProfileData] = useState({
    firstName: "Rofiqur",
    lastName: "Rahman",
    email: "rofiqurrahman03@gmail.com",
    phone: "+46 345 344 66",
    role: "Team Manager",
    country: "Sweden",
    city: "Stockholm",
    postalCode: "SE-234"
  });

  const sidebarItems = [
    { id: "profile", label: "My Profile", icon: "👤" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "teams", label: "Teams", icon: "👥" },
    { id: "team-member", label: "Team Member", icon: "👨‍💼" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "billing", label: "Billing", icon: "💳" },
    { id: "data-export", label: "Data Export", icon: "📊" },
    { id: "delete-account", label: "Delete Account", icon: "🗑️", danger: true },
  ];

  const organizationItems = [
    { id: "apps-plugins", label: "Apps & Plugins", icon: "🔌" },
    { id: "tax-forms", label: "Tax Forms", icon: "📄", badge: "Tax" },
    { id: "organization-settings", label: "Organization Settings", icon: "⚙️" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const renderProfileSection = () => (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {profileData.firstName} {profileData.lastName}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">{profileData.role}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500">Local, United Kingdom</p>
        </div>
        <button className="ml-auto px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
          Edit ✏️
        </button>
      </div>

      {/* Personal Information */}
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
          <button className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
            Edit ✏️
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email address
            </label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Role
            </label>
            <select
              value={profileData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            >
              <option value="Team Manager">Team Manager</option>
              <option value="DJ">DJ</option>
              <option value="Event Organizer">Event Organizer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
          <button className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
            Edit ✏️
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Country
            </label>
            <input
              type="text"
              value={profileData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              City/State
            </label>
            <input
              type="text"
              value={profileData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              ZIP/Postal Code
            </label>
            <input
              type="text"
              value={profileData.postalCode}
              onChange={(e) => handleInputChange("postalCode", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              TAX ID
            </label>
            <input
              type="text"
              value="A556664756"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return renderProfileSection();
      case "security":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security Settings</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your password, two-factor authentication, and security preferences.</p>
          </div>
        );
      case "teams":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Teams</h2>
            <p className="text-gray-600 dark:text-gray-400">Manage your team memberships and collaborations.</p>
          </div>
        );
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-400">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black pt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              {/* Team Info */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ET
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Elite Team</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">stockholm.dj team</p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Menu
                </div>
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md text-left transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : item.danger
                        ? "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}

                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 mt-6">
                  Organization
                </div>
                {organizationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md text-left transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                    {item.badge && (
                      <span className="ml-auto px-2 py-1 text-xs bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
              </nav>

              {/* Create Contact Button */}
              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <span>+</span>
                Create Contact
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Manage your account settings and preferences
                </p>
              </div>

              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
