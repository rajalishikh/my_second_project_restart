
const Navbar = () => {
    return (
        <div className="bg-base-100 border-b border-gray-100">
  <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
    
    {/* Navbar Start: Logo & Brand */}
    <div className="navbar-start">
      <a className="text-[#130B2D] font-bold  text-sm lg:text-2xl whitespace-nowrap">
        CS — Ticket System
      </a>
    </div>

    {/* Navbar End: Desktop Menu + Button + Mobile Toggle */}
    <div className="navbar-end gap-2">
      
      {/* Desktop Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Changelog</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Download</a></li>
          <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* New Ticket Button - Desktop & Mobile */}
      <a className="btn btn-sm md:btn-md bg-gradient-to-r from-[#6338f2] to-[#a46efd] hover:opacity-90 border-none text-white rounded-xl shadow-md">
        <span className="text-lg">+</span> New Ticket
      </a>

      {/* Mobile Dropdown Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-gray-100"
        >
          <li><a href="#">Home</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

    </div>
  </div>
      </div>
    );
};

export default Navbar;