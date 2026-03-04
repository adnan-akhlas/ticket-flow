import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "FAQ", "Changelog", "Blog", "Download", "Contact"];

  return (
    <header className="w-full bg-white border-b border-gray-400 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-xl font-semibold text-gray-800">Ticket Flow</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
            {links.map((link) => (
              <a key={link} href="#" className="hover:text-black transition">
                {link}
              </a>
            ))}

            <button className="ml-4 bg-linear-to-br from-primary to-secondary hover:from-secondary hover:to-primary text-white px-4 py-2 rounded-md text-sm font-medium transition">
              + New Ticket
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-gray-100 border-t border-gray-300 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition"
            >
              {link}
            </a>
          ))}

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition w-fit">
            + New Ticket
          </button>
        </div>
      </div>
    </header>
  );
}
