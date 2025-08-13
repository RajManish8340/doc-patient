"use client";
import React from "react";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="flex flex-row justify-between p-2 bg-gray-100 shadow">
      {/* Left side */}
      <div className="flex flex-row gap-3 items-center">
        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={onMenuClick}
        >
          ☰
        </button>
        <div className="font-bold">Logo</div>
      </div>

      {/* Right side */}
      <div className="flex flex-row gap-3 items-center">
        <button className="px-2 py-1 border rounded">Sign In</button>
        <div>User Profile</div>
      </div>
    </div>
  );
}
