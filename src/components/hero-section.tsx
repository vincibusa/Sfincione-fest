import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#003366] bg-opacity-70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-dancing text-6xl md:text-8xl text-[#FFD700] mb-4"
        >
          Sfincione Fest 2025
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#F5F5DC] text-xl md:text-2xl mb-12 font-montserrat"
        >
          6-9 Novembre 2025, Bagheria
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFD700] text-[#003366] px-8 py-3 rounded-full font-bold text-lg transition-colors hover:bg-yellow-400"
          >
            Acquista Ticket
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-[#B22222] text-[#B22222] px-8 py-3 rounded-full font-bold text-lg hover:bg-[#B22222] hover:text-white transition-colors"
          >
            Scopri il Programma
          </motion.button>
        </div>
      </div>
    </div>
  );
}
