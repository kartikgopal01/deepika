import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send the form data to your backend or email service
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#181823]">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#537FE7] mx-auto"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-[#181823]/80">
            Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 bg-[#C0EEF2]/30 p-6 rounded-lg shadow-sm border border-[#537FE7]/20">
            <h3 className="text-xl font-bold text-[#537FE7] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#537FE7]/10 p-3 rounded-md mr-4">
                  <svg className="w-5 h-5 text-[#537FE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#181823]">Email</h4>
                  <a href="mailto:Deepika@example.com" className="text-[#537FE7] hover:text-[#181823] transition-colors duration-200">Deepikagps@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#537FE7]/10 p-3 rounded-md mr-4">
                  <svg className="w-5 h-5 text-[#537FE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#181823]">Location</h4>
                  <p className="text-[#181823]/80">Shimogga, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#537FE7]/10 p-3 rounded-md mr-4">
                  <svg className="w-5 h-5 text-[#537FE7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[#181823]">Website</h4>
                  <a href="https://Deepikagps.vercel.app" className="text-[#537FE7] hover:text-[#181823] transition-colors duration-200">Deepika-portfolio.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-[#181823] mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#537FE7]/10 p-3 rounded-md text-[#537FE7] hover:bg-[#537FE7]/20 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#537FE7]/10 p-3 rounded-md text-[#537FE7] hover:bg-[#537FE7]/20 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#537FE7]/10 p-3 rounded-md text-[#537FE7] hover:bg-[#537FE7]/20 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="bg-[#C0EEF2]/30 p-6 rounded-lg shadow-sm border border-[#537FE7]/20">
              <h3 className="text-xl font-bold text-[#537FE7] mb-6">Send a Message</h3>
              
              {submitted && (
                <div className="bg-[#537FE7]/10 text-[#537FE7] p-4 rounded-md mb-6">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {error && (
                <div className="bg-red-500/10 text-red-400 p-4 rounded-md mb-6">
                  {error}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-[#181823] mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-[#537FE7]/20 rounded-md text-[#181823] focus:outline-none focus:border-[#537FE7] focus:ring-1 focus:ring-[#537FE7]/50"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#181823] mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white border border-[#537FE7]/20 rounded-md text-[#181823] focus:outline-none focus:border-[#537FE7] focus:ring-1 focus:ring-[#537FE7]/50"
                    placeholder="Your email"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-[#181823] mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-[#537FE7]/20 rounded-md text-[#181823] focus:outline-none focus:border-[#537FE7] focus:ring-1 focus:ring-[#537FE7]/50"
                  placeholder="Subject of your message"
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#181823] mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white border border-[#537FE7]/20 rounded-md text-[#181823] focus:outline-none focus:border-[#537FE7] focus:ring-1 focus:ring-[#537FE7]/50 resize-none"
                  placeholder="Your message"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-[#181823] text-white font-medium rounded-md transition-colors duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#537FE7]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 