import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo.png"; // your footer logo

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Mobile: Stacked layout */}
        <div className="flex flex-col lg:flex-row lg:grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* LEFT SECTION */}
          <div className="lg:pr-8">
            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#1F1F1F] p-1 rounded-full w-full max-w-lg">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className="flex-1 px-4 py-3 bg-transparent text-sm text-gray-300 placeholder-gray-500 border border-gray-600 rounded-full sm:rounded-l-full sm:rounded-r-none sm:border-r-0 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]"
              />
              <button className="px-5 py-3 bg-[#2A2A2A] text-gray-200 text-sm rounded-full sm:rounded-r-full sm:rounded-l-none border border-gray-600 hover:bg-[#3A3A3A] transition-colors">
                Subscribe To Newsletter
              </button>
            </div>

            {/* Text */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 lg:mt-10 leading-snug">
              Signup and start enjoying the benefits
              <br className="hidden sm:block" /> today!
            </h2>

            {/* Button */}
            <button className="mt-6 px-6 sm:px-8 py-3 bg-[#8B5CF6] hover:bg-[#7c47f4] text-white rounded-lg text-sm font-medium transition-colors w-full sm:w-auto">
              Sign Up To Lilypads
            </button>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8">
              {[Facebook, Twitter, Linkedin, Youtube, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-[#8B5CF6] hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Icon size={15} className="sm:w-4 sm:h-4" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="text-sm space-y-8 lg:space-y-0 lg:grid lg:grid-rows-3 lg:gap-6">
            
            {/* ROW 1 — Logo + Address */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:items-center">
              {/* Logo */}
              <img 
                src={logo} 
                alt="footer logo" 
                className="h-10 sm:h-12 w-auto" 
              />

              {/* Text section */}
              <div className="sm:flex-1">
                <h3 className="font-semibold mb-2 text-base">Reach at us</h3>
                <p className="opacity-70 leading-relaxed text-sm sm:text-base">
                  6705 Columbia Gateway Dr.,<br />
                  3rd Floor, Columbia,<br />
                  MD 21046
                </p>
              </div>
            </div>

            {/* ROW 2 — Network, Product, Our Story */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {/* Network */}
              <div>
                <h3 className="font-semibold mb-3 text-base">Network</h3>
                <ul className="space-y-2 opacity-70">
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Community</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Investor</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Broker</li>
                </ul>
              </div>

              {/* Product */}
              <div>
                <h3 className="font-semibold mb-3 text-base">Product</h3>
                <ul className="space-y-2 opacity-70">
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Invest</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Discover</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Transact</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Manage</li>
                </ul>
              </div>

              {/* Our Story */}
              <div>
                <h3 className="font-semibold mb-3 text-base">Our Story</h3>
                <ul className="space-y-2 opacity-70">
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Approach</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">About us</li>
                </ul>
              </div>
            </div>

            {/* ROW 3 — Technology, Highlights, Knowledge Center */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {/* Technology */}
              <div>
                <h3 className="font-semibold mb-3 text-base">Technology</h3>
                <ul className="space-y-2 opacity-70">
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Artificial Intelligence</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Block Chain</li>
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-semibold mb-3 text-base">Highlights</h3>
                <ul className="space-y-2 opacity-70">
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Impact of COVID19 on the food and beverage industry</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Commercial lending during COVID19</li>
                </ul>
              </div>

              {/* Knowledge Center */}
              <div>
                <h3 className="font-semibold mb-3 text-base">Knowledge Center</h3>
                <ul className="space-y-2 opacity-70">
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Resources</li>
                  <li className="hover:text-white hover:opacity-100 transition-colors cursor-pointer">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
     
      </div>
    </footer>
  );
};

export default Footer;