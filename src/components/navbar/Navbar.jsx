import Image from "next/image";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="navbar border-b bg-white ">
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
                  <ul className=" ">
                    <div>
                      <ul>
                        <li className=" font-semibold ">
                          <a href="#">By Team Size</a>
                        </li>
                        <li>
                          <a href="">Enterprise</a>
                        </li>
                        <li>
                          <a href="">Teams & Business</a>
                        </li>
                        <li>
                          <a href="">Individuals</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className=" font-semibold ">
                          <a href="#">By Team Function</a>
                        </li>
                        <li>
                          <a href="#">Customer Support</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <a href="#">IT</a>
                        </li>
                        <li>
                          <a href="">Sales</a>
                        </li>
                        <li>
                          <a href="#">HR</a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Education</summary>
                  <ul className="p-2 ">
                    <li className="">
                      <a>Students</a>
                    </li>
                    <li>
                      <a>Institutions</a>
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
                  <ul className="">
                    <div>
                      <ul>
                        <li className=" font-semibold ">
                          <a href="#">Learn</a>
                        </li>
                        <li>
                          <a href="">Blog</a>
                        </li>
                        <li>
                          <a href="">Customer Stories</a>
                        </li>
                        <li>
                          <a href="">Business Events & Reports</a>
                        </li>
                        <li>
                          <a href="">Education Events & Reports</a>
                        </li>
                        <li>
                          <a href="">Support Center</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className=" ">
                        <li className=" font-semibold ">
                          <a href="#">Tools</a>
                        </li>
                        <li className="">
                          <a href="#">AI Writing Tools</a>
                        </li>
                        <li>
                          <a href="#">Grammar Checker</a>
                        </li>
                        <li>
                          <a href="#">Plagiarism Checker</a>
                        </li>
                        <li>
                          <a href="">Paraphrasing Tool</a>
                        </li>
                        <li>
                          <a href="#">HR</a>
                        </li>
                      </ul>
                    </div>
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
                  <ul className="border border-[#cdd1dc] py-12 lg:w-[650px]  2xl:w-[650px] 3xl:w-[650px]  xl:w-[650px] flex items-center  pr-10 rounded-none ">
                    <div className=" dropdown pr-24 border-r border-[#cdd1dc] ">
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
                      <ul className="pl-10">
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
                  <ul className="border border-[#cdd1dc] py-12 lg:w-[650px]  2xl:w-[650px] 3xl:w-[650px]  xl:w-[650px] flex    rounded-none ">
                    <div className=" dropdown pr-24 border-r border-[#cdd1dc] ">
                      <ul>
                        <li className=" font-semibold ">
                          <a href="#">By Team Size</a>
                        </li>
                        <li>
                          <a href="">Enterprise</a>
                        </li>
                        <li>
                          <a href="">Teams & Business</a>
                        </li>
                        <li>
                          <a href="">Individuals</a>
                        </li>
                      </ul>
                    </div>
                    <div className=" dropdown ">
                      <ul className="pl-10 ">
                        <li className=" font-semibold ">
                          <a href="#">By Team Function</a>
                        </li>
                        <li className="hover:border-[]">
                          <a href="#">Customer Support</a>
                        </li>
                        <li>
                          <a href="#">Marketing</a>
                        </li>
                        <li>
                          <a href="#">IT</a>
                        </li>
                        <li>
                          <a href="">Sales</a>
                        </li>
                        <li>
                          <a href="#">HR</a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Education</summary>
                  <ul className="p-2 education border border-[#cdd1dc] lg:w-[310px]  2xl:w-[310px] 3xl:w-[310px]  xl:w-[310px] rounded-none pl-7 pr-16">
                    <li className="mb-10">
                      <a>Students</a>
                    </li>
                    <li>
                      <a>Institutions</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#">pricing</a>
              </li>
              <li className="relative">
                <details>
                  <summary>Resources</summary>
                  <ul className="border absolute z-10 right-0  border-[#cdd1dc] py-12 lg:w-[650px]  2xl:w-[650px] 3xl:w-[650px]  xl:w-[650px] flex    rounded-none ">
                    <div className="  dropdown pr-24 border-r border-[#cdd1dc] ">
                      <ul>
                        <li className=" font-semibold ">
                          <a href="#">Learn</a>
                        </li>
                        <li>
                          <a href="">Blog</a>
                        </li>
                        <li>
                          <a href="">Customer Stories</a>
                        </li>
                        <li>
                          <a href="">Business Events & Reports</a>
                        </li>
                        <li>
                          <a href="">Education Events & Reports</a>
                        </li>
                        <li>
                          <a href="">Support Center</a>
                        </li>
                      </ul>
                    </div>
                    <div className=" dropdown ">
                      <ul className=" ">
                        <li className=" font-semibold ">
                          <a href="#">Tools</a>
                        </li>
                        <li className="">
                          <a href="#">AI Writing Tools</a>
                        </li>
                        <li>
                          <a href="#">Grammar Checker</a>
                        </li>
                        <li>
                          <a href="#">Plagiarism Checker</a>
                        </li>
                        <li>
                          <a href="">Paraphrasing Tool</a>
                        </li>
                        <li>
                          <a href="#">HR</a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end ">
          <button className=" hidden  xl:block 2xl:block 3xl:block ml-3 p-3 hover:border hover:border-[#014c43] transition-all duration-300 rounded-lg text-[#0e101a]">
            <a>Contact Sales</a>
          </button>
          <button className=" ml-3 p-3 hover:border hover:border-[#014c43] transition-all duration-300 rounded-lg text-[#0e101a]">
            <a className="">Login</a>
          </button>
          <button className=" hidden lg:block xl:block 2xl:block 3xl:block px-2 py-2 text-sm hover:bg-[#014c43] transition-all duration-300  text-white ml-2   transform bg-[#027e6f] rounded-lg  ">
            <span className="font-semibold">Get Grammarly</span> Its free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;