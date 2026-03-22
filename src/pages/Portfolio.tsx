
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, ExternalLink } from "lucide-react";
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
    link: "/projects/lifestyle"
  },
  {
    title: "Bio-sensing Sleep Mask",
    description: "Luxury ergonomic design with embedded EEG and heart rate sensors for optimized recovery.",
    image: "/showcase/project_sleep_mask_1774172235170.png",
    category: "Health & Sleep",
    link: "/projects/lifestyle"
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

const ProjectCard = ({ project, index, total }: { project: any; index: number; total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Scale down earlier cards as later ones come over
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + (index * 0.01)]);
  
  return (
    <div 
      ref={containerRef}
      className="sticky top-20 mb-32 h-[85vh] flex items-center justify-center p-4"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        style={{ scale }}
        className="relative w-full max-w-6xl aspect-[16/9] bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group"
      >
        {/* Full Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Overlay Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end items-start text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">{project.title}</h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 font-light leading-relaxed">
              {project.description}
            </p>
            
            <Link 
              to={project.link}
              className="group/btn relative inline-flex items-center px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 ">View Project</span>
              <ArrowRight className="absolute right-5 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 group-hover/btn:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Index Indicator */}
        <div className="absolute top-10 right-10 text-white/20 font-black text-6xl italic pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      {/* Hero Banner */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/showcase/showcase_banner_1774171566836.png" 
            alt="Showcase Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic">
              Showcase
            </h1>
            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Redefining the boundaries of textile engineering through <span className="text-white font-medium">intelligent integration</span> and data-driven design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-32 relative z-10">
        <div className="container px-4 mb-32 text-left">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Selected Works
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-black text-gray-900 leading-none uppercase tracking-tighter"
              >
                Intelligent <br /> Solutions
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-500 max-w-sm font-medium"
            >
              A decade of breakthroughs distilled into ten revolutionary projects.
            </motion.p>
          </div>
        </div>

        <div className="pb-64 space-y-[-10vh]">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              total={projects.length} 
            />
          ))}
        </div>

        {/* Closing CTA */}
        <div className="container px-4 text-center pt-32 pb-24 border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">Ready for the next bold step?</h3>
            <Link 
              to="/about"
              className="inline-flex items-center px-12 py-6 bg-black text-white rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl hover:shadow-black/20"
            >
              WORK WITH US <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
