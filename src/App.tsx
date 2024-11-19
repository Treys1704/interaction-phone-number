import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="relative">
        <motion.div
          className="text-4xl font-mono cursor-pointer select-none"
          initial={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.span
            className={`mr-2 ${
              hoveredPart === "country" || hoveredPart === "number"
                ? "text-blue-500"
                : hoveredPart
                ? "text-gray-400"
                : "text-black"
            }`}
            onHoverStart={() => setHoveredPart("country")}
            onHoverEnd={() => setHoveredPart(null)}
          >
            +1
          </motion.span>
          <motion.span
            className={`mr-2 ${
              hoveredPart === "area" || hoveredPart === "number"
                ? "text-blue-500"
                : hoveredPart
                ? "text-gray-400"
                : "text-black"
            }`}
            onHoverStart={() => setHoveredPart("area")}
            onHoverEnd={() => setHoveredPart(null)}
          >
            (408)
          </motion.span>
          <motion.span
            className={`mr-2 ${
              hoveredPart === "number"
                ? "text-blue-500"
                : hoveredPart
                ? "text-gray-400"
                : "text-black"
            }`}
            onHoverStart={() => setHoveredPart("number")}
            onHoverEnd={() => setHoveredPart(null)}
          >
            995-1010
          </motion.span>
        </motion.div>

        {/* Country hover effect */}
        <motion.div
          className="absolute left-2 -top-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredPart === "country" ? 1 : 0,
            y: hoveredPart === "country" ? 0 : 10,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="text-md">🇺🇸</span>
        </motion.div>

        {/* Area code hover effect */}
        <motion.div
          className="absolute left-16 -top-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: hoveredPart === "area" ? 1 : 0,
            y: hoveredPart === "area" ? 0 : 10,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <span className="text-md text-gray-400 font-semibold">San Jose</span>
        </motion.div>

        {/* Number hover effect */}
        <motion.div
          className="absolute left-0 top-14 flex items-center justify-center space-x-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: hoveredPart === "number" ? 1 : 0,
            y: hoveredPart === "number" ? 0 : -10,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
