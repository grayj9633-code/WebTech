import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockData } from '../mock';
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Palette, 
  Mail, 
  Phone, 
  ExternalLink,
  Menu,
  X,
  Code2,
  Zap,
  Users,
  Award
} from 'lucide-react';

const iconMap = {
  'globe': Globe,
  'smartphone': Smartphone,
  'shopping-cart': ShoppingCart,
  'palette': Palette
};

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0e17]/95 backdrop-blur-md border-b border-[#0ea5e9]/20' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="https://customer-assets.emergentagent.com/job_tech-glow-portfolio-1/artifacts/dr7k5w6p_9F40BA79-4030-422B-8E53-9382D85C0B61.png" 
                alt="WebTech Logo" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-[#0ea5e9] transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-[#0ea5e9] transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-[#0ea5e9] transition-colors">Projects</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-[#0ea5e9] transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-[#0ea5e9] transition-colors">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-300 hover:text-[#0ea5e9] transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-300 hover:text-[#0ea5e9] transition-colors py-2">Services</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-[#0ea5e9] transition-colors py-2">Projects</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-300 hover:text-[#0ea5e9] transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-[#0ea5e9] transition-colors py-2">Contact</button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <Badge className="bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/30 px-4 py-2 text-sm font-mono">
                <Zap className="inline-block w-4 h-4 mr-2" />
                Professional Web Development
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="glow-text">{mockData.hero.headline}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              {mockData.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-6 text-lg font-semibold rounded-lg"
                size="lg"
              >
                {mockData.hero.ctaButtons[0].text}
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9]/10 px-8 py-6 text-lg font-semibold rounded-lg"
                size="lg"
              >
                {mockData.hero.ctaButtons[1].text}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#0f1729]/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Services</h2>
            <p className="text-xl text-gray-400">Comprehensive solutions for your digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card 
                  key={service.id} 
                  className="bg-[#1a1f35]/80 border-[#0ea5e9]/20 hover:border-[#0ea5e9] hover:shadow-lg hover:shadow-[#0ea5e9]/20 transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-4 bg-[#0ea5e9]/10 rounded-lg group-hover:bg-[#0ea5e9]/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-[#0ea5e9]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Featured Projects</h2>
            <p className="text-xl text-gray-400">Recent work that showcases my expertise</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {mockData.projects.map((project) => (
              <Card 
                key={project.id} 
                className="bg-[#1a1f35]/80 border-[#0ea5e9]/20 hover:border-[#0ea5e9] overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#0ea5e9]/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f35] to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} className="bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0ea5e9] hover:text-[#06b6d4] font-semibold"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0f1729]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">{mockData.about.title}</h2>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center">
              {mockData.about.bio}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {mockData.about.stats.map((stat, index) => {
                const statIcons = [Code2, Zap, Users, Award];
                const StatIcon = statIcons[index];
                return (
                  <div key={index} className="text-center">
                    <div className="mb-3 flex justify-center">
                      <StatIcon className="w-8 h-8 text-[#0ea5e9]" />
                    </div>
                    <div className="text-4xl font-bold text-[#0ea5e9] mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">Get In Touch</h2>
              <p className="text-xl text-gray-400">{mockData.contact.availability}</p>
            </div>
            
            <Card className="bg-[#1a1f35]/80 border-[#0ea5e9]/20 p-8 md:p-12">
              <CardContent className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#0ea5e9]/10 rounded-lg">
                    <Mail className="w-6 h-6 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
                    <a href={`mailto:${mockData.contact.email}`} className="text-[#0ea5e9] hover:text-[#06b6d4] text-lg">
                      {mockData.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#0ea5e9]/10 rounded-lg">
                    <Phone className="w-6 h-6 text-[#0ea5e9]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
                    <a href={`tel:${mockData.contact.phone}`} className="text-[#0ea5e9] hover:text-[#06b6d4] text-lg">
                      {mockData.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-[#0ea5e9]/20">
                  <Button 
                    onClick={() => window.location.href = `mailto:${mockData.contact.email}`}
                    className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-6 text-lg font-semibold rounded-lg"
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e17] border-t border-[#0ea5e9]/20 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 mb-2">{mockData.footer.tagline}</p>
            <p className="text-gray-500 text-sm">{mockData.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;