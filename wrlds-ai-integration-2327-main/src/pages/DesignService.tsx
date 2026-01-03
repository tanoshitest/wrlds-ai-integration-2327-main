import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Palette, Smartphone, Users, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import designShowcase1 from '@/assets/design-showcase-1.jpg';
import designShowcase2 from '@/assets/design-showcase-2.jpg';
import designShowcase3 from '@/assets/design-showcase-3.jpg';
import designShowcase4 from '@/assets/design-showcase-4.jpg';

const showcaseProjects = [
  { 
    src: designShowcase1, 
    alt: "Designer workspace",
    project: "Brand Identity System",
    client: "ModernBrand Co.",
    task: "Complete brand identity & design system",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: designShowcase2, 
    alt: "Mobile app mockups",
    project: "Mobile App UI/UX",
    client: "AppVenture Inc.",
    task: "iOS & Android app design",
    year: "2024",
    prototypeUrl: "#"
  },
  { 
    src: designShowcase3, 
    alt: "Team brainstorming",
    project: "E-commerce Platform",
    client: "ShopStyle Ltd.",
    task: "Web design & user experience",
    year: "2023",
    prototypeUrl: "#"
  },
  { 
    src: designShowcase4, 
    alt: "Brand identity materials",
    project: "Corporate Rebrand",
    client: "Enterprise Solutions",
    task: "Brand refresh & marketing collateral",
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

const DesignService = () => {
  return (
    <ProjectPageLayout
      title="Design Services"
      subtitle="Beautiful, intuitive interfaces for smart textile applications"
      imageUrl="/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png"
      brandName="Design"
      darkMode={true}
    >
      <h2 className="text-3xl font-bold mb-6">User-Centered Design Excellence</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Design Philosophy</h3>
        <p>
          We create intuitive, beautiful user experiences for smart textile applications. 
          Our design team combines aesthetic excellence with functional usability, 
          ensuring your users love interacting with your products.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Design Services</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Palette className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">UI/UX Design</h4>
            <p>Beautiful, intuitive interfaces that users love.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Smartphone className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Mobile App Design</h4>
            <p>Native iOS and Android application design.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">User Research</h4>
            <p>Data-driven insights to inform design decisions.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Sparkles className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Brand Identity</h4>
            <p>Cohesive visual identity across all touchpoints.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Design Capabilities</h3>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>User interface and experience design</li>
        <li>Information architecture and wireframing</li>
        <li>Interactive prototyping</li>
        <li>Design system development</li>
        <li>Usability testing and iteration</li>
        <li>Accessibility compliance (WCAG 2.1)</li>
      </ul>
      
      <ProjectShowcaseCarousel />
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">User Satisfaction</h4>
            <p>Intuitive designs that delight users and reduce support costs.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Brand Differentiation</h4>
            <p>Stand out with unique, memorable design.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Faster Development</h4>
            <p>Clear design specifications accelerate implementation.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Accessibility</h4>
            <p>Inclusive design ensures everyone can use your product.</p>
          </div>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default DesignService;