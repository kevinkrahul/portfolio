"use client";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dark:bg-red-500 bg-blue-500 text-3xl p-4">
      Navbar
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="ml-4 px-2 py-1 bg-white text-black">
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;
