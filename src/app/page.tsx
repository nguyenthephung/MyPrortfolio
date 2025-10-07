"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import { MobileMenu } from "@/components/mobile-menu";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl"
          >
            Portfolio
          </motion.div>
          <div className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-6"
            >
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </motion.div>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-blue-800/10 dark:to-purple-800/10 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for work
            </span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Hello, I'm Your Name
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4 font-medium"
          >
            Full-Stack Developer & UI/UX Designer
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I specialize in modern web technologies and love bringing ideas to life through code.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="mr-2">🚀</span>
              View My Work
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300">
              <span className="mr-2">📄</span>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center space-x-6 mb-20"
          >
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300">
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm text-gray-400 font-medium">Scroll down</span>
              <ArrowDown className="h-6 w-6 text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I combine creativity with technical expertise to deliver exceptional digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Full-Stack Development",
                description: "Building scalable web applications with modern technologies like React, Next.js, Node.js, and cloud platforms."
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description: "Creating intuitive and beautiful user interfaces that provide excellent user experiences across all devices."
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description: "Ensuring fast loading times, smooth animations, and optimal performance for the best user experience."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 bg-white dark:bg-gray-800">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn more about my background, skills, and passion for development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl mb-6 relative overflow-hidden">
                {/* Simulated browser window */}
                <div className="absolute top-4 left-4 right-4 h-8 bg-white dark:bg-gray-800 rounded-lg flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                  </div>
                </div>
                {/* Code-like elements */}
                <div className="absolute top-16 left-6 right-6 space-y-3">
                  <div className="h-3 bg-blue-300 dark:bg-blue-600 rounded w-3/4"></div>
                  <div className="h-3 bg-purple-300 dark:bg-purple-600 rounded w-1/2"></div>
                  <div className="h-3 bg-blue-300 dark:bg-blue-600 rounded w-2/3"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
                </div>
                {/* Floating elements */}
                <div className="absolute bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-80 animate-float"></div>
                <div className="absolute bottom-12 left-8 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">Passionate Developer</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With over <span className="font-semibold text-blue-600">3+ years</span> of experience in web development, 
                I&apos;ve worked with startups and established companies to create digital solutions that make a difference. 
                My journey started with curiosity about how websites work, and it has evolved into a passion for crafting 
                exceptional user experiences.
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in writing <span className="font-semibold text-purple-600">clean, maintainable code</span> and 
                staying up-to-date with the latest technologies. When I&apos;m not coding, you can find me exploring new 
                frameworks, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies I work with:</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
                    {/* Project preview mockup */}
                    <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                      <div className="p-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="h-2 bg-blue-200 dark:bg-blue-700 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                        <div className="h-2 bg-purple-200 dark:bg-purple-700 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 group-hover:from-blue-400/20 group-hover:to-purple-400/20 transition-all duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-blue-600 transition-colors">
                      Project {project}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      A modern web application built with React and TypeScript, featuring responsive design, 
                      real-time updates, and seamless user experience.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["React", "TypeScript", "Tailwind"].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1 border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:text-blue-600 transition-colors">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
              { category: "Backend", skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
              { category: "Tools", skills: ["Git", "Docker", "AWS", "Vercel", "Figma"] },
              { category: "Learning", skills: ["Rust", "Go", "Machine Learning", "Web3", "AI/LLM"] }
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 bg-white dark:bg-gray-800">
                  <CardHeader>
                    <CardTitle className="text-center text-lg font-semibold flex items-center justify-center">
                      <span className="mr-2 text-2xl">
                        {skillGroup.category === "Frontend" ? "🎨" : 
                         skillGroup.category === "Backend" ? "⚙️" :
                         skillGroup.category === "Tools" ? "🛠️" : "📚"}
                      </span>
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg text-center hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 cursor-default group-hover:scale-105"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  I&apos;m always open to discussing new opportunities, interesting projects, 
                  or just having a friendly chat about technology and design.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <span>linkedin.com/in/yourprofile</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Github className="h-5 w-5 text-blue-600" />
                  <span>github.com/yourusername</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300">
                  <Github className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300">
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300">
                  <Mail className="h-6 w-6" />
                </Button>
              </div>
            </div>

            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Your Name
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Full-Stack Developer passionate about creating amazing digital experiences. 
                Always learning, always building.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-blue-100 dark:hover:bg-blue-900/30">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-blue-100 dark:hover:bg-blue-900/30">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-blue-100 dark:hover:bg-blue-900/30">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tech Stack</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Node.js & Python</li>
                <li>AWS & Docker</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2025 Your Name. Built with{" "}
                <span className="text-red-500">♥</span>{" "}
                using Next.js 15, React 19, TypeScript & TailwindCSS
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
                Designed & Developed by Your Name
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}