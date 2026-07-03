"use client";

export function ScrollToContactBtn() {
  return (
    <button
      onClick={() => {
        document.getElementById("selected-work")?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className="px-6 py-3 bg-white text-black rounded-full transition ease-in-out hover:scale-105 hover:bg-zinc-200"
    >
      View Work
    </button>
  );
}