
import { motion } from "framer-motion";
import { useEffect } from "react";
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

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <section className="h-screen w-full sticky top-0 overflow-hidden flex items-center justify-center bg-white" style={{ zIndex: index + 1 }}>
      <motion.div 
        initial={{ y: "100vh" }}
        whileInView={{ y: 0 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full h-full sm:w-[94%] sm:h-[90%] bg-gray-900 sm:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group"
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
        <div className="absolute inset-0 z-10 p-8 sm:p-12 md:p-20 flex flex-col justify-end items-start text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">{project.title}</h3>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mb-10 font-light leading-relaxed">
              {project.description}
            </p>
            
            <Link 
              to={project.link}
              className="group/btn relative inline-flex items-center px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10">View Project</span>
              <ArrowRight className="absolute right-5 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 group-hover/btn:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Index Indicator */}
        <div className="absolute top-10 right-10 text-white/10 font-black text-6xl md:text-8xl italic pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      {/* Hero Banner - No sticky, just fixed height */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
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
            <span className="text-gray-400 font-bold uppercase tracking-[.4em] text-xs mb-8 block">Project Collection</span>
            <h1 className="text-7xl md:text-[12rem] font-black text-white mb-8 tracking-tighter uppercase leading-[0.8]">
              STUDIO
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              A decade of breakthroughs in smart textile engineering, 
              defining the future of human-data interaction.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 text-xs font-bold uppercase tracking-[.3em] flex flex-col items-center gap-4"
        >
          Scroll
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Main Stacking Section */}
      <div className="relative bg-white">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
          />
        ))}
      </div>

      {/* Closing CTA */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white z-50">
        <div className="container px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl md:text-8xl font-black mb-12 uppercase tracking-tighter leading-none italic">
              Let's build the <br /> future together
            </h3>
            <Link 
              to="/about"
              className="inline-flex items-center px-12 py-6 bg-white text-black rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              Get in Touch <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
