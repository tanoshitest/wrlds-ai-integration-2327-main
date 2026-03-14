import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Property Listing Platform",
    image: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png",
    description: "Comprehensive real estate marketplace with advanced search and filters"
  },
  {
    title: "Virtual Property Tours",
    image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png",
    description: "360° virtual tours and 3D property visualization platform"
  },
  {
    title: "Real Estate CRM",
    image: "/lovable-uploads/af5ee2ce-3942-48bb-a2ad-3b49b419daf9.png",
    description: "Lead management and client relationship system for agents"
  },
  {
    title: "Property Management App",
    image: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
    description: "Tenant and property management with maintenance tracking"
  }
];

const RealEstateShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16 pb-20">
        <section className="bg-gradient-to-br from-amber-900 to-amber-700 text-white py-16">
          <div className="container mx-auto px-6">
            <Link to="/projects/web-design" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="flex items-center mb-6">
                <Home className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Real Estate
                </h1>
              </div>
              <p className="text-xl text-amber-100">
                Property listing platforms with virtual tours, advanced search, and CRM integration
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-center">Our Projects</h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Real estate solutions that connect buyers, sellers, and agents
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RealEstateShowcase;
