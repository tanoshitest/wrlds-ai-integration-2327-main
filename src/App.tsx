import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import DevelopmentService from "./pages/DevelopmentService";
import PlatformService from "./pages/PlatformService";
import AutomationService from "./pages/AutomationService";
import DesignService from "./pages/DesignService";
import DesignProject from "./pages/DesignProject";
import WebDesignService from "./pages/WebDesignService";
import FinancialShowcase from "./pages/industries/FinancialShowcase";
import HealthcareShowcase from "./pages/industries/HealthcareShowcase";
import EducationShowcase from "./pages/industries/EducationShowcase";
import EcommerceShowcase from "./pages/industries/EcommerceShowcase";
import RealEstateShowcase from "./pages/industries/RealEstateShowcase";
import TravelShowcase from "./pages/industries/TravelShowcase";
import LifestyleShowcase from "./pages/industries/LifestyleShowcase";
import LawShowcase from "./pages/industries/LawShowcase";
import IndustrialDesign from "./pages/design/IndustrialDesign";
import GraphicDesign from "./pages/design/GraphicDesign";
import UIUXDesign from "./pages/design/UIUXDesign";
import BrandingIdentity from "./pages/design/BrandingIdentity";
import CRMLegalService from "./pages/CRMLegalService";
import LegalCRM from "./pages/crm/LegalCRM";
import TravelCRM from "./pages/crm/TravelCRM";
import RealEstateCRM from "./pages/crm/RealEstateCRM";
import ServerSolutionService from "./pages/ServerSolutionService";
import HostingPricing from "./pages/HostingPricing";
import HostingCheckout from "./pages/HostingCheckout";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/firecat" element={<FireCatProject />} />
            <Route path="/projects/sport-retail" element={<SportRetailProject />} />
            <Route path="/projects/workwear" element={<WorkwearProject />} />
            <Route path="/projects/hockey" element={<HockeyProject />} />
            <Route path="/projects/pet-tracker" element={<PetProject />} />
            <Route path="/projects/design" element={<DesignProject />} />
            <Route path="/projects/web-design" element={<WebDesignService />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
            <Route path="/services/development" element={<DevelopmentService />} />
            <Route path="/services/platform" element={<PlatformService />} />
            <Route path="/services/automation" element={<AutomationService />} />
            <Route path="/services/design" element={<DesignService />} />
            <Route path="/industries/financial" element={<FinancialShowcase />} />
            <Route path="/industries/healthcare" element={<HealthcareShowcase />} />
            <Route path="/industries/education" element={<EducationShowcase />} />
            <Route path="/industries/ecommerce" element={<EcommerceShowcase />} />
            <Route path="/industries/real-estate" element={<RealEstateShowcase />} />
            <Route path="/industries/travel" element={<TravelShowcase />} />
            <Route path="/industries/lifestyle" element={<LifestyleShowcase />} />
            <Route path="/industries/law" element={<LawShowcase />} />
            <Route path="/design/industrial" element={<IndustrialDesign />} />
            <Route path="/design/graphic" element={<GraphicDesign />} />
            <Route path="/design/uiux" element={<UIUXDesign />} />
            <Route path="/design/branding" element={<BrandingIdentity />} />
            <Route path="/projects/crm-legal" element={<CRMLegalService />} />
            <Route path="/crm/legal" element={<LegalCRM />} />
            <Route path="/crm/travel" element={<TravelCRM />} />
            <Route path="/crm/real-estate" element={<RealEstateCRM />} />
            <Route path="/projects/server-solutions" element={<ServerSolutionService />} />
            <Route path="/services/hosting-pricing" element={<HostingPricing />} />
            <Route path="/services/hosting-checkout" element={<HostingCheckout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
