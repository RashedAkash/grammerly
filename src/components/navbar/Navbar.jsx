import Image from "next/image";


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image src="/logo.png" alt="logo" width={158} height={34} />
          </a>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-[#0e101a] menu-horizontal Get  px-1">
              <li>
                <details>
                  <summary>Product</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Work</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Education</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#">pricing</a>
              </li>
              <li>
                <details>
                  <summary>Resources</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <button>
            <a className=" ml-3 p-3 hover:border hover:border-[#014c43] transition-all duration-300 rounded-lg text-[#0e101a]">
              Contact Sales
            </a>
          </button>
          <button className=" ml-3 p-3 hover:border hover:border-[#014c43] transition-all duration-300 rounded-lg text-[#0e101a]">
            <a className="">Login</a>
          </button>
          <button className="w-full px-2 py-2 text-sm hover:bg-[#014c43] transition-all duration-300  text-white ml-2   transform bg-[#027e6f] rounded-lg lg:w-auto ">
            <span className="font-semibold">Get Grammarly</span> It's free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;