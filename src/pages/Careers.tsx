import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';

const jobPositions = [
  {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Stockholm, Sweden / Remote",
    type: "Full-time",
    description: "Lead development of our smart textile platform, working with React, Node.js, and IoT technologies."
  },
  {
    title: "Textile Engineer",
    department: "R&D",
    location: "Stockholm, Sweden",
    type: "Full-time",
    description: "Design and develop innovative textile sensor solutions for various industry applications."
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Stockholm, Sweden / Hybrid",
    type: "Full-time",
    description: "Drive product strategy and roadmap for our smart textile solutions across multiple industries."
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time / Part-time",
    description: "Create intuitive interfaces for our web and mobile applications, focusing on user experience."
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Stockholm, Sweden / Remote",
    type: "Full-time",
    description: "Develop and execute marketing strategies to promote our smart textile technology solutions."
  }
];

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  We're looking for passionate innovators to help us revolutionize the smart textile industry.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  We welcome both full-time professionals and interns who are eager to contribute to groundbreaking technology.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Join Tanoshi Vietnam?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Innovation",
                        description: "Work on cutting-edge technology that's changing multiple industries."
                      },
                      {
                        title: "Impact",
                        description: "Create solutions that enhance safety, performance, and quality of life."
                      },
                      {
                        title: "Growth",
                        description: "Develop your skills in a rapidly expanding field with diverse challenges."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Open Positions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
                  <div className="space-y-6">
                    {jobPositions.map((job, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              <Briefcase className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                    {job.department}
                                  </span>
                                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                    {job.type}
                                  </span>
                                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                                    {job.location}
                                  </span>
                                </div>
                                <p className="text-gray-600">{job.description}</p>
                              </div>
                            </div>
                          </div>
                          <a
                            href="/#contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                          >
                            Ứng tuyển
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;
