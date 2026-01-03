import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Layers, Cloud, Lock, TrendingUp, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const showcaseProjects = [
  { 
    src: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png", 
    alt: "Platform dashboard",
    project: "Cloud Management Platform",
    client: "CloudTech Solutions",
    task: "Platform architecture & dashboard development",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png", 
    alt: "IoT platform",
    project: "IoT Device Manager",
    client: "SmartConnect Inc.",
    task: "Real-time monitoring & device control",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png", 
    alt: "Analytics platform",
    project: "Analytics Dashboard",
    client: "DataViz Corp.",
    task: "Data visualization & reporting system",
    year: "2023",
    prototypeUrl: "#"
  },
  { 
    src: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png", 
    alt: "Enterprise platform",
    project: "Enterprise Resource Hub",
    client: "Global Manufacturing Co.",
    task: "Multi-tenant platform & API integration",
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

const PlatformService = () => {
  return (
    <ProjectPageLayout
      title="Platform Solutions"
      subtitle="Scalable infrastructure for smart textile applications"
      imageUrl="/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png"
      brandName="Platform"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">Comprehensive Platform Infrastructure</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Platform Overview</h3>
        <p>
          Our platform provides a complete infrastructure for managing smart textile devices, 
          collecting data, and delivering insights. Built on modern cloud technologies, 
          it scales seamlessly from pilot projects to enterprise deployments.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Platform Features</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Layers className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Device Management</h4>
            <p>Centralized control and monitoring of all connected devices.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cloud className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Cloud Infrastructure</h4>
            <p>Reliable, scalable cloud architecture for data processing and storage.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Lock className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Security & Privacy</h4>
            <p>Enterprise-grade security with GDPR compliance and encryption.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <TrendingUp className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Analytics Dashboard</h4>
            <p>Real-time visualization and insights from your data.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Core Capabilities</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Real-time data streaming and processing</li>
        <li>Device provisioning and lifecycle management</li>
        <li>API access for third-party integrations</li>
        <li>Advanced analytics and reporting</li>
        <li>Alert and notification system</li>
        <li>Multi-tenant architecture</li>
      </ul>
      
      <ProjectShowcaseCarousel />
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Scalability</h4>
            <p>Grows with your business from hundreds to millions of devices.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Reliability</h4>
            <p>99.9% uptime SLA with redundancy and failover capabilities.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Flexibility</h4>
            <p>Customizable to match your specific business requirements.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Cost-Effective</h4>
            <p>Pay-as-you-grow pricing model with no upfront infrastructure costs.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Hosting Wordpress Max Speed</h3>
        <p className="text-muted-foreground mb-6">Khám phá các gói hosting hiệu suất cao cho website của bạn</p>
        <Link to="/services/hosting-pricing">
          <Button size="lg" className="font-semibold">
            Xem bảng giá
          </Button>
        </Link>
      </div>
    </ProjectPageLayout>
  );
};

export default PlatformService;