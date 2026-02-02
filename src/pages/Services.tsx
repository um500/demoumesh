import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, TrendingUp, Search, Palette, Video, Settings, Shield } from 'lucide-react';

// Import service images
import serviceWeb from '@/assets/images/service-web.jpg';
import serviceMarketing from '@/assets/images/service-marketing.jpg';
import serviceSupport from '@/assets/images/service-support.jpg';

/* ===================================
   Services Data
=================================== */
const services = [
  {
    id: 1,
    title: 'Web & App Development',
    subtitle: 'High-performance digital solutions',
    description: 'Websites, landing pages, e-commerce platforms, custom web apps, and mobile applications built using modern technologies.',
    image: serviceWeb,
    icon: Globe,
  },
  {
    id: 2,
    title: 'Digital Marketing & Lead Generation',
    subtitle: 'Reach the right audience',
    description: 'Meta ads, Google ads, lead funnels, email marketing, and WhatsApp automation to generate quality leads.',
    image: serviceMarketing,
    icon: TrendingUp,
  },
  {
    id: 3,
    title: 'SEO & Online Visibility',
    subtitle: 'Rank higher, grow faster',
    description: 'On-page SEO, technical SEO, local SEO, keyword research, and monthly performance reports.',
    image: serviceWeb,
    icon: Search,
  },
  {
    id: 4,
    title: 'Branding & Creative Services',
    subtitle: 'Build a strong brand identity',
    description: 'Logo design, brand identity, social media creatives, brochures, and ad creatives.',
    image: serviceMarketing,
    icon: Palette,
  },
  {
    id: 5,
    title: 'Video Production & AI Content',
    subtitle: 'Engaging visual storytelling',
    description: 'Promotional videos, reels, AI avatar videos, real estate walkthroughs, and event promos.',
    image: serviceSupport,
    icon: Video,
  },
  {
    id: 6,
    title: 'IT Support & Business Automation',
    subtitle: 'Reliable IT management',
    description: 'Website maintenance, hosting, CRM setup, automation solutions, and cloud services.',
    image: serviceSupport,
    icon: Settings,
  },
  {
    id: 7,
    title: 'CCTV & Smart Security Solutions',
    subtitle: 'Secure your business',
    description: 'Professional CCTV installation, surveillance systems, monitoring, and smart security solutions.',
    image: serviceSupport,
    icon: Shield,
  },
];

/* ===================================
   Animation Variants
=================================== */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ===================================
   Services Page Component
=================================== */
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(192 25% 18%)' }}>
      
      {/* ===================================
          Hero Section
      =================================== */}
      <section 
        className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, hsl(192 30% 15%) 0%, hsl(192 25% 20%) 50%, hsl(192 20% 22%) 100%)' 
        }}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(192 20% 25% / 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(192 20% 25% / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: 'hsl(25 85% 55%)' }}
        />
        <div 
          className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: 'hsl(175 50% 45%)' }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ 
                background: 'hsl(25 85% 55% / 0.15)',
                color: 'hsl(25 85% 60%)',
                border: '1px solid hsl(25 85% 55% / 0.3)'
              }}
            >
              What We Offer
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: 'hsl(180 10% 95%)' }}
            >
              Our{' '}
              <span 
                style={{ 
                  background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(35 90% 60%) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Services
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: 'hsl(180 10% 70%)' }}
            >
              Complete IT Solutions to Grow Your Business
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          Services Intro Section
      =================================== */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: 'hsl(180 10% 70%)' }}
            >
              At Equatorial IT Services, we provide comprehensive technology solutions designed to help 
              businesses thrive in the digital age. From cutting-edge web development to strategic 
              digital marketing, our expert team delivers results that drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================
          Services Cards Section
      =================================== */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ 
                  background: 'hsl(192 30% 22%)',
                  border: '1px solid hsl(192 20% 30%)',
                  boxShadow: '0 4px 20px hsl(192 30% 10% / 0.3)'
                }}
                whileHover={{
                  boxShadow: '0 20px 40px hsl(192 30% 10% / 0.5), 0 0 30px hsl(25 85% 55% / 0.15)'
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ 
                      background: 'linear-gradient(to top, hsl(192 30% 15%) 0%, transparent 100%)',
                      opacity: 0.8
                    }}
                  />
                  {/* Icon Badge */}
                  <div 
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 50%) 100%)',
                    }}
                  >
                    <service.icon size={24} className="text-white" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Service Heading */}
                  <h3 
                    className="font-display text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary"
                    style={{ color: 'hsl(180 10% 95%)' }}
                  >
                    {service.title}
                  </h3>
                  
                  {/* Service Sub-heading */}
                  <p 
                    className="text-sm font-medium mb-4"
                    style={{ color: 'hsl(25 85% 60%)' }}
                  >
                    {service.subtitle}
                  </p>
                  
                  {/* Service Description */}
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: 'hsl(180 10% 65%)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================================
          Call To Action Section
      =================================== */}
      <section 
        className="py-16 md:py-24"
        style={{ 
          background: 'linear-gradient(135deg, hsl(192 30% 15%) 0%, hsl(192 25% 18%) 100%)'
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div 
              className="inline-block p-8 md:p-12 rounded-2xl"
              style={{ 
                background: 'hsl(192 30% 20%)',
                border: '1px solid hsl(192 20% 28%)',
                boxShadow: '0 20px 50px hsl(192 30% 10% / 0.4)'
              }}
            >
              <h2 
                className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: 'hsl(180 10% 95%)' }}
              >
                Looking for the right service for your business?
              </h2>
              
              <p 
                className="text-base md:text-lg mb-8"
                style={{ color: 'hsl(180 10% 65%)' }}
              >
                Let's discuss your project and find the perfect solution for your needs.
              </p>
              
              <Link
                to="/#contact"
                className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-1"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(25 85% 55%) 0%, hsl(20 80% 50%) 100%)',
                  boxShadow: '0 4px 20px hsl(25 85% 55% / 0.4)'
                }}
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
