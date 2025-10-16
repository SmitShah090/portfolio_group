import React from 'react';

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"] },
    { category: "Backend", items: ["Node.js", "Python", "Express.js", "FastAPI", "MongoDB", "PostgreSQL"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"] },
    { category: "Tools & Others", items: ["Git", "Figma", "VS Code", "Postman", "Jest", "Webpack"] }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality products."
    },
    {
      title: "Frontend Developer",
      company: "Web Studio Pro",
      period: "2019 - 2020",
      description: "Created modern user interfaces and improved user experience for various client projects. Specialized in React and Vue.js development."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              I'm a passionate Full Stack Developer with over 5 years of experience creating 
              exceptional digital experiences. I specialize in building modern, scalable web 
              applications that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">My Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  My journey in web development began during my computer science studies, where I 
                  discovered my passion for creating digital solutions that make a difference. 
                  What started as curiosity about how websites work evolved into a deep love for 
                  crafting elegant, user-centered applications.
                </p>
                <p>
                  Over the years, I've had the privilege of working with diverse teams and clients, 
                  from startups to enterprise companies. Each project has taught me something new 
                  and reinforced my belief that great software comes from understanding both the 
                  technical challenges and the human needs behind them.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community. I believe 
                  in continuous learning and staying current with the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-xl p-8 space-y-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Smit Shah</h3>
                    <p className="text-primary-600 font-medium">Full Stack Developer</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600">Available Worldwide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">5+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-600">50+ Projects Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey of growth, learning, and delivering exceptional results across various roles and projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span 
                      key={itemIndex} 
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">My Values</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              The principles that guide my work and drive my passion for creating exceptional software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-blue-100">Building fast, efficient applications that provide exceptional user experiences.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality</h3>
              <p className="text-blue-100">Writing clean, maintainable code with thorough testing and documentation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
              <p className="text-blue-100">Working closely with teams and clients to achieve shared goals and success.</p>
            </div>
          </div>
        </div>
    </section>
    </div>
  );
}
