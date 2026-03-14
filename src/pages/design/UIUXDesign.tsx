import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Mobile Banking App",
    description: "Intuitive financial management with seamless UX",
    image: "/lovable-uploads/761e2d9d-3a1c-458b-9848-dd1d7b42d1b9.png",
    category: "Fintech"
  },
  {
    title: "E-Learning Platform",
    description: "Engaging educational interface for online courses",
    image: "/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png",
    category: "Education"
  },
  {
    title: "Healthcare Dashboard",
    description: "Patient-centric medical data visualization",
    image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png",
    category: "Healthcare"
  },
  {
    title: "E-commerce Platform",
    description: "Conversion-optimized shopping experience",
    image: "/lovable-uploads/927dae7e-6aaf-4b76-add2-1287a1dd9dc0.png",
    category: "Retail"
  }
];

const UIUXDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-6">
            <Link 
              to="/projects/design" 
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Design Services
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Layers className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  UI UX Design
                </h1>
              </div>
              <p className="text-xl text-gray-300">
                User-centered design that creates intuitive and engaging digital experiences across all platforms
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
              <p className="text-xl text-gray-600">
                User-centric design solutions that drive engagement and conversion
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default UIUXDesign;