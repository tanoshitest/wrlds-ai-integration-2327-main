import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Lead Management System",
    description: "Comprehensive lead tracking and nurturing platform",
    image: "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
    category: "Lead Management"
  },
  {
    title: "Property Listing Management",
    description: "Complete property portfolio and listing management",
    image: "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
    category: "Property Management"
  },
  {
    title: "Transaction Tracking",
    description: "End-to-end transaction and deal pipeline management",
    image: "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
    category: "Transaction Management"
  },
  {
    title: "Client Portal & Communication",
    description: "Secure client portal with property updates and messaging",
    image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
    category: "Client Relations"
  }
];

const RealEstateCRM = () => {
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
              to="/projects/crm-legal" 
              className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to CRM Solutions
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <Home className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Real Estate CRM Solutions
                </h1>
              </div>
              <p className="text-xl text-gray-300">
                Real estate CRM platforms with property listings, lead management, and transaction tracking
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-xl text-gray-600">
                Specialized CRM systems built for real estate professionals
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

export default RealEstateCRM;