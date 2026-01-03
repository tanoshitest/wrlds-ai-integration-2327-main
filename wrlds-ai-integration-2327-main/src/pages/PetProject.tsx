import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, Settings, BarChart3, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const industries = [
  {
    icon: Package,
    title: "Odoo Implementation",
    tagline: "Complete ERP solutions with Odoo for seamless business operations",
    image: "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
    link: "/services/platform",
    gallery: [
      "/lovable-uploads/078a129e-0f98-4d91-af61-873687db1a04.png",
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png"
    ]
  },
  {
    icon: Settings,
    title: "SAP Consulting",
    tagline: "Enterprise-grade SAP solutions and optimization services",
    image: "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
    link: "/services/platform",
    gallery: [
      "/lovable-uploads/11e92b89-ed02-453a-9888-56cd91807f2d.png",
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    tagline: "Data-driven insights and reporting systems for better decisions",
    image: "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
    link: "/services/platform",
    gallery: [
      "/lovable-uploads/14ea3fe0-19d6-425c-b95b-4117bc41f3ca.png",
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png"
    ]
  },
  {
    icon: Users,
    title: "Process Optimization",
    tagline: "Streamline workflows and maximize operational efficiency",
    image: "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
    link: "/services/platform",
    gallery: [
      "/lovable-uploads/1cd5a3da-7a58-4374-abc1-d7b02b0c5fd5.png",
      "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      "/lovable-uploads/39605e90-8478-4fee-b1b9-cee41df66f10.png",
      "/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png",
      "/lovable-uploads/3de85ddd-15e1-4216-9697-f91abb9a47ce.png"
    ]
  }
];

const PetProject = () => {
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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  ERP Consulting: Odoo & SAP
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your business operations with our expert ERP implementation and consulting services.
                </p>
                <a href="#showcase">
                  <Button size="lg" className="text-lg px-8 py-6">
                    View Our Work
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png"
                  >
                    <source src="/lovable-uploads/video_1751292840840_1751292842546.mp4" type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="showcase" className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive ERP consulting expertise for digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                Let's build something amazing together. Whether it's Odoo or SAP implementation, 
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
              <p className="text-muted-foreground mb-6">{selectedIndustry?.tagline}</p>
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

export default PetProject;
