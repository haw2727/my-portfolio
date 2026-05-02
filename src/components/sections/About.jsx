import { motion } from 'framer-motion';
import { Code, Award, Users, Target, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      number: "4",
      label: "Major Projects",
      description: "Successfully completed and deployed applications"
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Professional software development experience"
    },
    {
      number: "2",
      label: "Technology Stacks",
      description: "Flutter mobile and MERN web development"
    },
    {
      number: "100%",
      label: "Project Success",
      description: "All projects delivered successfully"
    }
  ];

  const expertise = [
    {
      title: "Mobile Development",
      description: "Specialized in Flutter framework for creating high-performance, cross-platform mobile applications with native user experiences.",
      technologies: ["Flutter", "Dart", "iOS", "Android"]
    },
    {
      title: "Full-Stack Development",
      description: "Expert in MERN stack development, building scalable web applications with modern architecture and best practices.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    },
    {
      title: "UI/UX Implementation",
      description: "Converting design concepts into pixel-perfect, responsive interfaces with attention to user experience and accessibility.",
      technologies: ["Responsive Design", "Material Design", "Accessibility"]
    },
    {
      title: "API Development",
      description: "Designing and implementing RESTful APIs with proper authentication, validation, and documentation for seamless integration.",
      technologies: ["REST APIs", "JWT", "Database Design"]
    }
  ];

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code following industry best practices and coding standards."
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Understanding client requirements and delivering solutions that exceed expectations while meeting business objectives."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Ensuring high-quality deliverables through thorough testing, code reviews, and continuous improvement processes."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams, stakeholders, and clients to achieve project success."
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-blue-700 border rounded-full bg-blue-50 dark:bg-blue-900/20 dark:text-blue-300 border-blue-200 dark:border-blue-800"
          >
            <Users className="w-4 h-4" />
            <span className="text-sm font-semibold">About Me</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Professional Background
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Dedicated Flutter and MERN stack developer committed to delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h3>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                I am a dedicated Flutter and MERN stack developer with over 3 years of professional experience in creating 
                high-quality mobile applications and web solutions. My expertise spans from cross-platform Flutter mobile 
                apps to full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
              </p>
              <p className="mb-4">
                My portfolio includes diverse projects such as CloudCart e-commerce platform, real-time chat applications 
                with video calling capabilities, interactive web applications, and the ETTech airplane ticket booking mobile 
                app. I specialize in creating scalable, user-friendly solutions that combine modern design with robust functionality.
              </p>
              <p>
                I am passionate about writing clean, maintainable code and staying current with the latest development 
                technologies and best practices. My approach focuses on delivering high-quality solutions that meet 
                client requirements while providing exceptional user experiences across all platforms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-4">
                  <value.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-xl border border-blue-200/50 dark:border-blue-800/50"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.label}</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Development Approach</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Analysis & Planning</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Thorough requirement analysis and strategic planning to ensure project success from the start.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Development & Testing</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Agile development methodology with continuous testing and quality assurance throughout the process.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-4">
                  <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Delivery & Support</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Timely delivery with comprehensive documentation and ongoing support for long-term success.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities and challenging projects. 
              Let's connect and explore how we can bring your ideas to life.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;