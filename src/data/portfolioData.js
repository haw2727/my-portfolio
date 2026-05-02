export const projects = [
  {
    id: 1,
    title: "CloudCart E-Commerce Platform",
    description: "Full-featured online shopping platform with modern UI and comprehensive functionality.",
    longDescription: "Complete e-commerce solution built with MERN stack featuring user authentication, product catalog, shopping cart, secure checkout with Stripe integration, order management, admin dashboard, and real-time inventory tracking. Includes responsive design and optimized performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Stripe", "JWT"],
    category: "fullstack",
    github: "https://github.com/haw2727",
    liveLink: "https://cloudcart.onrender.com/",
    featured: true
  },
  {
    id: 2,
    title: "Real-Time Chat Web Application",
    description: "Modern chat application with real-time messaging and video call capabilities.",
    longDescription: "Real-time chat application built with MERN stack and Socket.io, featuring instant messaging, video/voice calls using WebRTC, group chats, file sharing, user authentication, message history, and responsive design for seamless communication across devices.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "Express.js"],
    category: "fullstack",
    github: "https://github.com/haw2727",
    liveLink: "https://chatme-video-call-app.onrender.com/",
    featured: true
  },
  {
    id: 3,
    title: "Interactive Todo List Web App",
    description: "Feature-rich task management application with modern JavaScript functionality.",
    longDescription: "Dynamic todo list application built with vanilla JavaScript, HTML5, and CSS3. Features include task creation, editing, deletion, priority levels, due dates, local storage persistence, drag-and-drop functionality, filtering options, and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
    tags: ["JavaScript", "HTML5", "CSS3", "Local Storage", "DOM Manipulation"],
    category: "frontend",
    github: "https://github.com/haw2727",
    liveLink: "https://demo.example.com",
    featured: false
  },
  {
    id: 4,
    title: "ETTech Airplane Ticket Booking App",
    description: "Cross-platform Flutter mobile app for seamless flight booking experience.",
    longDescription: "Professional flight booking mobile application built with Flutter and Dart. Features include flight search and filtering, seat selection, secure payment integration, booking management, user profiles, push notifications, offline support, and beautiful Material Design UI with smooth animations.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "Firebase", "Payment Gateway", "Material Design", "API Integration"],
    category: "mobile",
    github: "https://github.com/haw2727",
    liveLink: "https://demo.example.com",
    featured: true
  }
];

