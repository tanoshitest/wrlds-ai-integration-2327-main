import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Cog, Workflow, Gauge, Repeat, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import automationShowcase1 from '@/assets/automation-showcase-1.jpg';
import automationShowcase2 from '@/assets/automation-showcase-2.jpg';
import automationShowcase3 from '@/assets/automation-showcase-3.jpg';
import automationShowcase4 from '@/assets/automation-showcase-4.jpg';

const showcaseProjects = [
  { 
    src: automationShowcase1, 
    alt: "Automated manufacturing line",
    project: "Smart Factory Automation",
    client: "IndustrialTech Corp.",
    task: "Manufacturing line automation & IoT integration",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: automationShowcase2, 
    alt: "Quality control station",
    project: "Quality Control System",
    client: "PrecisionMfg Ltd.",
    task: "Automated testing & quality assurance",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: automationShowcase3, 
    alt: "Control room monitoring",
    project: "Production Monitoring Hub",
    client: "SmartOps Industries",
    task: "Real-time monitoring & predictive maintenance",
    year: "2023",
    prototypeUrl: "#"
  },
  { 
    src: automationShowcase4, 
    alt: "Conveyor belt system",
    project: "Conveyor Automation System",
    client: "LogiFlow Solutions",
    task: "Conveyor control & inventory integration",
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

const AutomationService = () => {
  return (
    <ProjectPageLayout
      title="Automation Solutions"
      subtitle="Streamline production and optimize operations"
      imageUrl="/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"
      brandName="Automation"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Smart Manufacturing & Process Automation</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Automation Excellence</h3>
        <p>
          We design and implement automated manufacturing solutions for smart textiles, 
          from sensor integration to quality control. Our automation systems increase 
          efficiency, reduce costs, and ensure consistent product quality.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Automation Services</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cog className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Manufacturing Automation</h4>
            <p>Automated production lines for smart textile integration.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Workflow className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Process Optimization</h4>
            <p>Streamlined workflows for maximum efficiency and output.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Gauge className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Quality Control</h4>
            <p>Automated testing and quality assurance systems.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Repeat className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Continuous Improvement</h4>
            <p>Data-driven insights for ongoing process enhancement.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Key Features</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Robotic sensor integration systems</li>
        <li>Automated testing and calibration</li>
        <li>Vision systems for quality inspection</li>
        <li>Production line monitoring and control</li>
        <li>Inventory management integration</li>
        <li>Predictive maintenance systems</li>
      </ul>
      
      <ProjectShowcaseCarousel />
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Increased Efficiency</h4>
            <p>Up to 60% reduction in production time with automated processes.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Quality Consistency</h4>
            <p>Automated quality control ensures uniform product standards.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Cost Reduction</h4>
            <p>Lower labor costs and reduced material waste.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Scalability</h4>
            <p>Easy to scale production capacity without proportional cost increases.</p>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default AutomationService;