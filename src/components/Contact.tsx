
import React from 'react';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-purple-50 to-indigo-50 opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-purple-100/50 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-indigo-100/50 blur-3xl"></div>
      
      <div className="container relative z-10">
        <SectionHeader
          subtitle="Get in Touch"
          title="Let's Work Together"
          description="Feel free to reach out for collaborations, inquiries, or just to say hello!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Contact Information</h3>
            <p className="text-muted-foreground">
              I'm currently available for freelance work and open to discussing new opportunities. Let's build something amazing together.
            </p>
            
            <div className="space-y-5 mt-8">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-white/80"
              >
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Mail className="w-5 h-5" />
                </div>
                <a 
                  href="mailto:youssef.job21@gmail.com"
                  className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
                >
                  youssef.job21@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-white/80"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <Github className="w-5 h-5" />
                </div>
                <a 
                  href="https://github.com/YoussefAmin2312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-700 transition-colors font-medium"
                >
                  YoussefAmin2312
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-white/80"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/amin-yyoussef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
                >
                  amin-yyoussef
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-white/80"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">
                  Cairo, Egypt
                </span>
              </motion.div>
            </div>
            
            <div className="border-t border-purple-200 pt-6 mt-8">
              <h4 className="text-lg font-medium mb-4 text-purple-800">Let's connect</h4>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/YoussefAmin2312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/amin-yyoussef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:youssef.job21@gmail.com"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-700" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+1234567890"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg hover:bg-gray-50 transition-all"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5 text-gray-700" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-800">Send Me a Message</h3>
              <Send className="w-5 h-5 text-purple-500" />
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
