import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white ">
        <div className="navbar-start flex-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden xl:hidden 2xl:hidden 3xl:hidden"
            >
              <IoMenu className="text-black text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box text-[#0e101a] w-52"
            >
              <li>
                <details>
                  <summary>Product</summary>
                  <div>
                    <div>
                      <ul>
                        <li>
                          <a href="#">Learn</a>
                        </li>
                        <li>
                          <a href="">Features</a>
                        </li>
                        <li>
                          <a href="">Product Demo</a>
                        </li>
                        <li>
                          <a href="">Trust & Security</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      {" "}
                      <ul>
                        <li>
                          <a href="#">Download</a>
                        </li>
                        <li>
                          <a href="">Desktop</a>
                        </li>
                        <li>
                          <a href="">Mobile</a>
                        </li>
                        <li>
                          <a href="">Browser</a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
          <a className="btn btn-ghost text-xl">
            <Image src="/logo.png" alt="logo" width={158} height={34} />
          </a>
          <div className="navbar-center hidden lg:flex xl:flex 2xl:flex 3xl:flex">
            <ul className="menu text-[#0e101a] menu-horizontal Get  px-1">
              <li>
                <details>
                  <summary>Product</summary>
                  <ul className="border  py-7 lg:w-[650px]  2xl:w-[650px] 3xl:w-[650px]  xl:w-[650px] flex items-center  pr-10 rounded-none ">
                    <div className=" dropdown pr-24 ">
                      <ul className="">
                        <li className=" font-semibold ">
                          <a href="#">Learn</a>
                        </li>
                        <li>
                          <a href="">Features</a>
                        </li>
                        <li>
                          <a href="">Product Demo</a>
                        </li>
                        <li>
                          <a href="">Trust & Security</a>
                        </li>
                      </ul>
                    </div>
                    <div className=" dropdown">
                      {" "}
                      <ul>
                        <li className=" font-semibold ">
                          <a href="#">Download</a>
                        </li>
                        <li>
                          <a href="">Desktop</a>
                        </li>
                        <li>
                          <a href="">Mobile</a>
                        </li>
                        <li>
                          <a href="">Browser</a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Work</summary>
                  <ul className="">
                    <div className="flex px-7  pr-10 border border-[]">
                      <div className="border-r-[#0e101a]">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="">Features</a>
                          </li>
                          <li>
                            <a href="">Product Demo</a>
                          </li>
                          <li>
                            <a href="">Trust & Security</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        {" "}
                        <ul>
                          <li>
                            <a href="#">Download</a>
                          </li>
                          <li>
                            <a href="">Desktop</a>
                          </li>
                          <li>
                            <a href="">Mobile</a>
                          </li>
                          <li>
                            <a href="">Browser</a>
                          </li>
                        </ul>
                      </div>
                    </div>
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

        <div className="navbar-end ">
          <button className=" hidden xl:block ml-3 p-3 hover:border hover:border-[#014c43] transition-all duration-300 rounded-lg text-[#0e101a]">
            <a>Contact Sales</a>
          </button>
          <button className=" ml-3 p-3 hover:border hover:border-[#014c43] transition-all duration-300 rounded-lg text-[#0e101a]">
            <a className="">Login</a>
          </button>
          <button className="w-full hidden lg:block px-2 py-2 text-sm hover:bg-[#014c43] transition-all duration-300  text-white ml-2   transform bg-[#027e6f] rounded-lg lg:w-auto ">
            <span className="font-semibold">Get Grammarly</span> It's free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;