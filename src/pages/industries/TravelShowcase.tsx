import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Travel Booking Platform",
    image: "/lovable-uploads/b862d5ae-6abb-44da-84f0-00a222f62906.png",
    description: "All-in-one travel booking system for flights, hotels, and activities"
  },
  {
    title: "Tour Guide App",
    image: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    description: "Interactive travel guides with AR navigation and local recommendations"
  },
  {
    title: "Hotel Management System",
    image: "/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png",
    description: "Complete hotel booking and management solution with reviews"
  },
  {
    title: "Trip Planning Platform",
    image: "/lovable-uploads/cbd073dd-ecad-4643-bf2b-efc3d5846994.png",
    description: "Collaborative trip planning with itinerary sharing and budgeting"
  }
];

const TravelShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16 pb-20">
        <section className="bg-gradient-to-br from-cyan-900 to-cyan-700 text-white py-16">
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
                <Plane className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Travel
                </h1>
              </div>
              <p className="text-xl text-cyan-100">
                Comprehensive travel booking systems with itinerary management and personalized recommendations
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
                Travel technology that makes exploring the world easier
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

        <section className="bg-cyan-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-cyan-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default TravelShowcase;
