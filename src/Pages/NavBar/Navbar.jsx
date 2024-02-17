const Navbar = () => {
  return (
    <>
      <div className="navbar fixed  z-10 opacity-90  mx-auto text-black bg-[#E9E4E0]">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-yellow-50 rounded-box w-52"
            >
              <li>
                <a>About</a>
                <ul className="p-2">
                  <li>
                    <a>About 24 Carrots</a>
                  </li>
                  <li>
                    <a>Team</a>
                  </li>
                  <li>
                    <a>Awards & Press</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>ABOUT</a>
                <ul className="p-2">
                  <li>
                    <a>About 24 Carrots</a>
                  </li>
                  <li>
                    <a>Team</a>
                  </li>
                  <li>
                    <a>Awards & Press</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
                <ul className="p-2">
                  <li>
                    <a>About 24 Carrots</a>
                  </li>
                  <li>
                    <a>Team</a>
                  </li>
                  <li>
                    <a>Awards & Press</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a className="btn hover:bg-[#E9E4E0] btn-ghost text-xl">
            <img
              src="https://24carrots.com/wp-content/themes/24carrots/img/24carrots.svg"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex lg:h-20">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-xl font-mono">ABOUT</summary>
                <ul className="uppercase font-serif p-2">
                  <li>
                    <a>About 24 Carrots</a>
                  </li>
                  <li>
                    <a>Team</a>
                  </li>
                  <li>
                    <a>Awards & Press</a>
                  </li>
                  <li>
                    <a>Blog</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="uppercase text-xl font-mono">
                  Services
                </summary>
                <ul className="uppercase font-serif p-2">
                  <li>
                    <a>Gourmet Catering</a>
                  </li>
                  <li>
                    <a>Bar Service</a>
                  </li>
                  <li>
                    <a>Staffing</a>
                  </li>
                  <li>
                    <a>Production</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="uppercase text-xl font-mono">
                  Events
                </summary>
                <ul className="uppercase font-serif p-2">
                  <li>
                    <a>Weddings</a>
                  </li>
                  <li>
                    <a>Corporate</a>
                  </li>
                  <li>
                    <a>Social</a>
                  </li>
                  <li>
                    <a>Gallery</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
                <summary className="uppercase text-xl font-mono">
                  Venues
                </summary>
            </li>
            <li>
                <summary className="uppercase text-xl font-mono">
                  Careers
                </summary>
            </li>
            <li>
                <summary className="uppercase text-xl font-mono text-center items-center justify-center content-center">
                <button className="btn-xs sm:btn-sm  rounded-full bg-red-500  uppercase font-semibold">
            Get in touch
          </button>
                </summary>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
