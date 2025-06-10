import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const StockholmDJLogo: React.FC = () => {
  const { scrollY } = useScroll();

  const rotate = useTransform(scrollY, (value) => value * 0.4); // Multiplier controls speed
  const rotateSpring = useSpring(rotate, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
  });

  return (
    <Link
      href="/"
      className="flex items-center gap-[4px]"
      aria-label="Go to homepage"
    >
      {/* Main animated logo element */}
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ rotate: rotateSpring }}
        role="img"
        aria-label="Stockholm DJ Logo"
      >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="48" stroke="#fafafa" strokeWidth="4" fill="none" />
        
        {/* DJ stylized elements */}
        <path
          d="M30 30L70 50L30 70L30 30Z"
          fill="#fafafa"
        />
        
        {/* Record groove lines */}
        <circle cx="50" cy="50" r="20" stroke="#fafafa" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="30" stroke="#fafafa" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="40" stroke="#fafafa" strokeWidth="1" fill="none" />
      </motion.svg>

      {/* Optional: text logo next to icon */}
      <div className="ml-2 text-fafafa hidden sm:block font-semibold">
        Stockholm.DJ
      </div>
    </Link>
  );
};

export default StockholmDJLogo;
