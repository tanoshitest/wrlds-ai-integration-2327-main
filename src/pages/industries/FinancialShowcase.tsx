import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Digital Banking Platform",
    image: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
    description: "Modern banking interface with real-time transactions and financial analytics"
  },
  {
    title: "Investment Portfolio App",
    image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
    description: "Comprehensive investment tracking with market insights and automated reporting"
  },
  {
    title: "Payment Gateway Solution",
    image: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.png",
    description: "Secure payment processing platform with multi-currency support"
  },
  {
    title: "Crypto Trading Platform",
    image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
    description: "Advanced cryptocurrency exchange with real-time charts and trading tools"
  }
];

const FinancialShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
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
                <Building2 className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Financial & Banking
                </h1>
              </div>
              <p className="text-xl text-blue-100">
                Secure, intuitive financial platforms with advanced security features and seamless user experiences
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Showcase */}
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
                Explore our portfolio of financial and banking solutions
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

        {/* CTA Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default FinancialShowcase;
