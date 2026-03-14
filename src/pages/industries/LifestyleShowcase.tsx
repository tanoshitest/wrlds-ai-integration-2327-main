import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const projects = [
  {
    title: "Fitness Tracking App",
    image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png",
    description: "Comprehensive fitness app with workout tracking and nutrition plans"
  },
  {
    title: "Social Lifestyle Platform",
    image: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
    description: "Community-driven lifestyle app for sharing experiences and tips"
  },
  {
    title: "Meditation & Wellness",
    image: "/lovable-uploads/e2f944f7-0d40-4c33-8ce1-30ef7cd3a4b0.png",
    description: "Mindfulness and meditation platform with guided sessions"
  },
  {
    title: "Recipe & Cooking App",
    image: "/lovable-uploads/e502f601-c519-43a8-86f5-5fa89ae50d2f.png",
    description: "Interactive cooking platform with video tutorials and meal planning"
  }
];

const LifestyleShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16 pb-20">
        <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-16">
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
                <Sparkles className="h-12 w-12 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Lifestyle
                </h1>
              </div>
              <p className="text-xl text-purple-100">
                Engaging lifestyle apps for wellness, fitness, and personal development with social features
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
                Lifestyle apps that inspire and motivate users to live better
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

        <section className="bg-purple-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <a 
              href="/#contact" 
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default LifestyleShowcase;
