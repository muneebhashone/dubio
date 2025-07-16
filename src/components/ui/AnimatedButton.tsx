// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { div } from "framer-motion/client";
// import { ArrowRight } from "lucide-react";
// import { useState } from "react";

// export default function AnimatedButton() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative overflow-hidden  bg-gradient-to-r from-[#5b43ed] to-[#6c30fa] hover:bg-[#6D28D9] w-48 h-14 hover:bg-gradient-to-r hover:from-[#4f3ed0] hover:to-[#221358] text-white rounded-full font-bold flex items-center justify-center group"
//     >
//       <motion.span
//         animate={{ x: isHovered ? -8 : 0 }}
//         transition={{
//           duration: 0.6,
//           ease: [0.25, 0.1, 0.25, 1],
//         }}
//         className=""
//       >
//         Join Waitlist
//       </motion.span>
//       <AnimatePresence>
//         {isHovered && (
//           <motion.span
//             key="arrow"
//             initial={{ x: 10, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: 15, opacity: 1 }}
//             transition={{
//               duration: 0.6,
//               ease: [0.25, 0.1, 0.25, 1],
//             }}
//             className="ml-"
//           >
//             <ArrowRight size={20} />
//           </motion.span>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AnimatedButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        // Scroll to the footer smoothly
        const footer = document.querySelector("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="relative overflow-hidden bg-gradient-to-r from-[#5b43ed] to-[#6c30fa] hover:bg-gradient-to-r hover:from-[#4f3ed0] hover:to-[#221358] 
                 w-32 h-10 sm:w-36 sm:h-11 md:w-40 md:h-12 lg:w-44 lg:h-12 xl:w-48 xl:h-12
                 text-white rounded-full font-bold flex items-center justify-center group
                 transition-all duration-300 hover:scale-105 active:scale-95
                 text-xs sm:text-sm md:text-base
                 cursor-pointer select-none"
    >
      <motion.span
        animate={{ x: isHovered ? -4 : 0 }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="whitespace-nowrap"
      >
        Join Waitlist
      </motion.span>
      <AnimatePresence>
        {isHovered && (
          <motion.span
            key="arrow"
            initial={{ x: 6, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 8, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="ml-1"
          >
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </div>
    
  );
}
