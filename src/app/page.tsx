"use client";
import { useState } from "react";
import Sidebar from "~/components/sidebar";
import Topbar from "~/components/topbar";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Topbar onMenuClick={() => setSidebarOpen(true)} />

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="p-4">Welcome to the home page!</div>
    </div>
  );
}
