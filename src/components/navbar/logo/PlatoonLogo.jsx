import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const PlatoonLogo = () => {
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
      aria-label="Go to homepage" // Descriptive aria-label
    >
      <motion.svg
        width="32"
        height="32"
        viewBox="44 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ rotate: rotateSpring }}
        role="img" // Indicate the SVG is an image
        aria-label="Platoon DJ Logo" // Provide context for screen readers
      >
        <path
          d="M167 119L41.75 194.344L41.75 43.6558L167 119Z"
          fill="#fafafa"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M232 119C232 157.108 201.108 188 163 188C146.059 188 130.544 181.895 118.536 171.765L74.3691 198.409C96.1567 222.711 127.793 238 163 238C228.722 238 282 184.722 282 119C282 53.2781 228.722 0 163 0C127.793 0 96.1567 15.2894 74.3691 39.5907L118.536 66.2352C130.544 56.1051 146.059 50 163 50C201.108 50 232 80.8923 232 119Z"
          fill="#fafafa"
        />
      </motion.svg>
      <svg
        width="32"
        height="32"
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="119" cy="119" r="94" stroke="#fafafa" strokeWidth="50" />
      </svg>
    </Link>
  );
};

export default PlatoonLogo;
