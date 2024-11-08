'use client'; 

import React from 'react';
import { useRouter } from 'next/navigation'; 

const About = () => {
  const router = useRouter(); 

  const handleBackToHome = () => {
    router.push('/'); 
  };

  return (
    <div className="container1">
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          I&apos;m Jahanzaib Nadeem, a passionate software developer specializing in frontend web development. With a strong foundation in JavaScript and TypeScript, I am dedicated to building efficient, scalable, and user-friendly web applications. I thrive on challenges and am constantly expanding my knowledge to keep up with industry trends.
        </p>
        <p>
          My journey in tech started with a curiosity about cybersecurity and artificial intelligence, fields that continue to inspire my work. I am driven by a commitment to create secure, innovative, and impactful digital experiences for users. When I&apos;m not coding, you can find me exploring new tech, reading about the latest AI advancements, or connecting with fellow tech enthusiasts.
        </p>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript & TypeScript</li>
          <li>HTML & CSS</li>
          <li>React & Vue.js</li>
          <li>Web Security</li>
          <li>Responsive Design</li>
          <li>API Integration</li>
        </ul>
      </div>

      <div className="experience-section">
        <h2>Experience</h2>
        <p>
          I have worked with various teams on web development projects, where I collaborated to design and develop user-friendly, responsive websites and applications. My experience includes internships at tech startups, where I focused on frontend development, and freelance projects, where I handled end-to-end web development tasks.
        </p>
      </div>

      <div className="projects-section">
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio Website:</strong> A personal portfolio to showcase my skills, projects, and experience.</li>
          <li><strong>E-commerce App:</strong> Developed a responsive e-commerce application with React and integrated it with a payment gateway.</li>
          <li><strong>Weather App:</strong> A weather forecasting app using OpenWeather API, showcasing my skills in API integration and React.</li>
        </ul>
        <button className="back-home-btn" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default About;
