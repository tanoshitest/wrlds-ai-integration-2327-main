
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Smart Fitness Revolution",
    description: "Advanced compression gear with integrated optical sensors for real-time biomechanical analysis and performance tracking.",
    image: "/showcase/project_fitness_1774171590479.png",
    category: "Sports Tech",
    link: "/projects/sport-retail"
  },
  {
    title: "Next-Gen Healthcare Vest",
    description: "Medical-grade textile solution for continuous cardiovascular monitoring, developed for remote patient care and clinical research.",
    image: "/showcase/project_healthcare_1774171605481.png",
    category: "Healthcare",
    link: "/projects/pet-tracker"
  },
  {
    title: "Connected Safety Armor",
    description: "Heavy-duty industrial workwear embedded with impact sensors and environmental hazard detection for high-risk work zones.",
    image: "/showcase/project_industrial_1774171619537.png",
    category: "Industrial Safety",
    link: "/projects/workwear"
  },
  {
    title: "Autonomous Comfort Interior",
    description: "Touch-sensitive smart upholstery for future mobility, enabling seamless interaction between passengers and vehicle systems.",
    image: "/showcase/project_automotive_interior_1774171638561.png",
    category: "Automotive",
    link: "/projects/design"
  },
  {
    title: "Haptic Precision Glove",
    description: "High-fidelity feedback systems for industrial robotics and VR teleoperation, bridging the gap between human touch and digital control.",
    image: "/showcase/project_haptic_glove_1774171655835.png",
    category: "Robotics",
    link: "/projects/firecat"
  }
];

const ProjectCard = ({ project, index, total }: { project: any; index: number; total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Calculate scaling and opacity for the "covered" effect
  // We want the card to stay sticky and slightly shrink as the next one comes over it.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + (index * 0.02)]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Keep card visible under next one

  return (
    <div 
      ref={containerRef}
      className="sticky top-24 mb-32 h-[80vh] flex items-center justify-center p-4 sm:p-8"
      style={{ zIndex: index + 1 }}
    >
      <motion.div 
        style={{ scale }}
        className="relative w-full max-w-6xl aspect-[16/9] bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row group"
      >
        <div className="w-full md:w-2/3 relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white border-l border-gray-100">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">{project.category}</span>
          <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-tight">{project.title}</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {project.description}
          </p>
          <Link 
            to={project.link}
            className="inline-flex items-center text-gray-900 font-bold hover:translate-x-2 transition-transform"
          >
            VIEW PROJECT <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/showcase/showcase_banner_1774171566836.png" 
            alt="Showcase Banner"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
              INNOVATION <br /> IN MOTION
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Explore our latest breakthroughs in smart textile engineering, 
              from performance athletics to mission-critical healthcare solutions.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-24 relative z-10">
        <div className="container px-4 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our portfolio represents the intersection of material science and digital technology, 
              defining the future of intelligent wearables.
            </p>
          </motion.div>
        </div>

        <div className="pb-32">
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
        <div className="container px-4 text-center pt-24 border-t border-gray-200">
          <h3 className="text-3xl font-bold mb-8 italic">Ready to transform your brand with smart textiles?</h3>
          <Link 
            to="/about"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
          >
            LET'S COLLABORATE <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Portfolio;
