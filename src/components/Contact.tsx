
import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { AspectRatio } from './ui/aspect-ratio';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-50 to-indigo-50 opacity-80"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern opacity-10"></div>
      
      <div className="container relative z-10">
        <SectionHeader
          subtitle="Get in Touch"
          title="Let's Work Together"
          description="Feel free to reach out for collaborations, inquiries, or just to say hello!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
              <div className="absolute -left-5 -bottom-5 w-24 h-24 bg-indigo-200/40 rounded-full blur-xl"></div>
              <div className="relative p-6 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and open to discussing new opportunities. Let's build something amazing together.
                </p>
                
                <div className="space-y-4 mt-8">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a 
                      href="mailto:youssef.job21@gmail.com"
                      className="text-gray-700 group-hover:text-indigo-600 transition-colors link-hover"
                    >
                      youssef.job21@gmail.com
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <a 
                      href="https://github.com/YoussefAmin2312"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 group-hover:text-indigo-600 transition-colors link-hover flex items-center"
                    >
                      YoussefAmin2312
                      <ExternalLink className="ml-1 w-3 h-3 opacity-70" />
                    </a>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/amin-yyoussef/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 group-hover:text-indigo-600 transition-colors link-hover flex items-center"
                    >
                      amin-yyoussef
                      <ExternalLink className="ml-1 w-3 h-3 opacity-70" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative mt-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-purple-200/30 rounded-2xl blur-sm transform -rotate-1"></div>
              <div className="relative p-6 bg-white/80 backdrop-blur-md rounded-xl border border-white/40 shadow-md">
                <h4 className="text-lg font-medium mb-4 text-gray-800">Connect with me</h4>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ y: -3, boxShadow: "0 6px 20px -5px rgba(139, 92, 246, 0.4)" }}
                    href="https://github.com/YoussefAmin2312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-md"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -3, boxShadow: "0 6px 20px -5px rgba(139, 92, 246, 0.4)" }}
                    href="https://www.linkedin.com/in/amin-yyoussef/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -3, boxShadow: "0 6px 20px -5px rgba(139, 92, 246, 0.4)" }}
                    href="mailto:youssef.job21@gmail.com"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-md"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-3xl"></div>
            <div className="absolute -right-5 -bottom-5 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl"></div>
            
            <div className="relative p-8 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg border border-white/40">
              <AspectRatio ratio={1/1.2} className="hidden absolute -top-12 -right-12 w-24 lg:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg rotate-12 shadow-lg">
                <div className="transform -rotate-12 text-white text-center">
                  <Mail className="w-8 h-8 mx-auto mb-1" />
                  <span className="text-xs font-medium">Say Hello!</span>
                </div>
              </AspectRatio>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
