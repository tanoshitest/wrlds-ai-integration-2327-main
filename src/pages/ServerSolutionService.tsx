import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Cloud, Lock, Database, Cpu, Network, Shield, Activity } from 'lucide-react';
import { useEffect } from 'react';

const solutions = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable cloud solutions on AWS, Azure, and Google Cloud with automated deployment and management.",
    image: "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
    features: ["Multi-Cloud Support", "Auto Scaling", "Cost Optimization"]
  },
  {
    icon: Database,
    title: "Database Management",
    description: "High-performance database solutions with replication, backup strategies, and disaster recovery.",
    image: "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
    features: ["Database Clustering", "Automated Backups", "Performance Tuning"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security with firewall management, intrusion detection, and compliance monitoring.",
    image: "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
    features: ["Security Audits", "Compliance Reporting", "Threat Detection"]
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Robust networking infrastructure with load balancing, CDN integration, and DNS management.",
    image: "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
    features: ["Load Balancing", "CDN Integration", "Network Monitoring"]
  },
  {
    icon: Cpu,
    title: "Container Orchestration",
    description: "Kubernetes and Docker solutions for containerized applications with automated scaling.",
    image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
    features: ["Kubernetes Management", "Container Registry", "CI/CD Pipeline"]
  },
  {
    icon: Activity,
    title: "Monitoring & Logging",
    description: "Comprehensive monitoring solutions with real-time alerts and centralized logging systems.",
    image: "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
    features: ["Real-time Monitoring", "Log Aggregation", "Alert Management"]
  },
  {
    icon: Server,
    title: "Virtualization",
    description: "Virtual machine management and infrastructure as code with automated provisioning.",
    image: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
    features: ["VM Management", "Infrastructure as Code", "Resource Optimization"]
  },
  {
    icon: Lock,
    title: "Backup & Recovery",
    description: "Reliable backup solutions with disaster recovery planning and business continuity strategies.",
    image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
    features: ["Automated Backups", "Disaster Recovery", "Data Encryption"]
  }
];

const ServerSolutionService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Server & Infrastructure Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Scalable infrastructure for smart textile applications
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Platform Overview</h3>
                <p className="text-gray-700">
                  Our platform provides a complete infrastructure for managing smart textile devices, 
                  collecting data, and delivering insights. Built on modern cloud technologies, 
                  it scales seamlessly from pilot projects to enterprise deployments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Server Solutions</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Enterprise-grade infrastructure solutions with proven reliability and performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {solutions.map((solution, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Solution Image Showcase */}
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={`${solution.title} showcase`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div className="flex items-center text-white">
                          <solution.icon className="h-8 w-8 mr-3" />
                          <h3 className="text-2xl font-bold">{solution.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Solution Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="w-2 h-2 bg-gray-900 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
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
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can build a reliable server solution for your business
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

export default ServerSolutionService;
