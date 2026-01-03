import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Code, Lightbulb, Zap, CheckCircle, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import developmentShowcase1 from '@/assets/development-showcase-1.jpg';
import developmentShowcase2 from '@/assets/development-showcase-2.jpg';
import developmentShowcase3 from '@/assets/development-showcase-3.jpg';
import developmentShowcase4 from '@/assets/development-showcase-4.jpg';

const showcaseProjects = [
  { 
    src: developmentShowcase1, 
    alt: "Development workspace",
    project: "Smart Textile IoT Platform",
    client: "TechWear Inc.",
    task: "Full-stack development & IoT integration",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: developmentShowcase2, 
    alt: "Smart textile prototype",
    project: "Wearable Health Monitor",
    client: "HealthTech Solutions",
    task: "Hardware design & mobile app",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: developmentShowcase3, 
    alt: "Mobile application",
    project: "Fitness Tracking System",
    client: "SportLife Corp.",
    task: "Mobile & web application development",
    year: "2023",
    prototypeUrl: "#"
  },
  { 
    src: developmentShowcase4, 
    alt: "Team collaboration",
    project: "Enterprise Integration Suite",
    client: "Global Manufacturing Co.",
    task: "System integration & API development",
    year: "2023",
    prototypeUrl: "#"
  },
];

const ProjectShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const currentProject = showcaseProjects[currentIndex];

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Project Showcase</h3>
      <div className="relative">
        {/* Image Container with 16:9 aspect ratio */}
        <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-video">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentProject.src}
              alt={currentProject.alt}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Slide Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {showcaseProjects.length}
          </div>
        </div>

        {/* Project Info */}
        <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="space-y-3 text-left">
            <div className="flex">
              <span className="text-sm text-gray-500 w-20">Project</span>
              <span className="font-semibold text-gray-900">{currentProject.project}</span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 w-20">Client</span>
              <span className="font-semibold text-gray-900">{currentProject.client}</span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 w-20">Task</span>
              <span className="font-semibold text-gray-900">{currentProject.task}</span>
            </div>
            <div className="flex">
              <span className="text-sm text-gray-500 w-20">Year</span>
              <span className="font-semibold text-gray-900">{currentProject.year}</span>
            </div>
            <div className="pt-2">
              <a 
                href={currentProject.prototypeUrl}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                View Prototype
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DevelopmentService = () => {
  return (
    <ProjectPageLayout
      title="Development Services"
      subtitle="Custom smart textile solutions tailored to your needs"
      imageUrl="/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png"
      brandName="Development"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">End-to-End Development Solutions</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
        <p>
          We specialize in developing custom smart textile solutions from concept to production. 
          Our team combines expertise in hardware design, firmware development, and system integration 
          to create innovative products that meet your specific requirements.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Code className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Custom Development</h4>
            <p>Tailored solutions designed specifically for your use case and requirements.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Lightbulb className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Prototyping</h4>
            <p>Rapid prototyping to validate concepts and iterate quickly.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Zap className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">System Integration</h4>
            <p>Seamless integration with existing systems and workflows.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <CheckCircle className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Testing & Validation</h4>
            <p>Comprehensive testing to ensure reliability and performance.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Key Capabilities</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Hardware design and PCB layout</li>
        <li>Firmware development and optimization</li>
        <li>Sensor integration and calibration</li>
        <li>Mobile and web application development</li>
        <li>Cloud infrastructure setup</li>
        <li>AI/ML model development and deployment</li>
      </ul>
      
      <ProjectShowcaseCarousel />
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Expert Team</h4>
            <p>Experienced engineers with deep expertise in smart textiles and IoT.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Agile Process</h4>
            <p>Flexible development approach that adapts to changing requirements.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Quality Focus</h4>
            <p>Rigorous quality assurance and testing throughout the development cycle.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">End-to-End Support</h4>
            <p>From initial concept to production and beyond.</p>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default DevelopmentService;
