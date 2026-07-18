"use client";

import { useState } from "react";
import { ListFilter } from "lucide-react";

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
        className="
            lg:hidden
            
            w-full

            flex
            items-center
            justify-between

            rounded-xl
            border border-white/10

            bg-white/[0.02]

            px-4
            py-3

            hover:bg-white/[0.04]
            hover:cursor-pointer

            transition"
      >
          <div className="flex items-center gap-3">
            <ListFilter size={18} />

            <span className="font-medium">
                Filters
            </span>
        </div>
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