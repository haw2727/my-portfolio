import { motion } from 'framer-motion'; 
import { Smartphone, Code, Database, Wrench, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { skills } from '../../data/portfolioData';

const TechnologyCard = ({ tech, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{tech.icon}</div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{tech.name}</h4>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{tech.category}</span>
            </div>
          </div>
          <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{tech.description}</p>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ skillData, index }) => {
  const iconMap = {
    'Mobile Development': Smartphone,
    'Frontend Development': Code,
    'Backend Development': Database,
    'Database Management': Globe,
    'Development Tools & DevOps': Wrench
  };
  
  const Icon = iconMap[skillData.title] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="mb-16"
    >
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white shadow-lg">
          <Icon className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{skillData.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{skillData.description}</p>
        </div>
      </div>
      
      {/* Technologies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillData.technologies.map((tech, techIndex) => (
          <TechnologyCard key={tech.name} tech={tech} index={techIndex} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillSections = Object.values(skills);

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-blue-400/10 blur-3xl animate-pulse" />
        <div className="absolute rounded-full -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-blue-700 border rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50"
          >
            <Code className="w-4 h-4" />
            <span className="text-sm font-semibold">Technical Expertise</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text">
            Technologies & Tools
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical skills and the technologies I use to build exceptional applications.
          </p>
        </motion.div>

        {/* Skills Sections */}
        <div className="space-y-16">
          {skillSections.map((skillData, index) => (
            <SkillSection key={skillData.title} skillData={skillData} index={index} />
          ))}
        </div>

        {/* Flutter & MERN Specialization Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl border border-blue-200/50 dark:border-blue-700/50"
        >
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-blue-700 border rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-semibold">Core Specialization</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Flutter & MERN Stack Expert
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 text-lg leading-relaxed">
              I specialize in building complete digital ecosystems using Flutter for cross-platform mobile applications 
              and the MERN stack for scalable web solutions. This combination allows me to deliver comprehensive 
              solutions that work seamlessly across all platforms.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Flutter Specialization */}
              <div className="text-left p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-white/20 dark:border-gray-700/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Flutter Mobile Development</h4>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Cross-platform iOS & Android apps
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Beautiful, responsive UI designs
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    State management with Provider/Bloc
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-500" />
                    Firebase integration & offline support
                  </li>
                </ul>
              </div>

              {/* MERN Specialization */}
              <div className="text-left p-6 bg-white/70 dark:bg-gray-800/70 rounded-2xl border border-white/20 dark:border-gray-700/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">MERN Stack Development</h4>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    MongoDB database design & optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    Express.js RESTful API development
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    React frontend with modern hooks
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-green-500" />
                    Node.js server-side architecture
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;