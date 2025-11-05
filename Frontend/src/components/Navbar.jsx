import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  // const { user } = use(AuthContext);

  // const [open, setOpen] = useState(false);

  // const links = (
  //   <>
  //     <NavLink
  //       className={({ isActive }) =>
  //         `text-purple-500 hover:text-violet-700 transition ${
  //           isActive && "underline"
  //         }`
  //       }
  //       to={"/"}
  //     >
  //       Home
  //     </NavLink>
  //     <NavLink
  //       className={({ isActive }) =>
  //         `text-black hover:text-violet-700 transition ${
  //           isActive && "underline"
  //         }`
  //       }
  //       to={"all-products"}
  //     >
  //       All Products
  //     </NavLink>
  //     {user && (
  //       <>
  //         <NavLink
  //           className={({ isActive }) =>
  //             `text-black hover:text-violet-700 transition ${
  //               isActive && "underline"
  //             }`
  //           }
  //           to={"/my-products"}
  //         >
  //           My Products
  //         </NavLink>
  //         <NavLink
  //           className={({ isActive }) =>
  //             `text-black hover:text-violet-700 transition ${
  //               isActive && "underline"
  //             }`
  //           }
  //           to={"/my-bids"}
  //         >
  //           My Bids
  //         </NavLink>
  //         <NavLink
  //           className={({ isActive }) =>
  //             `text-black hover:text-violet-700 transition ${
  //               isActive && "underline"
  //             }`
  //           }
  //           to={"/create-product"}
  //         >
  //           Create Product
  //         </NavLink>
  //       </>
  //     )}
  //   </>
  // );

  return (
    <div className="">
      {/* Navbar */}

      {/* Hero Section */}
      {/* <div classNameName="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-32 pt-44 md:pt-48">
        <div classNameName="absolute top-28  left-1/4 size-72 bg-purple-600 blur-[300px]"></div>

        <div classNameName="flex items-center gap-4 mt-8">
          <button classNameName="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-7 h-11">
            Get started
          </button>
          <button classNameName="flex items-center gap-2 border border-purple-900 hover:bg-purple-950/50 transition rounded-full px-6 h-11">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="2" y="6" width="14" height="12" rx="2" />
              <path d="m16 13 5 3V8l-5 2.5" />
            </svg>
            Watch demo
          </button>
        </div>
      </div> */}

      <div className="self-stretch px-3 pb-5 pt-26 bg-linear-to-br from-fuchsia-100 to-sky-100 inline-flex flex-col justify-start items-center gap-10 overflow-hidden w-full">
        <div className="self-stretch flex flex-col justify-start items-center gap-8">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="opacity-90 text-center justify-start md:text-7xl text-4xl">
              <span className="text-black    font-bold  capitalize leading-[54px]">
                Deal your{" "}
              </span>
              <span className="text-violet-700  l font-bold  capitalize leading-[54px]">
                Products
              </span>
              <span className="text-black    font-bold  capitalize leading-[54px]">
                {" "}
                <br />
                in a{" "}
              </span>
              <span className="text-violet-700   font-bold  capitalize leading-[54px]">
                Smart
              </span>
              <span className="text-black   font-bold  capitalize leading-[54px]">
                {" "}
                way !
              </span>
            </div>
            <div className="self-stretch text-center justify-start text-slate-500 text-xl font-normal  leading-8">
              SmartDeals helps you sell, resell, and shop from trusted local
              sellers — all in one place!
            </div>
          </div>

          <div className="join  container flex justify-center">
            <input
              className="input join-item rounded-l-full bg-white text-gray-900 shadow-2xl"
              placeholder="search For Products, Categoriees..."
            />
            <button className="btn join-item rounded-r-full bg-linear-to-br from-violet-700 to-purple-500 border-0 shadow-2xl">
              <CiSearch color="white" size={23} />
            </button>
          </div>

          <div className="inline-flex justify-start items-center gap-4">
            <button className=" h-12 px-2 md:px-4 py-3 bg-linear-to-br from-violet-700 to-purple-500 rounded flex justify-center items-center ">
              <div className="  text-xs md:text-base font-semibold capitalize">
                Watch All Products
              </div>
            </button>
            <button className="h-12 px-2 md:px-4 py-3 rounded outline  -outline-offset-1px outline-violet-700 flex justify-center items-center gap-2.5">
              <div className="justify-start text-violet-700 text-xs md:text-base font-semibold ">
                Post an Product
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
