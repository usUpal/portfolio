const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '*',
  title: 'US.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Udyan Upal',
  role: 'Software Engineer',
  description:
    'I am a driven and passionate software engineer with a focus on creating innovative and user-friendly applications. With a solid foundation in programming and a willingness to learn, I am excited to tackle any challenge and contribute to the tech industry.',
  resume: 'https://drive.google.com/file/d/16dfEJIYqhy_bkSkmsWvcKQ4CbSLdJXPL/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/udyan-upal/',
    github: 'https://github.com/usupal',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 0',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 4',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Decentraland',
    description:
      'Web3 social media application ',
    stack: ['React', 'Javascript', 'Chakra-UI', 'GraphQL'],
    sourceCode: 'https://github.com/usUpal/d-social',
    livePreview: 'https://d-social.vercel.app/',
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

export { header, about, projects, skills, contact }