export const skills = {
  mobile: {
    title: "Mobile Development",
    description: "Cross-platform mobile applications with native performance",
    technologies: [
      {
        name: "Flutter",
        description: "Google's UI toolkit for building natively compiled applications",
        icon: "🎯",
        category: "Framework"
      },
      {
        name: "Dart",
        description: "Programming language optimized for building mobile, desktop, server, and web applications",
        icon: "🎪",
        category: "Language"
      },
      {
        name: "Android Studio",
        description: "Official IDE for Android development with Flutter support",
        icon: "🤖",
        category: "IDE"
      },
      {
        name: "VS Code",
        description: "Lightweight editor with excellent Flutter and Dart extensions",
        icon: "💻",
        category: "IDE"
      },
      {
        name: "Firebase",
        description: "Backend-as-a-Service for authentication, database, and cloud functions",
        icon: "🔥",
        category: "Backend Service"
      },
      {
        name: "SQLite",
        description: "Local database for offline data storage in mobile apps",
        icon: "💾",
        category: "Database"
      }
    ]
  },
  frontend: {
    title: "Frontend Development",
    description: "Modern web applications with responsive design and optimal performance",
    technologies: [
      {
        name: "React",
        description: "JavaScript library for building user interfaces with component-based architecture",
        icon: "⚛️",
        category: "Framework"
      },
      {
        name: "Next.js",
        description: "React framework with server-side rendering and static site generation",
        icon: "▲",
        category: "Framework"
      },
      {
        name: "JavaScript (ES6+)",
        description: "Modern JavaScript with latest ECMAScript features",
        icon: "🟨",
        category: "Language"
      },
      {
        name: "TypeScript",
        description: "Typed superset of JavaScript for better code quality and developer experience",
        icon: "📘",
        category: "Language"
      },
      {
        name: "HTML5",
        description: "Latest HTML standard with semantic elements and modern APIs",
        icon: "🌐",
        category: "Markup"
      },
      {
        name: "CSS3",
        description: "Advanced styling with animations, flexbox, and grid layouts",
        icon: "🎨",
        category: "Styling"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        icon: "💨",
        category: "Framework"
      }
    ]
  },
  backend: {
    title: "Backend Development",
    description: "Scalable server-side applications and RESTful APIs",
    technologies: [
      {
        name: "Node.js",
        description: "JavaScript runtime for building scalable server-side applications",
        icon: "🟢",
        category: "Runtime"
      },
      {
        name: "Express.js",
        description: "Fast, unopinionated web framework for Node.js applications",
        icon: "🚂",
        category: "Framework"
      },
      {
        name: "RESTful APIs",
        description: "Design and implementation of REST architectural style APIs",
        icon: "🌐",
        category: "Architecture"
      },
      {
        name: "JWT Authentication",
        description: "JSON Web Token implementation for secure user authentication",
        icon: "🔐",
        category: "Security"
      },
      {
        name: "Socket.io",
        description: "Real-time bidirectional event-based communication",
        icon: "⚡",
        category: "Real-time"
      },
      {
        name: "Middleware",
        description: "Custom middleware for authentication, validation, and error handling",
        icon: "🔗",
        category: "Architecture"
      }
    ]
  },
  database: {
    title: "Database Management",
    description: "Data modeling, storage, and retrieval optimization",
    technologies: [
      {
        name: "MongoDB",
        description: "NoSQL document database with flexible schema design",
        icon: "🍃",
        category: "NoSQL"
      },
      {
        name: "Mongoose",
        description: "MongoDB object modeling for Node.js with schema validation",
        icon: "🦫",
        category: "ODM"
      },
      {
        name: "PostgreSQL",
        description: "Advanced open-source relational database with JSON support",
        icon: "🐘",
        category: "SQL"
      },
      {
        name: "MySQL",
        description: "Popular relational database management system",
        icon: "🗄️",
        category: "SQL"
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching and session management",
        icon: "🔴",
        category: "Cache"
      },
      {
        name: "Database Design",
        description: "Schema design, indexing, and query optimization",
        icon: "📊",
        category: "Design"
      }
    ]
  },
  tools: {
    title: "Development Tools & DevOps",
    description: "Development workflow, version control, and deployment automation",
    technologies: [
      {
        name: "Git & GitHub",
        description: "Version control system with collaborative development workflows",
        icon: "📊",
        category: "Version Control"
      },
      {
        name: "Docker",
        description: "Containerization platform for consistent development and deployment",
        icon: "🐳",
        category: "DevOps"
      },
      {
        name: "AWS",
        description: "Cloud computing services for hosting and scaling applications",
        icon: "☁️",
        category: "Cloud"
      },
      {
        name: "Postman",
        description: "API development and testing platform",
        icon: "📮",
        category: "Testing"
      },
      {
        name: "Figma",
        description: "Collaborative design tool for UI/UX design and prototyping",
        icon: "🎯",
        category: "Design"
      },
      {
        name: "CI/CD",
        description: "Continuous integration and deployment pipelines",
        icon: "🔄",
        category: "Automation"
      }
    ]
  }
};

export const socialLinks = {
  github: "https://github.com/haw2727",
  linkedin: "https://linkedin.com/in/hawl-tumehari",
  twitter: "https://twitter.com/@HawltuM1993",
  email: "hawltumehari@gmail.com"
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    content: "Exceptional work on our dashboard redesign. The attention to detail and performance optimization was remarkable.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO at StartupXYZ",
    content: "Delivered our MVP ahead of schedule with clean, maintainable code. Highly recommended for complex React projects.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop"
  }
];