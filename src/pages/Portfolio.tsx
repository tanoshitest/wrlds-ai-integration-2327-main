
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

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  return (
    <section className="h-screen w-full sticky top-0 flex items-center justify-center bg-white z-[10]">
      <div 
        className="relative w-full h-full sm:w-[94%] sm:h-[90%] bg-gray-900 sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="absolute inset-0 z-10 p-8 sm:p-20 flex flex-col justify-end items-start text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/20">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-6xl font-black mb-4 uppercase leading-none">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-300 max-w-lg mb-8 font-light">
              {project.description}
            </p>
            
            <Link 
              to={project.link}
              className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors"
            >
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute top-8 right-8 text-white/10 font-black text-6xl italic pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/showcase/showcase_banner_1774171566836.png" 
            alt="Showcase Banner"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-black text-white mb-6 uppercase leading-none">
              STUDIO
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Innovating at the intersection of material science and digital intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-white">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
          />
        ))}
      </div>

      <section className="h-screen flex items-center justify-center bg-black text-white">
        <div className="container px-4 text-center">
          <h3 className="text-4xl md:text-7xl font-black mb-10 uppercase italic">
            Let's build <br /> together
          </h3>
          <Link 
            to="/about"
            className="inline-flex items-center px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
