
const Navbar = () => {
    return (
        <div>
            <div className=" navbar bg-base-100 shadow-sm lg:pr-14  lg:pl-14  ">
  <div className="navbar-start">
    
    <a className="text-[#130B2D] font-bold lg:text-2xl">CS — Ticket System</a>
  </div>
  
  <div className="navbar-end">
    
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
     <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Changelog</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Download</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
          
    </ul>
    </div>
    <a className="btn bg-linear-to-r from-[#6338f2] to-[#a46efd] text-white rounded-xl "><span>+</span> Button</a>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  shadow">
        <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
     <li><a href="#" className="hover:text-black transition-colors">FAQ</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Changelog</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Download</a></li>
     <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
      </ul>
    </div>
  </div>
            </div>
            
        </div>
    );
};

export default Navbar;