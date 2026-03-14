import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Smart Home Device",
    description: "Ergonomic IoT device design with modern aesthetics",
    image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
    category: "Consumer Electronics"
  },
  {
    title: "Industrial Equipment",
    description: "Heavy-duty machinery with user-centric controls",
    image: "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png",
    category: "Manufacturing"
  },
  {
    title: "Medical Device",
    description: "Healthcare equipment with precision engineering",
    image: "/lovable-uploads/5ca619e6-2139-4879-9b3c-94777ab85e2a.png",
    category: "Healthcare"
  },
  {
    title: "Automotive Component",
    description: "Innovative automotive interior design solutions",
    image: "/lovable-uploads/6739bd63-bf19-4abd-bb23-0b613bbf7ac8.png",
    category: "Automotive"
  }
];

const IndustrialDesign = () => {
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
                <Monitor className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Industrial Design
                </h1>
              </div>
              <p className="text-xl text-gray-300">
                Product design solutions that blend functionality with aesthetics for manufacturing and industrial applications
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
                Innovative industrial design solutions across multiple sectors
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

export default IndustrialDesign;