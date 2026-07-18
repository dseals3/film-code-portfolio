"use client";

import { useState } from "react";

export default function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          flex
          items-center
          justify-between
          text-left
          mb-3
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-widest
            text-gray-500
          "
        >
          {title}
        </span>

        <span className="text-gray-500">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}