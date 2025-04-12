"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";
import { themes } from "@/lib/themes";
const ThemeSwitcher = () => {
  useEffect(() => {
    themeChange(false); // Necesario para que funcione con React
  }, []);

  return (
    <div className="dropdown">
      <div
        className="tooltip tooltip-bottom tooltip-accent"
        data-tip="Change the Theme"
      >
        <div tabIndex={0} role="button" className="btn btn-primary m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
              data-set-theme={theme}
              data-act-class="outline"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
