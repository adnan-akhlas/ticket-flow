import { Twitter, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-gray-800 pb-12">
          {/* Brand & Value Proposition */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold mb-6 tracking-tight">
              Ticket Flow
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplifying complex support workflows with intuitive ticketing
              solutions. We help teams resolve issues faster and keep customers
              smiling.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Sales
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Products & Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Download Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Information</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div>
            <h3 className="font-semibold text-white mb-6">Social Links</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <Twitter size={16} />
                <a href="#" className="hover:text-white transition-colors">
                  @ticket-flow
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={16} />
                <a href="#" className="hover:text-white transition-colors">
                  @ticket-flow
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={16} />
                <a href="#" className="hover:text-white transition-colors">
                  @ticketflow
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Mail size={16} />
                <a
                  href="mailto:support@ticketflow.com"
                  className="hover:text-white transition-colors"
                >
                  support@tickteflow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Ticket Flow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
