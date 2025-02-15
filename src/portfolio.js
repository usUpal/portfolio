//'https://drive.google.com/file/d/16dfEJIYqhy_bkSkmsWvcKQ4CbSLdJXPL/view?usp=sharing',
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://usupal.vercel.app/',
  title: 'US.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Udyan Upal',
  role: 'Software Engineer',
  description:
    'I am a driven and passionate software engineer with a focus on creating innovative and user-friendly applications. With a solid foundation in programming and a willingness to learn, I am excited to tackle any challenge and contribute to the tech industry.',
  resume:
    'https://flowcv.com/resume/watu6ktoqg',
  social: {
    linkedin: 'https://www.linkedin.com/in/udyan-upal/',
    github: 'https://github.com/usupal',
    medium: 'https://medium.com/@udyan_upal',
    twitter: 'https://twitter.com/udyan_upal' 
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'VoiceERP',
    description:
      "Voicerp is an automated call system that uses SIP numbers for outbound customer engagement, such as advertising campaigns. It integrates GCP's Text-to-Speech for dynamic speech and MP3 playback, with call recordings managed by Jambonz and stored in Google Cloud Storage. The frontend is built with Next.js, using Redux for state management and Tailwind CSS for a responsive UI. A modular Express.js API powers the backend, ensuring seamless integration with web-based systems. Fully containerized with Docker, it leverages MySQL to manage call logs, customer data, and campaign details.",
    stack: [
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Express.js",
      "Jambonz",
      "Google Cloud Text-to-Speech",
      "Google Cloud Storage",
      "MySQL",
      "Docker",
      "SIP",
      "Node.js"
    ],
    sourceCode: '',
    livePreview: 'https://app.voiceerp.com',
  },
  {
    name: 'Pantoneclo, e-commerce',
    description: "Developed an Nginx geo-routing system using GeoIP to redirect traffic based on user location for localized access. Built the frontend with Nuxt.js and Tailwind CSS for a fast, responsive user experience. The backend, powered by Nest.js, ensures seamless data handling and integration. Integrated Amazon Route 53 for efficient DNS management and hosted servers on Amazon EC2 for scalability. Implemented load balancing and a CI/CD pipeline with Jenkins to automate deployments and optimize performance. Enhanced user experience with country-specific website routing, enabling seamless internationalization.",
    stack: [
      "Nuxt.js",
      "Tailwind CSS",
      "Next.js",
      "Nginx",
      "GeoIP",
      "Amazon Route 53",
      "Amazon EC2",
      "Jenkins",
      "CI/CD",
      "Load Balancing"
    ],
    sourceCode: '',
    livePreview: 'https://pantoneclo.com',
  },
  {
    name: 'Beige: A Photographer Booking Platform',
    description: "Developed a full-stack MERN application with Next.js for server-side rendering and React Router/Redux for a dynamic, stateful UI. Built a RESTful API using Express.js and MongoDB to manage user data, bookings, and authentication. Integrated Google Maps API for location-based search and Google Cloud Storage for secure media handling. Containerized the application with Docker for scalability and optimized performance. Showcased expertise in full-stack development and cloud integration with GCP services.",
    stack: [
      "Next.js",
      "React Router",
      "Redux",
      "Express.js",
      "MongoDB",
      "Google Maps API",
      "Google Cloud Storage",
      "Docker",
      "GCP"
    ],
    sourceCode: '',
    livePreview: 'https://www.beigevideo.com/',
  },
  {
    name: 'KEOS AI SUITE',
    description: "Built scalable AI-driven solutions, including a RAG system with OpenAI API, Weaviate, Redis, and MySQL. Developed V-PASS, an AI-powered VoIP system using ReactJS, Express.js, PostgreSQL, and Twilio. Created KEOS GPT, an LLM orchestration tool with Next.js, ReactFlow, OpenAI GPT, and Togather AI. Leveraged Docker for seamless deployment, showcasing expertise in AI, NLP, backend architecture, databases, and interactive UI design.",
    stack: [
      "OpenAI API",
      "Weaviate",
      "Redis",
      "MySQL",
      "ReactJS",
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Twilio API",
      "ReactFlow",
      "Togather AI",
      "Docker",
      "NLP",
      "AI",
      "RAG"
    ],
    sourceCode: '',
    livePreview: 'https://keosgpt.keoscx.com/',
  },
  {
    name: 'TLDR; Article Summarizer(Chrome Extension)',
    description: "Developed a Chrome extension for summarizing articles using a FastAPI backend and Gemini-Pro for efficient text summarization. Supports Bengali and English content summarization from public URLs, enabling quick access to condensed information. Designed for personal use with seamless browser integration for summarizing lengthy articles. Future enhancements include expanding support for summarizing YouTube video content. Demonstrates expertise in Chrome extension development, FastAPI, and multilingual NLP.",
    stack: [
      "Chrome Extension",
      "FastAPI",
      "Gemini-Pro",
      "NLP",
      "Multilingual Support"
    ],
    sourceCode: 'https://github.com/usUpal/article-summarizer',
    livePreview: 'https://drive.google.com/file/d/13B-aHY5v7SGxRCnvwxajX7RgJlQ6hbAO/view?usp=sharing'
  },
  {
    name: 'Amazona',
    description:
      'Amazona is an e-commerce website built using Next.js, a popular React framework for server-side rendering. It allows users to browse through different products, add items to their cart, and securely checkout with payment integration. The site is designed with a clean and modern UI, making it easy to navigate and use for online shopping.',
    stack: ['NextJS', 'TypeScript', 'TailwindCSS'],
    sourceCode: 'https://github.com/usUpal/amazona-ecommerce',
    livePreview: 'https://next-tailwind-amazona.vercel.app/',
  },
  // {
  //   name: 'ShareME',
  //   description:
  //     'ShareMe is a social media photo sharing application developed with ReactJS and Tailwind CSS. It is built on the MERN stack, allowing users to share their favorite photos and connect with others through likes, comments, and sharing. With a sleek and intuitive user interface, ShareMe is designed to make photo sharing easy and enjoyable for everyone.',
  //   stack: ['ReactJS', 'JavaScript', 'TailwindCSS', 'MongoDB', 'ExpressJS'],
  //   sourceCode: 'https://github.com/usUpal/shareme-social-media',
  //   livePreview: 'https://share-me-sanity.netlify.app/login',
  // },
  // {
  //   name: 'beFit',
  //   description:
  //     'Befit is a fitness tracking application that uses Next.js and Tailwind CSS for the front-end and Python FastAPI for the back-end. It allows users to track their fitness goals, monitor their progress, meditation and view workout history. With a sleek and intuitive interface,Befit is perfect for those looking to take control of their fitness journey.',
  //   stack: ['NextJS', 'Tailwind', 'JavaScript', 'Python', 'FastAPI'],
  //   sourceCode: 'https://github.com/usUpal/befit-fullstack',
  //   livePreview: 'https://befit-tracker.vercel.app/',
  // },
  // {
  //   name: 'Jobify',
  //   description:
  //     'Jobify is a user-friendly job management application built using ReactJS, Node.js, and MongoDB. It allows users to easily create, manage, and track job postings, as well as applicant information and their progress in the hiring process. Jobify also provides analytics and reporting features to help employers make data-driven decisions.',
  //   stack: ['ReactJS', 'JavaScript', 'MongoDB', 'ExpressJS'],
  //   sourceCode: 'https://github.com/usUpal/jobify-mern',
  //   livePreview: 'https://www.jobify.live/landing',
  // },
  {
    name: 'Github Profilee',
    description:
      "Github-profilee is an application using ReactJS. The app allows users to search for Github profiles and displays relevant information, including the user's bio, repositories, and followers. This application utilizes the Github API to retrieve and display user data in a clean and intuitive UI.With this project, users can quickly and easily search for Github users and discover more about their contributions to the platform.",
    stack: ['ReactJS', 'JavaScript', 'ContextAPI', 'oAuth'],
    sourceCode: 'https://github.com/usUpal/github-profile',
    livePreview: 'https://github-profileee.netlify.app/login',
  },
  // {
  //   name: 'Decentraland',
  //   description: "Decentraland is a cutting-edge decentralized web3 social media application that aims to create a secure and censorship-resistant social network. Built using ReactJS and utilizing the Lens API, D-Social offers microblogging features that enable users to share content and interact with one another in a completely decentralized environment",
  //   stack: ['React', 'Javascript', 'Chakra-UI', 'GraphQL'],
  //   sourceCode: 'https://github.com/usUpal/d-social',
  //   livePreview: 'https://d-social.vercel.app/',
  // },
  {
    name: 'Bug Fixer',
    description: "Bug Fixer is a ReactJS App with Tailwind CSS! This web application uses ReactJS, Tailwind CSS, and Axios to allow users to input code and issues and then find possible bugs using Open AI's API.",
    stack: ['React', 'Javascript', 'axios', 'tailwindcss', 'openai'],
    sourceCode: 'https://github.com/usUpal/bug-fixar',
    livePreview: 'https://bug-fixar.vercel.app/',
  },
  {
    name: 'Redux Shopping Cart',
    description: "shopping cart application built using Redux, a popular state management library for JavaScript applications. The shopping cart allows users to browse a selection of products, add items to their cart, and manage the cart's contents seamlessly with firebase.",
    stack: ['React', 'Javascript', 'firebase', 'materialui', 'Redux'],
    sourceCode: 'https://github.com/usUpal/redux-cart',
    livePreview: 'https://redux-cart-khaki.vercel.app',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Tailwind',
  'Material UI',
  'Git',
  'NodeJS',
  'ExpressJS',
  'Python3',
  'django',
  'MongoDB',
  'SQL',
  'GraphQL',
  'FastAPI',
  'Docker',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'udyan.upal@gmail.com',
}
const landing = {
  // all the properties are optional - can be left empty or deleted
  title: 'Hi, my name is',
  name: 'Udyan Upal',
  subtitle: "I'm the software Developer.",
  cta: 'Know more',
}

export { header, about, projects, skills, contact }
