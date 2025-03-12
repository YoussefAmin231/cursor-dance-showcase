
import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container">
        <SectionHeader
          subtitle="Get in Touch"
          title="Let's Work Together"
          description="Feel free to reach out for collaborations, inquiries, or just to say hello!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              I'm currently available for freelance work and open to discussing new opportunities. Let's build something amazing together.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:youssef.job21@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors link-hover"
                >
                  youssef.job21@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-primary" />
                <a 
                  href="https://github.com/YoussefAmin2312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors link-hover"
                >
                  YoussefAmin2312
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <a 
                  href="https://www.linkedin.com/in/amin-yyoussef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors link-hover"
                >
                  amin-yyoussef
                </a>
              </div>
            </div>
            
            <div className="border-t border-border pt-6 mt-8">
              <h4 className="text-lg font-medium mb-4">Let's connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/YoussefAmin2312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/amin-yyoussef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:youssef.job21@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
