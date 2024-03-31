"use client";


export default function Navbar() {

    return (
        <nav className="min-w-full fixed top-0 z-40 bg-custYellow h-14 md:h-16">
          <div className="max-w-[1150px] 2xl:max-w-[1200px] h-full flex flex-wrap items-center justify-between mx-auto px-4 sm:px-10">
            
            <div
              className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li className="group hover:bg-black/30">
                  <a
                    href="/#tentang"
                    className="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
                  >
                    About
                  </a>
                  <div className="block group-hover:hidden self-end h-1 mt-1 w-full bg-custWhite" />
                </li>
                <li className="group hover:bg-black/30">
                  <a
                    href="/#panduan"
                    className="block py-2 spl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
                  >
                    Help
                  </a>
                  <div className="block group-hover:hidden self-end h-1 mt-1 w-full bg-custWhite" />
                </li>
                <li className="group hover:bg-black/30">
                  <a
                    href="/search"
                    className="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
                  >
                    Add Schedule
                  </a>

                </li>
                <li className="group hover:bg-black/30">
                  <a
                    href="/addEvent"
                    className="block py-2 pl-3 pr-4 text-white-100 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-3 md:mt-2"
                  >
                    A.I
                  </a>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}
