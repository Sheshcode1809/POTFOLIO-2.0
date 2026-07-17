// // app/sections/Footer.tsx
// "use client"

// import { motion } from "framer-motion"
// import { Heart, ArrowUp } from "lucide-react"
// import { NAV_LINKS } from "@/constants/data"

// export function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   return (
//     <footer className="relative py-10 sm:py-12 border-t border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top row: logo | nav links | back-to-top */}
//         <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-xl font-bold text-foreground">
//               <span className="text-primary">S</span>K
//             </span>
//             <span className="text-muted-foreground">Shesh Kanade</span>
//           </div>

//           {/* Nav links — wrap on very small screens */}
//           <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
//             {NAV_LINKS.map((link) => (
//               <motion.a
//                 key={link.name}
//                 href={link.href}
//                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
//                 whileHover={{ y: -2 }}
//               >
//                 {link.name}
//               </motion.a>
//             ))}
//           </nav>

//           {/* Back to top */}
//           <motion.button
//             onClick={scrollToTop}
//             className="p-2 rounded-lg bg-card border border-border text-muted-foreground hover:text-foreground transition-colors"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.95 }}
//             aria-label="Back to top"
//           >
//             <ArrowUp className="w-4 h-4" />
//           </motion.button>
//         </div>

//         {/* Bottom row: credits */}
//         <div className="mt-8 pt-8 border-t border-border text-center">
//           <p className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap">
//             Designed &amp; Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shesh Kanade
//           </p>
//           <p className="text-xs text-muted-foreground/60 mt-2">
//             © {new Date().getFullYear()} All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }