import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Layers, Cloud, Lock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


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

    </ProjectPageLayout>
  );
};

export default PlatformService;