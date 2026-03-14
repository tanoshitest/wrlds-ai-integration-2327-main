import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Tech Startup Rebrand",
    description: "Complete brand identity system for innovative tech company",
    image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    category: "Technology"
  },
  {
    title: "Luxury Hotel Brand",
    description: "Premium hospitality brand with sophisticated identity",
    image: "/lovable-uploads/a1ef45a0-dde4-4b30-856f-8032dd58247e.png",
    category: "Hospitality"
  },
  {
    title: "Organic Food Brand",
    description: "Natural, sustainable brand identity for food products",
    image: "/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png",
    category: "Food & Beverage"
  },
  {
    title: "Fitness Studio Brand",
    description: "Energetic brand identity for wellness community",
    image: "/lovable-uploads/aa5291bd-2417-4c1e-9a02-0bcc71a92507.png",
    category: "Wellness"
  }
];

const BrandingIdentity = () => {
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
                <Sparkles className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Branding Identity
                </h1>
              </div>
              <p className="text-xl text-gray-300">
                Comprehensive brand identity systems that create memorable and consistent brand experiences
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
                Complete brand identity systems that tell your story
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

export default BrandingIdentity;