"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

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
            gap-3
            text-left
            mb-3
            "
        >
        <ChevronRight
            size={16}
            className={`
                transition-transform
                ${isOpen ? "rotate-90" : ""}
            `}
        />
        <h3
          className="
            text-xs
            uppercase
            tracking-widest
            text-gray-500
          "
        >
          {title}
        </h3>
      </button>

      {isOpen && (
        <div className="">
          {children}
        </div>
      )}
    </div>
  );
}