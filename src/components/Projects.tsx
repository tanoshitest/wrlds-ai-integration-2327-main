import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

const projects = [
  {
    id: 1,
    title: "P2P Platform Implementation",
    brand: "P2P Platform",
    description: "AI-driven sensor solution integrated into uniforms for law enforcement, military and firefighters, providing real-time vital monitoring and situational awareness in high-risk environments.",
    tags: ["Safety", "Military", "AI Sensors", "Real-time Monitoring"],
    imageUrl: "/lovable-uploads/93ab0638-8190-4ccf-897f-21fda7f4f5ad.png",
    isFeatured: true,
    link: "/projects/firecat",
    details: `
      FireCat Group aimed to enhance safety in high-risk environments. Tanoshi Vietnam Technologies provided the 6th SENSE solution with secure real-time data transmission, high-quality sensors resistant to extreme conditions, integrated AI-powered clothing, and a centralized control unit. Features include Man Down Alarm, GPS positioning, vital sign monitoring, and Panic Button. Benefits: life-saving technology, machine learning preventing false alarms, durable hardware with 7-10 year lifespan, washable sensors, and Plug & Play installation with 12-20 hours of operation per charge.
    `
  },
  {
    id: 2,
    title: "CRM for Legal, Travel, and Real Estate Management",
    brand: "CRM Solutions",
    description: "Smart Footwear R&D aiming to revolutionize development, fitting, and testing of athletic footwear.",
    tags: ["Sports", "R&D", "Footwear", "Athletic Performance"],
    imageUrl: "/lovable-uploads/b0622048-17b4-4c75-a3f0-6c9e17de1d09.png",
    link: "/projects/sport-retail"
  },
  {
    id: 3,
    title: "Betting Management System",
    brand: "Betting Solutions",
    description: "Fully integrated temperature controls for professionals working in extreme heat and cold. Modular approach to enable full-body systems.",
    tags: ["Climate Control", "Workwear", "Temperature Regulation", "Extreme Conditions"],
    imageUrl: "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png",
    link: "/projects/workwear"
  },
  {
    id: 4,
    title: "Content Automation Solutions",
    brand: "Content Automation",
    description: "R&D product evaluating data from single IMU embedded in the hockey shoe. Aim: establish motion patterns that lead to ultimate acceleration, speed, and maneuverability.",
    tags: ["Ice Hockey", "Motion Analysis", "Performance Tracking", "Sports"],
    imageUrl: "/lovable-uploads/c30e0487-2fa0-41d1-9a0b-699cb2855388.png",
    link: "/projects/hockey"
  },
  {
    id: 5,
    title: "ERP Consulting: Odoo & SAP",
    brand: "ERP Consulting",
    description: "R&D project embedding a step counter in a dog collar. Measures daily activity and sends real-time data to the cloud for veterinary consultancies.",
    tags: ["Pet Technology", "Insurance", "Activity Tracking", "R&D"],
    imageUrl: "/lovable-uploads/d5ce901e-2ce0-4f2a-bce1-f0ca5d6192df.png",
    link: "/projects/pet-tracker"
  },
  {
    id: 6,
    title: "Website & App Design Services",
    brand: "Design Services",
    description: "Professional website and mobile application design services for businesses of all sizes.",
    tags: ["Design", "Web Development", "Mobile Apps", "UI/UX"],
    imageUrl: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
    link: "/projects/pet-tracker"
  },
  {
    id: 7,
    title: "Server Solutions",
    brand: "Server Solutions",
    description: "Comprehensive server infrastructure and cloud solutions for scalable business applications.",
    tags: ["Cloud", "Infrastructure", "DevOps", "Security"],
    imageUrl: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
    link: "/projects/server-solutions"
  }
];

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedPosition, setPausedPosition] = useState<number>(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Duplicate projects for infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects];
  
  return (
    <section id="projects" ref={projectsRef} className="bg-white py-[50px] w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Customer Cases
          </div>
          <h2 className="text-3xl font-bold mb-3">
            From Textile to Intelligence
          </h2>
          <p className="text-gray-600">
            Explore how our textile sensor technology is revolutionizing multiple industries with intelligent fabric solutions tailored to specific needs.
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => {
            if (carouselRef.current) {
              const transform = window.getComputedStyle(carouselRef.current).transform;
              if (transform !== 'none') {
                const matrix = new DOMMatrix(transform);
                setPausedPosition(matrix.m41);
              }
            }
            setIsPaused(true);
          }} 
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={carouselRef}
            className={`flex gap-6 ${isPaused ? '' : 'animate-infinite-scroll'}`}
            style={{
              width: `${duplicatedProjects.length * (isMobile ? 300 : 400)}px`,
              transform: isPaused ? `translateX(${pausedPosition}px)` : undefined
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`} 
                className={`flex-shrink-0 ${isMobile ? 'w-[280px]' : 'w-[380px]'}`}
              >
                <Card className="overflow-hidden h-[500px] border border-gray-100 shadow-sm hover:shadow-md flex flex-col">
                  <div 
                    className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '192px'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.brand.toUpperCase()}</h3>
                      <div className="w-12 h-1 bg-white mb-2"></div>
                      <p className="text-white/90 text-sm">{project.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-gray-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">{project.brand}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs animate-pulse-slow" 
                            style={{ animationDelay: `${idx * 300}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={project.link} 
                        className="text-gray-500 flex items-center hover:underline relative overflow-hidden group"
                        onClick={() => {
                          if (project.link.startsWith('/')) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;