import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Palette, Layers, Monitor, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

const designCategories = [
  {
    icon: Monitor,
    title: "Industrial Design",
    description: "Product design solutions that blend functionality with aesthetics for manufacturing and industrial applications.",
    image: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
    features: ["Product Prototyping", "3D Modeling", "Material Selection"]
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Visual communication through creative graphic design, from marketing materials to digital assets.",
    image: "/lovable-uploads/48e540e5-6a25-44e4-b3f7-80f3bfc2777a.png",
    features: ["Brand Collateral", "Marketing Materials", "Print Design"]
  },
  {
    icon: Layers,
    title: "UI UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences across all platforms.",
    image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
    features: ["User Research", "Wireframing", "Interactive Prototypes"]
  },
  {
    icon: Sparkles,
    title: "Branding Identity",
    description: "Comprehensive brand identity systems that create memorable and consistent brand experiences.",
    image: "/lovable-uploads/5262afdb-dd24-4d5e-be66-7c6717adbca9.png",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
  }
];

const DesignProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Design Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional design solutions across multiple disciplines. We create stunning, 
                functional designs that elevate your brand and drive results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Design Categories Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Expertise</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive design services tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {designCategories.map((category, index) => {
                const categoryLinks: { [key: string]: string } = {
                  "Industrial Design": "/design/industrial",
                  "Graphic Design": "/design/graphic",
                  "UI UX Design": "/design/uiux",
                  "Branding Identity": "/design/branding"
                };
                
                return (
                  <Link 
                    key={index}
                    to={categoryLinks[category.title]}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                    >
                      {/* Category Image Showcase */}
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={`${category.title} showcase`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                          <div className="flex items-center text-white">
                            <category.icon className="h-8 w-8 mr-3" />
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Category Content */}
                      <div className="p-6">
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {category.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Brand?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can create a custom design solution for your business
              </p>
              <a 
                href="/#contact" 
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default DesignProject;
