
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '@/components/Projects';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === projectId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If project not found, redirect to home
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container max-w-5xl">
        <Button 
          variant="ghost" 
          className="mb-8 group"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-8">
            {/* Hero section */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="chip bg-white/20 border-white/30 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Project info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Calendar className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="font-medium">June 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">Health & Wellness Inc.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="text-primary" size={20} />
                <div>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <p className="font-medium">{project.tags[0]}</p>
                </div>
              </div>
            </div>
            
            {/* Project overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                <div className="prose max-w-none space-y-4">
                  <p>
                    This case study explores the design and development process of the {project.title}. 
                    The project aimed to solve key challenges in the {project.tags[0].toLowerCase()} industry 
                    through innovative design and technology solutions.
                  </p>
                  
                  <p>
                    Working closely with stakeholders, we identified core user needs and translated them into 
                    an intuitive interface that balances functionality with simplicity, resulting in a 40% 
                    improvement in user engagement metrics.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-8 mb-2">The Challenge</h3>
                  <p>
                    The main challenge was creating an interface that could present complex data in an accessible way 
                    while maintaining a clean, uncluttered design. Users needed to quickly understand their key metrics 
                    without feeling overwhelmed by information.
                  </p>
                  
                  <h3 className="text-xl font-medium mt-8 mb-2">The Solution</h3>
                  <p>
                    We implemented a modular dashboard with customizable widgets, allowing users to prioritize the information 
                    most relevant to them. The interface uses visual hierarchy and intuitive navigation patterns to guide users 
                    through complex workflows with minimal friction.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070" 
                        alt="Design process"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=2070" 
                        alt="User testing"
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium mt-8 mb-2">Results & Impact</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>40% increase in daily active users within first 3 months</li>
                    <li>85% of users reported higher satisfaction compared to previous solutions</li>
                    <li>Reduced onboarding time by 25% through intuitive design patterns</li>
                    <li>Featured in multiple industry publications for innovative approach</li>
                  </ul>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-32">
                  <h3 className="text-lg font-medium mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm text-muted-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="chip">Flutter</span>
                        <span className="chip">Firebase</span>
                        <span className="chip">Figma</span>
                        <span className="chip">REST API</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-muted-foreground">My Role</h4>
                      <p className="mt-1">Lead UI/UX Designer & Developer</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm text-muted-foreground">Project Duration</h4>
                      <p className="mt-1">4 Months</p>
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full gap-2">
                        View Live Project
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Next projects */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-8 text-center">More Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projectsData
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map((otherProject, index) => (
                    <Link 
                      to={`/project/${otherProject.id}`} 
                      key={index}
                      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={otherProject.image} 
                          alt={otherProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium group-hover:text-primary transition-colors">{otherProject.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{otherProject.description}</p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
