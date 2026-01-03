import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Heart, GraduationCap, ShoppingCart, Home, Plane, Sparkles, Scale, Gamepad } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const industries = [
  {
    icon: Building2,
    title: "Financial",
    tagline: "Secure fintech platforms and digital banking experiences",
    image: "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
    link: "/industries/financial",
    client: "Global Finance Corp",
    year: "2025",
    gallery: [
      "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png"
    ]
  },
  {
    icon: Heart,
    title: "Healthcare",
    tagline: "Patient-centered apps and medical dashboards",
    image: "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
    link: "/industries/healthcare",
    client: "MediCare Solutions",
    year: "2025",
    gallery: [
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png"
    ]
  },
  {
    icon: GraduationCap,
    title: "Education",
    tagline: "E-learning platforms and interactive course apps",
    image: "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
    link: "/industries/education",
    client: "EduTech Academy",
    year: "2025",
    gallery: [
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png"
    ]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    tagline: "Online stores and conversion-driven shopping apps",
    image: "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
    link: "/industries/ecommerce",
    client: "ShopHub International",
    year: "2025",
    gallery: [
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
      "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png"
    ]
  },
  {
    icon: Home,
    title: "Real Estate",
    tagline: "Property listing platforms and realtor management tools",
    image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
    link: "/industries/real-estate",
    client: "Prime Properties Group",
    year: "2025",
    gallery: [
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
      "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
      "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png"
    ]
  },
  {
    icon: Plane,
    title: "Travel",
    tagline: "Booking systems and travel experience apps",
    image: "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
    link: "/industries/travel",
    client: "Wanderlust Tours",
    year: "2025",
    gallery: [
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
      "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
      "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
      "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png"
    ]
  },
  {
    icon: Sparkles,
    title: "Lifestyle",
    tagline: "Wellness and lifestyle apps for modern living",
    image: "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
    link: "/industries/lifestyle",
    client: "Wellness Haven",
    year: "2025",
    gallery: [
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
      "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
      "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
      "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png"
    ]
  },
  {
    icon: Scale,
    title: "Law",
    tagline: "Professional legal firm websites and case management apps",
    image: "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
    link: "/industries/law",
    client: "Justice Partners LLP",
    year: "2025",
    gallery: [
      "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png",
      "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
      "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png"
    ]
  },
  {
    icon: Gamepad,
    title: "Game",
    tagline: "Immersive gaming platforms and interactive entertainment apps",
    image: "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
    link: "/industries/game",
    client: "GameVerse Studios",
    year: "2025",
    gallery: [
      "/lovable-uploads/4187f423-ba69-4043-be76-c43098488348.png",
      "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png"
    ]
  }
];

const CRMLegalService = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewCaseStudy = (e: React.MouseEvent, industry: typeof industries[0]) => {
    e.preventDefault();
    setSelectedIndustry(industry);
    setIsDialogOpen(true);
  };

  return (
    <PageLayout>
      <div className="pt-16">
        {/* Hero Video Banner */}
        <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/lovable-uploads/video_1751292840840_1751292842546.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white px-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                CRM Consultant
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                We craft modern, high-performing CRM systems for every industry
              </p>
              <a href="#showcase">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
                  View Our Work
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="showcase" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Specialized CRM expertise across multiple sectors
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <Link to={industry.link}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <industry.icon className="h-10 w-10 mb-2" />
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                    <p className="text-muted-foreground mb-4">{industry.tagline}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={(e) => handleViewCaseStudy(e, industry)}
                    >
                      View Case Study
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                Let's build something amazing together. Whether it's a CRM platform or custom solution, 
                we'll help bring your vision to life.
              </p>
              <a href="/#contact">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 shadow-xl hover:scale-105 transition-transform">
                  Get a Free Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Case Study Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                {selectedIndustry && <selectedIndustry.icon className="h-8 w-8" />}
                {selectedIndustry?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <div className="grid grid-cols-2 gap-6 mb-6 p-4 bg-muted/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Client</p>
                  <p className="font-semibold">{selectedIndustry?.client}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year Complete</p>
                  <p className="font-semibold">{selectedIndustry?.year}</p>
                </div>
              </div>
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedIndustry?.gallery.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${selectedIndustry.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center items-center gap-4 mt-4">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PageLayout>
  );
};

export default CRMLegalService;