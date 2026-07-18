"use client";

import { useState } from "react";

export default function MobileFilterWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden"
      >
        Filters
      </button>

      <div
        className={`
          ${isOpen ? "block" : "hidden"}
          lg:block
        `}
      >
        {children}
      </div>
    </>
  );
}