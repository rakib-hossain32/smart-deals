import React, { use, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link, NavLink } from "react-router";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // console.log(result.user)
      })
      .catch(() => {
        // console.log()
      });
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `text-black hover:text-violet-700 transition ${
            isActive && "underline"
          }`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `text-black hover:text-violet-700 transition ${
            isActive && "underline"
          }`
        }
        to={"all-products"}
      >
        All Products
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              `text-black hover:text-violet-700 transition ${
                isActive && "underline"
              }`
            }
            to={"/my-products"}
          >
            My Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-black hover:text-violet-700 transition ${
                isActive && "underline"
              }`
            }
            to={"/my-bids"}
          >
            My Bids
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-black hover:text-violet-700 transition ${
                isActive && "underline"
              }`
            }
            to={"/create-product"}
          >
            Create Product
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <>
      <nav
        className={` flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 border-b border-[#E9E9E9] text-white bg-white `}
      >
        <Link to={"/"}>
          <h2 className=" text-black text-2xl  md:text-3xl font-bold  leading-10">
            Smart
            <span className="text-violet-700  leading-10">Deals</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          {links}
          {/* <a
            href="/"
            classNameName=""
          >
            Home
          </a>
          <a href="/products" classNameName="hover:text-purple-500 transition">
            Products
          </a>
          <a href="/stories" classNameName="hover:text-purple-500 transition">
            Stories
          </a>
          <a href="/pricing" classNameName="hover:text-purple-500 transition">
            Pricing
          </a> */}
          {/* {user && (
            <>
              <div className="w-24 h-11 px-4 py-3 rounded outline -outline-offset-1px outline-violet-700 inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-violet-700 text-base font-semibold  capitalize">
                  Login
                </div>
              </div>
            </>
          )} */}
        </div>

        {/* <button classNameName="hidden md:block px-6 py-2.5 bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all rounded-full">
          Start free trial
        </button> */}
        {/* <div classNameName=" space-x-4">
          <div className="w-24 h-11 px-4 py-3 rounded outline -outline-offset-1px outline-violet-700 inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-violet-700 text-base font-semibold  capitalize">
              Login
            </div>
          </div>
          <div className="w-28 h-11 px-4 py-3 bg-linear-to-br from-violet-700 to-purple-500 rounded inline-flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base font-semibold  capitalize">
              Register
            </div>
          </div>
        </div> */}

        {/* Mobile Button */}
        <div className=" flex items-center gap-3">
          {user ? (
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className=" m-1    ">
                <img
                  className=" w-full rounded-full size-9 border-violet-700 cursor-pointer"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm bg-white"
              >
                <li>
                  <p className="text-violet-700">{user?.displayName}</p>
                </li>
                <li>
                  <button onClick={handleSignOut} className="btn btn-primary ">
                    SignOut
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <div className="w-24  px-4 py-3 rounded outline -outline-offset-1px outline-violet-700 inline-flex justify-center items-center gap-2.5">
                <NavLink
                  to={"/login"}
                  className="justify-start text-violet-700 text-base font-semibold  capitalize"
                >
                  Login
                </NavLink>
              </div>
              <div className="w-28  px-4 py-3 bg-linear-to-br from-violet-700 to-purple-500 rounded inline-flex justify-center items-center gap-2.5">
                <NavLink
                  to={"/register"}
                  className="justify-start text-white text-base font-semibold  capitalize"
                >
                  Register
                </NavLink>
              </div>
            </>
          )}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden active:scale-90 transition text-black"
          >
            <svg
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/stories">Stories</a>
        <a href="/pricing">Pricing</a> */}
        {links}

        <button
          onClick={() => setOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-purple-600 hover:bg-purple-700 transition text-white rounded-md flex"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
