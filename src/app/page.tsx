"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, MessageCircle, Phone, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MobileMenu } from "@/components/mobile-menu";
import { LoadingScreen } from "@/components/loading-screen";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

export default function HomePage() {
  const [activeSkillTab, setActiveSkillTab] = useState("Languages");
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Memoize to prevent recreating array on every render
  const typingTexts = useMemo(() => [
    "Frontend Developer",
    "Backend Developer",
    "React Enthusiast", 
    "UI/UX Lover",
    "Problem Solver",
    "Tech Explorer"
  ], []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 80; // Faster typing speed
    const currentText = typingTexts[textIndex];

    if (!isDeleting && typingText === currentText) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 1500); // Shorter pause
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && typingText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypingText(
        currentText.substring(
          0,
          typingText.length + (isDeleting ? -1 : 1)
        )
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, textIndex, typingTexts]);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Phung&apos;s Portfolio
          </motion.div>
          <div className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-6"
            >
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-pink-400 transition-colors font-medium">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors font-medium">Contact</a>
            </motion.div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section - Optimized for Performance */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
        {/* Dark Background with Fun Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Colorful gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-gray-900 to-blue-900/30"></div>
          
          {/* Fun floating shapes - Reduced blur for performance */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1 flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Removed glowing background for better performance */}
                
                {/* Profile image container - more rounded and friendly */}
                <div className="relative w-80 h-96 md:w-96 md:h-[28rem]">
                  {/* Colorful outer border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1 rounded-3xl">
                    <div className="w-full h-full bg-gray-900 p-2 rounded-3xl">
                      {/* Inner border */}
                      <div className="w-full h-full bg-gradient-to-br from-purple-400/80 to-blue-400/80 p-1 rounded-3xl">
                        <div className="w-full h-full bg-gray-900 p-1 overflow-hidden rounded-3xl">
                          {/* Profile Image */}
                          <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center relative overflow-hidden group rounded-3xl">
                            <Image
                              src="/images/myAvatart.jpg"
                              alt="Nguyen The Phung - Profile Photo"
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-3xl"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content - Fun & Friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-300">Hey, I&apos;m </span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Phung!
                </span>
              </h1>
              
              {/* Animated Typing Subtitle */}
              <div className="text-xl md:text-2xl text-gray-300 mb-4 font-medium h-8 flex items-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {typingText}
                </span>
                <span className="animate-pulse ml-1 text-purple-400">|</span>
              </div>
              
              {/* Description */}
              <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
                I love building cool stuff! From 
                <span className="text-purple-400 font-semibold"> brain-computer interfaces</span>, 
                <span className="text-pink-400 font-semibold"> AI magic</span>, to 
                <span className="text-blue-400 font-semibold"> awesome web apps</span>.
                Let&apos;s create something amazing together!
              </p>

        

        
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative overflow-hidden bg-gray-900">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Where I&apos;ve been and what I&apos;ve learned along the way!
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* BrainLife Link Internship */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-100 mb-2">
                        Software Research & Engineer Intern
                      </CardTitle>
                      <CardDescription className="text-purple-400 font-semibold text-lg">
                        BrainLife Link JSC
                      </CardDescription>
                    </div>
                    <div className="text-pink-400 font-medium text-sm md:text-right">
                      May 2025 - Sep 2025
                      <div className="text-gray-500 text-xs mt-1">Ho Chi Minh City, Vietnam</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Working on cutting-edge brain-computer interface technology!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-400 mt-1">•</span>
                      <span>Built real-time EEG signal processing pipeline with <strong>FastAPI + Python</strong> (reduced latency by 40%!)</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Integrated ML emotion detection models with Unity games for <strong>awesome brain-controlled gaming experiences!</strong></span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Developed mobile app features with authentication & API integration using <strong>React Native + Firebase</strong></span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {["Python", "FastAPI", "Unity", "C#", "React Native", "Firebase", "ML/AI"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-gray-100 mb-2">
                        Computer Science Student
                      </CardTitle>
                      <CardDescription className="text-blue-400 font-semibold text-lg">
                        VNUHCM - University Of Science & Université Claude Bernard Lyon 1
                      </CardDescription>
                    </div>
                    <div className="text-pink-400 font-medium text-sm md:text-right">
                      2021 - 2025
                      <div className="text-gray-500 text-xs mt-1">GPA: 3.2/4.0</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Double degree program - Learning the best from Vietnam and France!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-400 mt-1">•</span>
                      <span><strong>IBM Fullstack Software Developer</strong> Professional Certificate</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1">•</span>
                      <span><strong>Google Cloud Engineer</strong> Professional Certificate</span>
                    </div>
                    <div className="flex items-start gap-3 text-gray-300">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Active in <strong>Hackathons & Physics Club</strong> - always learning something new!</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative overflow-hidden bg-gray-950">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cool Stuff I Built
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Check out some of my favorite projects! Each one taught me something awesome
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GreenMart Project */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 overflow-hidden">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image 
                    src="/images/GreenMart_Project.png" 
                    alt="GreenMart E-commerce Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-100 group-hover:text-green-400 transition-colors">
                    GreenMart E-commerce
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-400">
                    A modern e-commerce platform for fresh and organic products with secure authentication, 
                    product management, real-time order tracking, and mobile-first optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["React", "TypeScript", "Node.js", "Express", "MongoDB", "TailwindCSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-green-600/20 to-blue-600/20 text-green-300 rounded text-xs font-medium border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 transition-colors"
                      onClick={() => window.open('https://github.com/nguyenthephung/Green-Mart', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-md hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                      onClick={() => window.open('https://greenmart-web-4385e.web.app/home', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* TubeAnalytics Project */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 overflow-hidden">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image 
                    src="/images/TubeAnalytics_Project.png" 
                    alt="TubeAnalytics AI Emotion Detection Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-100 group-hover:text-purple-400 transition-colors">
                    TubeAnalytics - AI Emotion Detection
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-400">
                    AI-powered YouTube comment analysis using Hume AI, detecting 50+ emotional states 
                    to reveal audience sentiment with real-time interactive dashboard!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Next.js", "TailwindCSS", "FastAPI", "Python", "Hume AI", "YouTube API"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-red-600/20 to-purple-600/20 text-red-300 rounded text-xs font-medium border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-gray-700 text-gray-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-colors"
                      onClick={() => window.open('https://github.com/nguyenthephung/TubeAnalytics', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 shadow-md hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                      onClick={() => window.open('https://tube-analytics-w5pb.vercel.app/', '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Expense Tracker API */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 overflow-hidden">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image 
                    src="/images/ExpenseTrackerAPI_Project.png" 
                    alt="Expense Tracker API Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-100 group-hover:text-orange-400 transition-colors">
                    Expense Tracker API
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-400">
                    Comprehensive RESTful API for personal finance management with dual authentication (JWT + Google OAuth2), 
                    Firebase Firestore integration, and advanced analytics endpoints.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Java 17", "Spring Boot", "Firebase", "JWT", "OAuth2", "Swagger"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 text-orange-300 rounded text-xs font-medium border border-orange-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-gray-700 text-gray-300 hover:border-orange-500 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
                      onClick={() => window.open('https://github.com/nguyenthephung/ExpenseTrackerAPI', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mario Game Project - NEW */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3 * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 overflow-hidden">
                <div className="w-full h-48 relative overflow-hidden">
                  <Image 
                    src="/images/MarioGame_Project.jpg" 
                    alt="Mario Bros Game Project"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-gray-100 group-hover:text-red-400 transition-colors">
                    Mario Bros Game (C++ & SFML)
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-gray-400">
                    A custom Mario Bros-style platformer built with C++ and SFML! Features classic 2D platforming, 
                    camera tracking, collision detection, enemy interactions, and retro gameplay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["C++17", "SFML 2.5+", "Visual Studio", "Game Dev", "2D Graphics"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-red-600/20 to-yellow-600/20 text-red-300 rounded text-xs font-medium border border-red-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-gray-700 text-gray-300 hover:border-red-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      onClick={() => window.open('https://github.com/trngnneee/MarioGame', '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section - Redesigned with Tab Menu */}
      <section id="skills" className="py-20 px-4 relative overflow-hidden bg-gray-900">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              My Toolkit
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The technologies I love working with! Always learning something new
            </p>
          </motion.div>

          {/* Tab Menu */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800/50 rounded-2xl p-2 gap-2 border border-gray-700/50 shadow-xl">
              {["Languages", "Frontend", "Backend", "Database & Cloud"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeSkillTab === tab
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105"
                      : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Content */}
          <motion.div
            key={activeSkillTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 shadow-2xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {activeSkillTab === "Languages" && (
                    <>
                      {["C++", "C#", "Python", "Java", "JavaScript", "TypeScript"].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative p-4 bg-gradient-to-br from-gray-700/80 to-gray-800/80 rounded-xl border border-gray-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-default">
                            <p className="text-center font-semibold text-gray-100">{skill}</p>
                          </div>
                        </motion.div>
                      ))}
                    </>
                  )}
                  
                  {activeSkillTab === "Frontend" && (
                    <>
                      {["React", "Next.js", "Redux", "TailwindCSS", "Bootstrap", "HTML/CSS"].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative p-4 bg-gradient-to-br from-gray-700/80 to-gray-800/80 rounded-xl border border-gray-600/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-default">
                            <p className="text-center font-semibold text-gray-100">{skill}</p>
                          </div>
                        </motion.div>
                      ))}
                    </>
                  )}
                  
                  {activeSkillTab === "Backend" && (
                    <>
                      {["Node.js", "Express", "FastAPI", ".NET", "Spring Boot", "Kafka", "REST API"].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative p-4 bg-gradient-to-br from-gray-700/80 to-gray-800/80 rounded-xl border border-gray-600/50 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 cursor-default">
                            <p className="text-center font-semibold text-gray-100">{skill}</p>
                          </div>
                        </motion.div>
                      ))}
                    </>
                  )}
                  
                  {activeSkillTab === "Database & Cloud" && (
                    <>
                      {["MySQL", "MongoDB", "MSSQL", "Firebase", "Azure", "Docker"].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                          <div className="relative p-4 bg-gradient-to-br from-gray-700/80 to-gray-800/80 rounded-xl border border-gray-600/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-default">
                            <p className="text-center font-semibold text-gray-100">{skill}</p>
                          </div>
                        </motion.div>
                      ))}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden bg-gray-950">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s work together!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm">
                <CardContent className="p-6 space-y-6">
                  {/* Email */}
                  <a 
                    href="mailto:nguyenthephung61@gmail.com"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-gray-100 font-medium">nguyenthephung61@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:0867951141"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-gray-100 font-medium">0867951141</p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a 
                    href="https://github.com/nguyenthephung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="text-gray-100 font-medium">@nguyenthephung</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/ph%E1%BB%A5ng-nguy%E1%BB%85n-th%E1%BB%83-285107385/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-gray-100 font-medium">Nguyen The Phung</p>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/nguyenthe.phung.961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Facebook</p>
                      <p className="text-gray-100 font-medium">Nguyen The Phung</p>
                    </div>
                  </a>

                  {/* Zalo */}
                  <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Zalo</p>
                      <p className="text-gray-100 font-medium">0867951141</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form or Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 h-full">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100 mb-4">
                      Let&apos;s Create Something Amazing
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      I&apos;m always interested in hearing about new projects and opportunities. 
                      Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Quick Response</h4>
                      <p className="text-gray-400 text-sm">I typically respond within 24 hours</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl border border-blue-500/20">
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Available For</h4>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Freelance Projects</li>
                        <li>• Full-time Opportunities</li>
                        <li>• Collaborations</li>
                        <li>• Consulting</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-xl border border-green-500/20">
                      <h4 className="text-lg font-semibold text-green-300 mb-2">Location</h4>
                      <p className="text-gray-400 text-sm">Ho Chi Minh City, Vietnam</p>
                      <p className="text-gray-500 text-xs mt-1">Open to remote work</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Nguyen The Phung
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Frontend Developer & Computer Science Student passionate about creating awesome stuff! 
                From web apps to AI, I love turning ideas into reality.
              </p>
              <div className="space-y-3">
                <a href="mailto:nguyenthephung61@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">nguyenthephung61@gmail.com</span>
                </a>
                <a href="tel:0867951141" className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">0867951141</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-200">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li><a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-green-400 transition-colors">Skills</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-200">
                Services
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Frontend Design</li>
                <li>UI/UX Implementation</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm flex items-center gap-2">
                <span>© 2025 Nguyen The Phung.</span>
                <span className="hidden md:inline">Made with</span>
                <span className="text-pink-500 text-lg animate-pulse">♥</span>
                <span className="hidden md:inline">using Next.js, React & TailwindCSS</span>
              </p>
              <p className="text-gray-500 text-sm">
                Designed & Developed with passion
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
