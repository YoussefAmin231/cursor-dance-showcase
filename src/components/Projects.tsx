
import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';

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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container">
        <SectionHeader
          subtitle="Portfolio"
          title="Recent Projects"
          description="A showcase of my recent work in mobile application development and UI/UX design."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-slide-in" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
