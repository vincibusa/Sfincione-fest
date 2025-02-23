import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer className="bg-[#003366] text-[#F5F5DC] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Links Section */}
        <div className="space-y-4">
          <h3 className="font-dancing text-2xl mb-4">Link Utili</h3>
          <ul className="space-y-2 font-montserrat">
            <li>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                Contatti
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFD700] transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="font-dancing text-2xl mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#FFD700" }}
              className="hover:text-[#FFD700] transition-colors"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#FFD700" }}
              className="hover:text-[#FFD700] transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: "#FFD700" }}
              className="hover:text-[#FFD700] transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-dancing text-2xl mb-4">Newsletter</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Il tuo indirizzo email"
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-transparent 
                  focus:border-[#6B8E23] focus:outline-none rounded-md transition-colors
                  placeholder:text-gray-400 font-montserrat"
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFD700] text-[#003366] px-6 py-2 rounded-md font-bold
                hover:bg-yellow-400 transition-colors"
              type="submit"
            >
              Iscriviti
            </motion.button>
          </form>
        </div>
      </div>
    </footer>
  );
}
