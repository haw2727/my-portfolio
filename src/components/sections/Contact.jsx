import { motion } from 'framer-motion'; 
import { Mail, MapPin, Phone, MessageCircle, ArrowRight, Copy, Check } from 'lucide-react';

import { useState } from 'react';

const Contact = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleEmailClick = () => {
    const email = 'hawltumehari@gmail.com';
    const subject = encodeURIComponent('Let\'s work together');
    const body = encodeURIComponent('Hi Hawltu,\n\nI\'d like to discuss a project with you.\n\nBest regards');
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+251922782039', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Hawltu! I found your portfolio and would like to discuss a project with you.');
    window.open(`https://wa.me/251922782039?text=${message}`, '_blank');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Send me an email directly',
      value: 'hawltumehari@gmail.com',
      displayValue: 'hawltumehari@gmail.com',
      action: handleEmailClick,
      copyAction: () => copyToClipboard('hawltumehari@gmail.com', 'email'),
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      icon: Phone,
      title: 'Call Me',
      description: 'Let\'s have a conversation',
      value: '+251 922 782 039',
      displayValue: '+251 922 782 039',
      action: handlePhoneClick,
      copyAction: () => copyToClipboard('+251922782039', 'phone'),
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat on WhatsApp',
      value: 'Chat with me',
      displayValue: '+251 922 782 039',
      action: handleWhatsAppClick,
      copyAction: () => copyToClipboard('+251922782039', 'whatsapp'),
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700'
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-gray-900 dark:via-slate-900 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-blue-400/10 blur-3xl animate-pulse" />
        <div className="absolute rounded-full -bottom-40 -left-40 w-96 h-96 bg-purple-400/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-blue-700 border rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300 border-blue-200/50 dark:border-blue-700/50"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-semibold">Get In Touch</span>
          </motion.div>
          
          <h2 className="mb-6 text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text">
            Let's Work Together
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid gap-6 mb-16 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative h-full p-8 overflow-hidden transition-all duration-500 border shadow-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl hover:shadow-2xl border-white/20 dark:border-gray-700/30">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${method.color} ${method.hoverColor} text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <method.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  
                  <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-400">
                    {method.description}
                  </p>
                  
                  {/* Contact Info */}
                  <div className="flex items-center justify-between p-4 mb-6 rounded-xl bg-gray-50/80 dark:bg-gray-700/50">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {method.displayValue}
                    </span>
                    <button
                      onClick={method.copyAction}
                      className="p-2 transition-all duration-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 group/copy"
                      title="Copy to clipboard"
                    >
                      {copiedItem === method.title.toLowerCase().replace(' ', '') ? (
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover/copy:text-gray-700 dark:group-hover/copy:text-gray-300" />
                      )}
                    </button>
                  </div>
                  
                  {/* Action Button */}
                  <button
                    onClick={method.action}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${method.color} ${method.hoverColor} text-white font-semibold rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
                  >
                    <span>{method.value}</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;