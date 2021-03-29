import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anthony Preza | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Anthony Preza', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I\'m',
  name: 'Anthony',
  subtitle: 'I\'m a software engineer, machine learning hobbyist, and data science enthusiast.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I\'m currently a software engineer at Netflix. Before Netflix, I was a research assistant at a Caltech neuroscience laboratory. In my free time I love to play guitar, produce music, and skateboard.',
  paragraphTwo: 'I am a self-taught developer. I have experience writing code in Python, JavaScript, Golang, and Java. I love creating applications that help users better understand their data.',
  paragraphThree: 'My interests are machine learning, backend web development, computer vision, NLP, and all things neural networks.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    // img: 'project.jpg',
    title: 'Circa Survive Lyric Machine',
    info: 'A text generator based on the songs of Circa Survive',
    info2: '',
    url: 'https://circa-survive-lyric-machine.herokuapp.com',
    repo: 'https://github.com/anthonypreza/circa-survive-lyric-machine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // img: 'project.jpg',
    title: 'Flask + React Boilerplace',
    info: 'A boilerplate application built on top of Flask and React',
    info2: '',
    url: 'https://shrouded-shore-59842.herokuapp.com/',
    repo: 'https://github.com/anthonypreza/flask-react-boilerplate', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // img: 'project.jpg',
    title: 'Lyrical',
    info: 'Find lyrics to your top Spotify songs and see which words you\'re exposed to the most',
    info2: '',
    url: 'https://fierce-oasis-89537.herokuapp.com',
    repo: 'https://github.com/anthonypreza/lyrical-v0', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // img: 'project.jpg',
    title: 'COVID-19 CNN Classifier',
    info: 'Building and training a CNN classifier on COVID-19 X-ray images',
    info2: '',
    // url: '',
    repo: 'https://github.com/anthonypreza/COVID-19-CNN-classifier', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // img: 'project.jpg',
    title: 'Coronavirus Analysis',
    info: 'Simple analysis of coronavirus spread (pandas, matplotlib, sklearn)',
    info2: '',
    // url: '',
    repo: 'https://github.com/anthonypreza/coronavirus_notebook', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    // img: 'project.jpg',
    title: 'Pet Finder NLP + Visualization',
    info: 'Building a simple naive bayes classifier to predict if a pet is a cat or dog based on description + visualization of training data',
    info2: '',
    // url: '',
    repo: 'https://github.com/anthonypreza/pet-finder-nlp-vis', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Let\'s work together!',
  btn: 'Email Me',
  email: 'apreza@alum.mit.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/apreza',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anthonypreza',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
