import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-400 py-12 px-6 md:px-16 font-sans">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <h2 className="text-white text-xl font-bold mb-4">CS — Ticket System</h2>
          <p className="text-sm leading-relaxed max-w-sm">
            We provide modern and faster support ticket solutions. Our system is specially designed to make it easier to solve customers’ problems and to increase business efficiency
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
            <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
          </ul>
        </div>

        {/* Information & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
             <div className="bg-white rounded-xl p-1">
                <FaXTwitter />
                </div><a href="#" className="hover:text-white transition">@CS — Ticket System</a>
            </li>
            <li className="flex items-center gap-2">
               <div className="bg-white rounded-xl p-1 text-black">
                <CiLinkedin />
                </div><a href="#" className="hover:text-white transition text-black">@CS — Ticket System</a>
            </li>
            <li className="flex items-center gap-2">
               <div className="bg-white rounded-xl p-1 text-black">
                <CiFacebook />
                </div><a href="#" className="hover:text-white transition">@CS — Ticket System</a>
            </li>
            <li className="flex items-center gap-2">
               <div className="bg-white rounded-xl p-1 text-black">
                <MdOutlineMail />
                </div><a href="mailto:support@cst.com" className="hover:text-white transition">support@cst.com</a>
            </li>
          </ul>
        </div>
      </div>

                </div>
      

      {/* Bottom Border and Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
            
        </div>
    );
};

export default Footer;