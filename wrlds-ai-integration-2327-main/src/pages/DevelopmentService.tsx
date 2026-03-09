import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Code, Lightbulb, Zap, CheckCircle } from 'lucide-react';


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
