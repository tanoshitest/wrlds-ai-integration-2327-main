
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setOpenMobileDropdown(openMobileDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn("text-xl font-bold", isScrolled ? "text-gray-900" : "text-white")}>
                Tanoshi Vietnam
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Our Capacity
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/services/development" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development</div>
                          <p className="text-sm text-gray-500">Custom smart textile solutions</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/platform" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Platform</div>
                          <p className="text-sm text-gray-500">Scalable infrastructure for your applications</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/automation" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Automation</div>
                          <p className="text-sm text-gray-500">Streamline production and operations</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/design" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Design</div>
                          <p className="text-sm text-gray-500">Beautiful, intuitive user experiences</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Customer Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/projects/crm-legal" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">CRM Consultant</div>
                          <p className="text-sm text-gray-500">CRM solutions for legal professionals</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/workwear" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Software development</div>
                          <p className="text-sm text-gray-500">Temperature regulation for extreme environments</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/pet-tracker" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">ERP Consulting: Odoo & SAP</div>
                          <p className="text-sm text-gray-500">Smart collars for pet activity monitoring</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/web-design" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Website & App Design Services</div>
                          <p className="text-sm text-gray-500">Professional design services</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/design" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Design</div>
                          <p className="text-sm text-gray-500">Creative design solutions</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/idea-to-mvp" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Idea to MVP</div>
                          <p className="text-sm text-gray-500">Transform your idea into reality</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/grow-business" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Grow with the Business</div>
                          <p className="text-sm text-gray-500">Scale and expand your operations</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Our Frameworks</div>
                          <p className="text-sm text-gray-500">How our smart textile platform works</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Development Process</div>
                          <p className="text-sm text-gray-500">Our approach to creating custom solutions</p>
                        </Link>
                      </li>
                      <li>
                        
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => setIsLoginOpen(true)} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white text-gray-900 hover:bg-gray-100")}>
                    Đăng nhập
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Our Capacity Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('capacity')}
              className={cn("w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              Our Capacity
              <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === 'capacity' ? "rotate-180" : "")} />
            </button>
            {openMobileDropdown === 'capacity' && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/services/development" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Development
                </Link>
                <Link to="/services/platform" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Platform
                </Link>
                <Link to="/services/automation" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Automation
                </Link>
                <Link to="/services/design" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Design
                </Link>
              </div>
            )}
          </div>
          
          {/* Customer Cases Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('cases')}
              className={cn("w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              Customer Cases
              <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === 'cases' ? "rotate-180" : "")} />
            </button>
            {openMobileDropdown === 'cases' && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/projects/crm-legal" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  CRM Consultant
                </Link>
                <Link to="/projects/workwear" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Software development
                </Link>
                <Link to="/projects/pet-tracker" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  ERP Consulting: Odoo & SAP
                </Link>
                <Link to="/projects/web-design" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Website & App Design Services
                </Link>
                <Link to="/projects/design" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Design
                </Link>
                <Link to="/projects/idea-to-mvp" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Idea to MVP
                </Link>
                <Link to="/projects/grow-business" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Grow with the Business
                </Link>
              </div>
            )}
          </div>
          
          {/* Learn More Dropdown */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('learn')}
              className={cn("w-full flex items-center justify-between px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}
            >
              Learn More
              <ChevronDown className={cn("w-4 h-4 transition-transform", openMobileDropdown === 'learn' ? "rotate-180" : "")} />
            </button>
            {openMobileDropdown === 'learn' && (
              <div className="pl-4 mt-1 space-y-1">
                <Link to="/tech-details" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Our Frameworks
                </Link>
                <Link to="/development-process" className={cn("block px-3 py-1.5 rounded-md text-xs", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                  Development Process
                </Link>
              </div>
            )}
          </div>
          
          <Link to="/blog" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            News
          </Link>
          
          <Link to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}>
            Contact Us
          </button>
          
          <button onClick={() => {
            setIsLoginOpen(true);
            setIsMenuOpen(false);
          }} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-white bg-gray-900 hover:bg-gray-800" : "text-gray-900 bg-white hover:bg-gray-100")}>
            Đăng nhập
          </button>
        </div>
      </div>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Đăng nhập</DialogTitle>
            <DialogDescription>
              Nhập thông tin tài khoản của bạn để đăng nhập
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="username">Email hoặc Tên đăng nhập</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="Nhập email hoặc tên đăng nhập"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Nhập mật khẩu"
                className="w-full"
              />
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Quên mật khẩu?
              </button>
            </div>
            <Button type="submit" className="w-full">
              Đăng nhập
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </motion.nav>
  );
};

export default Navbar;
