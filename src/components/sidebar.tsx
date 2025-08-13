"use client";
import React from "react";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={onClose}
        >
          ☰
        </button>
        <div className="font-bold">Logo</div>
      </div>

      <nav className="p-4 flex flex-col gap-3">
        <a href="#" className="hover:bg-gray-100 p-2 rounded">
          Home
        </a>
        <a href="#" className="hover:bg-gray-100 p-2 rounded">
          Trending
        </a>
        <a href="#" className="hover:bg-gray-100 p-2 rounded">
          Subscriptions
        </a>
      </nav>
    </div>
  );
}
