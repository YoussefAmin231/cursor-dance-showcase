
import React from 'react';
import SectionHeader from './SectionHeader';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  "Mobile App Development (Flutter)",
  "UI/UX Design",
  "User Research",
  "Wireframing & Prototyping",
  "Figma",
  "User Testing",
  "Network Engineering (CCNA)",
  "Frontend Development"
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionHeader
          subtitle="About Me"
          title="Computer Engineer & UI/UX Designer"
          description="Dedicated to creating intuitive and beautiful digital experiences."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div 
            className="opacity-0 animate-slide-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground">
                I'm a Computer Engineer with a passion for creating intuitive and visually appealing digital experiences. With expertise in mobile app development and UI/UX design, I strive to build products that are not only functional but also delightful to use.
              </p>
              <p className="text-muted-foreground">
                Currently working as a Flutter Trainee at WE Telecom, I'm enhancing my skills in mobile development while applying my knowledge of user experience design principles to create applications that solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                I hold a Google UX Certificate (2025) and have a background in network engineering with CCNA certification, giving me a well-rounded perspective on both frontend and backend aspects of digital product development.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#projects"
                className="px-6 py-3 inline-block rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Explore My Work
              </a>
            </div>
          </div>
          
          <div 
            className="opacity-0 animate-slide-in-right"
            style={{ animationDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Mobile Development</span>
                  <span className="text-sm text-muted-foreground">90%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">UI/UX Design</span>
                  <span className="text-sm text-muted-foreground">85%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Network Engineering</span>
                  <span className="text-sm text-muted-foreground">80%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
