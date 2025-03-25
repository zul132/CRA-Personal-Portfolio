import React from 'react';
import '../css/Resume.css'; // You can style it later

const Resume = () => {
  // Education Data
  const education = [
    {
      degree: 'B.E. Computer Science Engineering',
      institution: 'Loyola-ICAM College of Engineering and Technology',
      year: '2021 - 2025',
      description: 'CGPA: 8.2',
    },
    {
      degree: 'AISSCE (Senior Secondary Education)',
      institution: 'The Schram Academy, Chennai',
      year: '2019 - 2021',
      description: 'Grade: 95.6%',
    },
    {
      degree: 'AISSE (Secondary Education)',
      institution: 'JSS Private School, Dubai',
      year: '2011 - 2019',
      description: 'Grade: 89%',
    },
  ];

  // Internship Experience Data (With Bullet Points)
  const internships = [
    {
      role: 'Intern - IT & AFC',
      company: 'Chennai Metro Rail Limited (CMRL), Chennai',
      duration: 'Jan 2025 - Apr 2025 (Ongoing)',
      description: [
        'Developing an AI-powered, multilingual voice/chat bot named Mithra for Chennai Metro.',
        'Built using Flask and Gemini API, enabling real-time ticket booking and metro navigation assistance.',
        'Supports Tamil, English, and Hindi for seamless communication.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Tamizh - AIC Anna Incubator, Chennai',
      duration: 'Jul 2024 - Aug 2024 (48 Days)',
      description: [
        'Contributed to custom Linux-based OS development for AR/MR smart glasses (Kaipesi).',
        'Developed and tested kernel modules in C for Debian OS on Raspberry Pi.',
      ],
    },
  ];

  // Live Projects / Traineeships Data (With Bullet Points)
  const projects = [
    {
      title: 'AI-Powered Metro Ticket Booking',
      organization: 'Chennai Metro Rail Ltd',
      duration: '2025 (Ongoing)',
      description: [
        'Developing a voice bot integrated with the CMRL website to automate ticket booking using AI and NLP.',
        'Ensures secure payment handling and real-time metro navigation assistance.',
        'Supports voice commands in Tamil, English, and Hindi.',
      ],
    },
  ];

  return (
    <div className="resume-container">
      {/* Education Section (Timeline) */}
      <h2>Education</h2>
      <div className="education-timeline">
        {education.map((edu) => (
          <div key={edu.degree} className="timeline-card">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.year}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      <br />
      {/* Internship Experience Section */}
      <h2>Internship Experience</h2>
      <div className="experience-container">
        {internships.map((intern) => (
          <div key={intern.role} className="experience-card">
            <h3>{intern.role}</h3>
            <p><strong>{intern.company}</strong></p>
            <p>{intern.duration}</p>
            <ul>
              {intern.description.map((point) => (
                <li key={point}> {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <br /><br />
      {/* Live Projects / Traineeships Section */}
      <h2>Live Projects / Traineeships</h2>
      <div className="projects-container">
        {projects.map((proj) => (
          <div key={proj.title} className="project-card">
            <h3>{proj.title}</h3>
            <p><strong>{proj.organization}</strong></p>
            <p>{proj.duration}</p>
            <ul>
              {proj.description.map((point) => (
                <li key={point}> {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
