import { motion } from "framer-motion";

const logos = [
  {
    name: "Mercedes-Benz",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1.5c4.69 0 8.5 3.81 8.5 8.5 0 .32-.02.64-.06.95L12 10.15 3.56 12.95c-.04-.31-.06-.63-.06-.95 0-4.69 3.81-8.5 8.5-8.5zM12 12l7.74 2.56c-.66 2.41-2.4 4.39-4.71 5.37L12 12.87l-3.03 7.06c-2.31-.98-4.05-2.96-4.71-5.37L12 12z" />
      </svg>
    ),
  },
  {
    name: "BMW",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-3.31 0-6.24-2.01-7.46-5h14.92c-1.22 2.99-4.15 5-7.46 5zm-7.46-7c.23-.55.51-1.07.82-1.55H12V13.5H4.54zm7.46-.5H5.36c.21-.35.45-.69.72-1H12v1zm0-2H6.55c.4-.5.87-.93 1.39-1.29L12 10.5V10.5zM12 4c3.31 0 6.24 2.01 7.46 5H4.54c1.22-2.99 4.15-5 7.46-5zm7.46 9h-7.46v-1.5h6.64c.31.48.59 1 .82 1.55zM12 13.5v-1h6.64c.27.31.51.65.72 1H12zm0-3v1h5.45c-.4-.5-.87-.93-1.39-1.29L12 10.5z" />
      </svg>
    ),
  },
  {
    name: "Audi",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-8">
        <path d="M4.5 12c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zm4.5 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zm4.5 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zm4.5 0c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5zM2 12c0 2.48 2.02 4.5 4.5 4.5.83 0 1.61-.23 2.27-.63.4.4.95.63 1.56.63.83 0 1.61-.23 2.27-.63.4.4.95.63 1.56.63.83 0 1.61-.23 2.27-.63.4.4.95.63 1.56.63 2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5c-.61 0-1.16.23-1.56.63-.66-.4-1.44-.63-2.27-.63-.61 0-1.16.23-1.56.63-.66-.4-1.44-.63-2.27-.63-.61 0-1.16.23-1.56.63-2.48 0-4.5 2.02-4.5 4.5zm1.5 0c0-1.66 1.34-3 3-3 .55 0 1.05.15 1.48.41-.33.72-.52 1.52-.52 2.36s.19 1.64.52 2.36c-.43.26-.93.41-1.48.41-1.66 0-3-1.34-3-3zm4.5 0c0-1.66 1.34-3 3-3 .55 0 1.05.15 1.48.41-.33.72-.52 1.52-.52 2.36s.19 1.64.52 2.36c-.43.26-.93.41-1.48.41-1.66 0-3-1.34-3-3zm4.5 0c0-1.66 1.34-3 3-3 .55 0 1.05.15 1.48.41-.33.72-.52 1.52-.52 2.36s.19 1.64.52 2.36c-.43.26-.93.41-1.48.41-1.66 0-3-1.34-3-3zm4.5 0c0-1.66 1.34-3 3-3 .55 0 1.05.15 1.48.41-.33.72-.52 1.52-.52 2.36s.19 1.64.52 2.36c-.43.26-.93.41-1.48.41-1.66 0-3-1.34-3-3z" />
      </svg>
    ),
  },
  {
    name: "Honda",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M4 4h2v16H4V4zm14 0h2v16h-2V4zM7 6h10v2H7V6zm0 10h10v2H7v-2zm0-5h10v2H7v-2z" />
        <path d="M6 3v18h12V3H6zm10 16H8V5h8v14z" />
      </svg>
    ),
  },
  {
    name: "Ferrari",
    svg: (
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z" />
        </svg>
        <span className="text-[8px] font-bold tracking-widest mt-1">FERRARI</span>
      </div>
    ),
  },
  {
    name: "Richard Mille",
    svg: (
      <div className="flex flex-col items-center">
        <div className="w-8 h-10 border-2 border-current rounded-[10px] relative">
          <div className="absolute inset-2 border border-current rounded-sm"></div>
        </div>
        <span className="text-[7px] font-bold tracking-tighter mt-1">RICHARD MILLE</span>
      </div>
    ),
  },
];

const LogoStrip = () => {
  return (
    <div className="w-full bg-white border-y border-gray-100 py-8 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <motion.div
        className="flex space-x-16 items-center w-max"
        animate={{
          x: [0, -1035], // Adjusted for the total width of duplicated content
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-100 text-gray-800"
          >
            {logo.svg}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoStrip;
