
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Smart Fitness Revolution",
    description: "Advanced compression gear with integrated optical sensors for real-time biomechanical analysis.",
    image: "/showcase/project_fitness_1774171590479.png",
    category: "Sports Tech",
    link: "/projects/sport-retail"
  },
  {
    title: "Next-Gen Healthcare Vest",
    description: "Medical-grade textile solution for continuous cardiovascular monitoring and clinical research.",
    image: "/showcase/project_healthcare_1774171605481.png",
    category: "Healthcare",
    link: "/projects/pet-tracker"
  },
  {
    title: "Connected Safety Armor",
    description: "Heavy-duty industrial workwear embedded with impact sensors and environmental hazard detection.",
    image: "/showcase/project_industrial_1774171619537.png",
    category: "Industrial Safety",
    link: "/projects/workwear"
  },
  {
    title: "Autonomous Comfort Interior",
    description: "Touch-sensitive smart upholstery for future mobility and seamless passenger interaction.",
    image: "/showcase/project_automotive_interior_1774171638561.png",
    category: "Automotive",
    link: "/projects/design"
  },
  {
    title: "Haptic Precision Glove",
    description: "High-fidelity feedback systems for industrial robotics and VR teleoperation control.",
    image: "/showcase/project_haptic_glove_1774171655835.png",
    category: "Robotics",
    link: "/projects/firecat"
  },
  {
    title: "Smart Zen Yoga Mat",
    description: "Integrated pressure sensors and LED alignment guides for perfect form and practice.",
    image: "/showcase/project_yoga_mat_1774172221410.png",
    category: "Wellness",
    link: "/industries/lifestyle"
  },
  {
    title: "Bio-sensing Sleep Mask",
    description: "Luxury ergonomic design with embedded EEG and heart rate sensors for optimized recovery.",
    image: "/showcase/project_sleep_mask_1774172235170.png",
    category: "Health & Sleep",
    link: "/industries/lifestyle"
  },
  {
    title: "Solar-Powered Outerwear",
    description: "High-performance mountain jacket with flexible solar thin-films for off-grid energy needs.",
    image: "/showcase/project_solar_jacket_1774172250503.png",
    category: "Outdoor Tech",
    link: "/projects/workwear"
  },
  {
    title: "VR Motion Capture Suit",
    description: "Full-body motion capture textile for VR and digital twin synchronization in real-time.",
    image: "/showcase/project_vr_suit_1774172264993.png",
    category: "Digital Arts",
    link: "/projects/design"
  },
  {
    title: "Smart Mountaineering Boots",
    description: "Integrated GPS and heating elements within advanced textile lining for extreme conditions.",
    image: "/showcase/project_smart_boots_1774172281483.png",
    category: "Extreme Gear",
    link: "/projects/workwear"
  }
];

/* 
 * Each card slides up from below to cover the previous card.
 * We track scroll progress of the ENTIRE tall container,
 * then derive each card's Y position from it.
 * Card i appears at progress = i / total.
 * Card 0 is always at y=0 (visible from the start).
 * Card 1 slides from y=100% to y=0% when progress goes from 0/10 to 1/10.
 * etc.
 */
const CardSlide = ({ 
  project, 
  index, 
  progress, 
  total 
}: { 
  project: any; 
  index: number; 
  progress: any; 
  total: number;
}) => {
  // First card is always visible (y=0). 
  // Subsequent cards slide up from 100% to 0% during their scroll segment.
  const segmentStart = index / total;
  const segmentEnd = (index + 0.7) / total; // finish the slide at 70% of the segment

  const y = index === 0 
    ? "0%" 
    : useTransform(progress, [segmentStart, segmentEnd], ["100%", "0%"]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, zIndex: index + 1 }}
    >
      {/* Card container with padding for rounded corners */}
      <div className="w-full h-full flex items-center justify-center bg-white p-2 sm:p-6">
        <div className="relative w-full h-full bg-gray-900 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
          {/* Full Image Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 z-10 p-6 sm:p-12 md:p-20 flex flex-col justify-end items-start text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest mb-3 border border-white/20">
              {project.category}
            </span>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
            <p className="text-sm md:text-lg text-gray-300 max-w-xl mb-8 font-light leading-relaxed">
              {project.description}
            </p>
            
            <Link 
              to={project.link}
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-colors"
            >
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Floating Index */}
          <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/10 font-black text-5xl sm:text-8xl italic pointer-events-none">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StackingProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    /* 
     * This tall container creates the scroll space.
     * Height = (N+1) * 100vh so we have enough room to scroll through all cards.
     * Inside, a "viewport" div that stays fixed in the viewport using 
     * position:fixed (applied via Framer Motion), containing all card layers.
     */
    <div 
      ref={containerRef} 
      style={{ height: `${(projects.length + 1) * 100}vh` }}
      className="relative"
    >
      {/* This div stays pinned to the viewport */}
      <div 
        className="h-screen w-full overflow-hidden"
        style={{ position: 'sticky', top: 0 }}
      >
        {/* Fallback: if sticky doesn't work, use JS-based fixed positioning */}
        <div className="relative w-full h-full">
          {projects.map((project, index) => (
            <CardSlide 
              key={index} 
              project={project} 
              index={index} 
              progress={scrollYProgress}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout showContact={false}>
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/showcase/showcase_banner_1774171566836.png" 
            alt="Showcase Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl sm:text-8xl md:text-[12rem] font-black text-white mb-4 uppercase tracking-tighter italic leading-[0.8]">
              Studio
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Innovating at the intersection of material science and digital intelligence.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs font-bold uppercase tracking-widest flex flex-col items-center gap-3"
        >
          Scroll
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Stacking Projects Section */}
      <StackingProjects />

      {/* Closing CTA */}
      <section className="h-screen flex items-center justify-center bg-black text-white">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h3 className="text-4xl sm:text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter italic leading-none">
              Start your <br /> project
            </h3>
            <Link 
              to="/about"
              className="inline-flex items-center px-12 py-6 bg-white text-black rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              Contact Now <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
