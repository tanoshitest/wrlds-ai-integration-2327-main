import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Cog, Workflow, Gauge, Repeat } from 'lucide-react';


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