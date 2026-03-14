import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Legal Case Management",
    image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
    description: "Comprehensive case tracking and document management for law firms"
  },
  {
    title: "Client Portal System",
    image: "/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png",
    description: "Secure client communication and document sharing platform"
  },
  {
    title: "Contract Automation",
    image: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    description: "Automated contract generation and e-signature integration"
  },
  {
    title: "Legal Research Platform",
    image: "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
    description: "AI-powered legal research and case law database"
  }
];

const LawShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16 pb-20">
        <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
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
                <Scale className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Law
                </h1>
              </div>
              <p className="text-xl text-slate-100">
                Professional legal platforms with case management, document automation, and client portals
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
                Legal technology solutions that streamline law firm operations
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

        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default LawShowcase;
