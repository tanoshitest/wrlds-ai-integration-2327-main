import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Palette, Smartphone, Users, Sparkles } from 'lucide-react';


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