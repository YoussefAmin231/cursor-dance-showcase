
import React, { useRef } from 'react';
import SectionHeader from './SectionHeader';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export const projectsData = [
  {
    id: 'health-tracker',
    title: "HealthTracker App",
    description: "A comprehensive mobile application for tracking health and fitness goals with personalized insights.",
    tags: ["Flutter", "UI/UX", "Mobile", "Health"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'ecommerce-redesign',
    title: "E-Commerce UI Redesign",
    description: "Complete UI redesign for an e-commerce platform focusing on user experience and conversion optimization.",
    tags: ["UI/UX", "Figma", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'smart-home',
    title: "Smart Home Dashboard",
    description: "Intuitive dashboard interface for controlling connected home devices with emphasis on accessibility.",
    tags: ["Flutter", "IoT", "UI/UX"],
    image: "https://images.unsplash.com/photo-1558002038-1055907dcaac?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'travel-app',
    title: "Travel Companion App",
    description: "Mobile application for travelers to discover local experiences and manage their itineraries.",
    tags: ["Mobile", "Flutter", "Maps API"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'banking-app',
    title: "Banking App Interface",
    description: "Modern and secure mobile banking interface with focus on simplicity and ease of use.",
    tags: ["UI/UX", "Fintech", "Mobile"],
    image: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 'fitness-wearable',
    title: "Fitness Tracker Wearable UI",
    description: "Interface design for wearable fitness devices with compact information display and glanceable metrics.",
    tags: ["Wearable", "UI/UX", "Health"],
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=2076"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  return (
    <section 
      id="projects" 
      ref={ref} 
      className="py-20 relative"
    >
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-purple-50/50"
        style={{ opacity: backgroundOpacity }}
      />
      
      <div className="container">
        <SectionHeader
          subtitle="Portfolio"
          title="Recent Projects"
          description="A showcase of my recent work in mobile application development and UI/UX design."
        />
        
        <div className="flex flex-col gap-20 mt-16">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <Link to={`/project/${project.id}`} className="block">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Image section - switches sides based on index */}
                    <motion.div 
                      className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-xl shadow-black/5">
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Project image */}
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                    
                    {/* Content section */}
                    <div className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} ${isEven ? '' : 'lg:text-right'}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        
                        <p className="text-muted-foreground mb-5">{project.description}</p>
                        
                        <div className={`flex flex-wrap gap-2 ${isEven ? '' : 'lg:justify-end'}`}>
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="chip text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
