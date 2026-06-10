"use client"
import { useState } from "react";

export default function Footer() {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        await navigator.clipboard.writeText(
            "macadamianseals@gmail.com"
        );

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return (
    <footer id="contact" className="mt-24 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">

          <h2 className="text-2xl font-semibold">
            Let's work together.
          </h2>

          <p className="mt-3 text-gray-400">
            Available for filmmaking, video production, and web development projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest">
            <div className="relative flex flex-col items-center gap-2">
                <button
                    onClick={copyEmail}
                    className="text-inherit uppercase tracking-widest cursor-pointer hover:text-gray-300 transition"
                >
                    Email
                </button>

                <span
                    className={`
                        absolute top-full left-1/2 -translate-x-1/2 mt-1
                        whitespace-nowrap
                        text-gray-500 transition-opacity duration-300 ${
                    copied ? "opacity-100" : "opacity-0"
                    }`}
                >
                    Copied ✓
                </span>
            </div>

            <a
              href="https://instagram.com/thedamianseals"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@damianseals"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition"
            >
              Youtube
            </a>

            <a
              href="https://github.com/dseals3"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition"
            >
              GitHub
            </a>
          </div>

          <p className="mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} Damian Seals
          </p>

        </div>
      </footer>

    )
}