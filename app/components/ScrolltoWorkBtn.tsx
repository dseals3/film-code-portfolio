"use client";

export function ScrollToContactBtn() {
  return (
    <button
      onClick={() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="px-6 py-3 border border-white rounded-full transition ease-in-out cursor-pointer hover:scale-102 hover:bg-white/10 hover:backdrop-blur-sm"
    >
      View Work
    </button>
  );
}