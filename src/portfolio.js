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
    medium: 'https://medium.com/@u.saha.upal',
    twitter: 'https://twitter.com/udyan_upal' 
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Amazona',
    description:
      'Amazona is an e-commerce website built using Next.js, a popular React framework for server-side rendering. It allows users to browse through different products, add items to their cart, and securely checkout with payment integration. The site is designed with a clean and modern UI, making it easy to navigate and use for online shopping.',
    stack: ['NextJS', 'TypeScript', 'TailwindCSS'],
    sourceCode: 'https://github.com/usUpal/amazona-ecommerce',
    livePreview: 'https://next-tailwind-amazona.vercel.app/',
  },
  {
    name: 'ShareME',
    description:
      'ShareMe is a social media photo sharing application developed with ReactJS and Tailwind CSS. It is built on the MERN stack, allowing users to share their favorite photos and connect with others through likes, comments, and sharing. With a sleek and intuitive user interface, ShareMe is designed to make photo sharing easy and enjoyable for everyone.',
    stack: ['ReactJS', 'JavaScript', 'TailwindCSS', 'MongoDB', 'ExpressJS'],
    sourceCode: 'https://github.com/usUpal/shareme-social-media',
    livePreview: 'https://share-me-sanity.netlify.app/login',
  },
  {
    name: 'beFit',
    description:
      'Befit is a fitness tracking application that uses Next.js and Tailwind CSS for the front-end and Python FastAPI for the back-end. It allows users to track their fitness goals, monitor their progress, meditation and view workout history. With a sleek and intuitive interface,Befit is perfect for those looking to take control of their fitness journey.',
    stack: ['NextJS', 'Tailwind', 'JavaScript', 'Python', 'FastAPI'],
    sourceCode: 'https://github.com/usUpal/befit-fullstack',
    livePreview: 'https://befit-tracker.vercel.app/',
  },
  {
    name: 'Jobify',
    description:
      'Jobify is a user-friendly job management application built using ReactJS, Node.js, and MongoDB. It allows users to easily create, manage, and track job postings, as well as applicant information and their progress in the hiring process. Jobify also provides analytics and reporting features to help employers make data-driven decisions.',
    stack: ['ReactJS', 'JavaScript', 'MongoDB', 'ExpressJS'],
    sourceCode: 'https://github.com/usUpal/jobify-mern',
    livePreview: 'https://www.jobify.live/landing',
  },
  {
    name: 'Github Profilee',
    description:
      "Github-profilee is an application using ReactJS. The app allows users to search for Github profiles and displays relevant information, including the user's bio, repositories, and followers. This application utilizes the Github API to retrieve and display user data in a clean and intuitive UI.With this project, users can quickly and easily search for Github users and discover more about their contributions to the platform.",
    stack: ['ReactJS', 'JavaScript', 'ContextAPI', 'oAuth'],
    sourceCode: 'https://github.com/usUpal/github-profile',
    livePreview: 'https://github-profileee.netlify.app/login',
  },
  {
    name: 'Decentraland',
    description: "Decentraland is a cutting-edge decentralized web3 social media application that aims to create a secure and censorship-resistant social network. Built using ReactJS and utilizing the Lens API, D-Social offers microblogging features that enable users to share content and interact with one another in a completely decentralized environment",
    stack: ['React', 'Javascript', 'Chakra-UI', 'GraphQL'],
    sourceCode: 'https://github.com/usUpal/d-social',
    livePreview: 'https://d-social.vercel.app/',
  },
  {
    name: 'Bug Fixer',
    description: "Bug Fixer is a ReactJS App with Tailwind CSS! This web application uses ReactJS, Tailwind CSS, and Axios to allow users to input code and issues and then find possible bugs using Open AI's API.",
    stack: ['React', 'Javascript', 'axios', 'tailwindcss', 'openai'],
    sourceCode: 'https://github.com/usUpal/bug-fixar',
    livePreview: 'https://bug-fixar.vercel.app/',
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
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'udyan.upal@gmail.com',
}
const landing = {
  // all the properties are optional - can be left empty or deleted
  title: 'Hi, my name is',
  name: 'Udyan Upal',
  subtitle: "I'm the Unknown Developer.",
  cta: 'Know more',
}

export { header, about, projects, skills, contact }
