import LogoutBtn from "@/components/hankoComponents/logoutButton";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import Calendar from "./calendar/calendar";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div
          className="tooltip tooltip-right tooltip-accent"
          data-tip="Aqui puedes ver tus listas"
        >
          <label
            htmlFor="my-drawer"
            className="lg:hidden btn btn-circle swap swap-rotate drawer-button"
          >
            <input type="checkbox" />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>
                <Link href="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/todo">Todo</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/profile">Profile</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/login">Login page</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Calendar />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end mr-3 m-auto">
          <div
            tabIndex={1}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="avatar avatar-placeholder">
              <div className="bg-accent text-neutral-content w-10 rounded-full m-auto">
                <span>P</span>
              </div>
            </div>
          </div>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                <Link href="/profile">Profile</Link>
              </a>
            </li>
            <li>
              {" "}
              <LogoutBtn />
            </li>
          </ul>
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
