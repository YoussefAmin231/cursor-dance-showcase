
import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "HealthTracker App",
    description: "A comprehensive mobile application for tracking health and fitness goals with personalized insights.",
    tags: ["Flutter", "UI/UX", "Mobile", "Health"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "E-Commerce UI Redesign",
    description: "Complete UI redesign for an e-commerce platform focusing on user experience and conversion optimization.",
    tags: ["UI/UX", "Figma", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Smart Home Dashboard",
    description: "Intuitive dashboard interface for controlling connected home devices with emphasis on accessibility.",
    tags: ["Flutter", "IoT", "UI/UX"],
    image: "https://images.unsplash.com/photo-1558002038-1055907dcaac?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Travel Companion App",
    description: "Mobile application for travelers to discover local experiences and manage their itineraries.",
    tags: ["Mobile", "Flutter", "Maps API"],
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Banking App Interface",
    description: "Modern and secure mobile banking interface with focus on simplicity and ease of use.",
    tags: ["UI/UX", "Fintech", "Mobile"],
    image: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Fitness Tracker Wearable UI",
    description: "Interface design for wearable fitness devices with compact information display and glanceable metrics.",
    tags: ["Wearable", "UI/UX", "Health"],
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=2076"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-secondary/10">
      <div className="container">
        <SectionHeader
          subtitle="Portfolio"
          title="Recent Projects"
          description="A showcase of my recent work in mobile application development and UI/UX design."
        />
        
        <div className="flex flex-col gap-16 mt-12">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative w-full overflow-hidden group ${index % 2 === 0 ? '' : 'md:ml-auto'}`}
            >
              <div className="w-full relative mb-6 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              <div className={`max-w-2xl ${index % 2 === 0 ? '' : 'md:ml-auto text-right'}`}>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
