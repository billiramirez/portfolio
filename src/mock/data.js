const { nanoid } = require('nanoid');

// HEAD DATA
const headData = {
  title: 'Billi Ramirez', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Hi, I'm a Full Stack Software Engineer `, // e.g: Welcome to my website
};

// HERO DATA
const heroData = {
  title: 'Hi! My name is',
  name: 'Billi Ramirez',
  subtitle: `Hi, I'm a Full Stack Software Engineer`,
  cta: `Let's get to know us better`,
};

// ABOUT DATA
const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I'm really passionate about the Javascript ecosystem. I have extensive experience with Nodejs, GraphQL, Reactjs, React Native, and many others. `,
  paragraphTwo: `Fast learner with excellent organizational, soft skills, time management prioritization, follow-up, and the ability to work both independently and within a team environment. I am proud of being oriented in customer satisfaction and support.`,
  paragraphThree: `I'm really passionate about Javascript ecosystem,  I'm the host of a Podcast called Devs Nicaraga Podcast, available in all podcast platforms`,
  resume: 'https://dev.to/billiramirez', // if no resume, the button will not show up
};

// PROJECTS DATA
const projectsData = [
  {
    id: nanoid(),
    img: 'covid-api.png',
    title: 'Covid-19 Statistics Express API',
    info:
      'This Nodejs API is for creating adding new cases, deaths, tests, to a MongoDb database, this client uses Nextjs, with secured routes using jwt, passportjs, middlewares, Swagger and OpenAPI specification',
    info2:
      'You can sign up, sign in and add new records, make a search by country name, and check the deatails of a country',
    url: 'https://covid-statistics-prod.herokuapp.com/v1/statistics',
    repo: 'https://github.com/billiramirez/statistics-covid-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'covid-client.png',
    title: 'Nextjs Covid-19 Statistics App',
    info:
      'This Nextjs App is for consuming adding new cases, deaths, tests, to a Nodejs API, this client uses Nextjs, with secured routes using jwt, this app was deployed to Netlify.',
    info2:
      'You can sign up, sign in and add new records, make a search by country name, and check the deatails of a country',
    url: 'https://statistics-covid-19-consumer.netlify.app/',
    repo: 'https://github.com/billiramirez/statistics-covid-19-ui', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wimix-dashboard.png',
    title: 'CMS Portal for Wifi Connections',
    info:
      'This was able to Create New Pages, Surveys, Sign In Forms, customized from a backend built with Nodejs and GraphQL, then you had access to a dashboard for displaying all the collected data',
    info2:
      'The data was persistant through MongoDB, for the Client Side I made use of Reactjs and Apollo Client. This app runs in a intranet for the company that was built for',
    url: '',
    repo: 'https://github.com/billiramirez/wi-dash-v2/tree/no-apollo-server', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'la-estacion-de-cine-v2.png',
    title: 'Podcast Website using Gatsby/Contentful',
    info:
      'I am really into the JAMStack thing, so I took a starter from Gatsby and Contenful, to fetch the episodes from a Spanish Podcast',
    info2:
      'This project is using a Headless CMS called Contentful and Gatsby, this also make use of the webhook of netlify, so every publish, should trigger a new build',
    url: 'https://la-estacion-de-cine-v2.netlify.app/',
    repo: 'https://github.com/billiramirez/la-estacion-de-cine-v2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'typescript-todo-app.png',
    title: 'Projects Managment with Typescript',
    info:
      'This app was made with a OOP approach using typescript, this app is not using any UI framework that all, is only Vanilla JS',
    info2:
      'This app goal is to create new projects with the description and people on them, I am not persisting data though',
    url: 'https://drag-drop-typescript-oop.netlify.app/',
    repo: 'https://github.com/billiramirez/drag-drop-typescript', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-jam-stack.png',
    title: 'Todo App with JAMStack',
    info:
      'This app was created using the JAMStack, which I found pretty amazing, this get along pretty well with and Static Site Generator, Gatsby.js.',
    info2:
      'One of the benefits using JAMStack approach is using serverless functions, this project is using Netlify Serverless Functions, and for persistant data I am using FaunaDB, a GraphlQL Based Database',
    url: 'https://todo-jamstack-with-faunadb.netlify.app/',
    repo: 'https://github.com/billiramirez/todo-jamstack-with-faunadb', // if no repo, the button will not show up
  },
];

// CONTACT DATA
const contactData = {
  cta: `Let's make your ideas alive`,
  btn: 'Contact Me',
  email: 'ramirezbilly42@outlook.com',
};

// FOOTER DATA
const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/billiramirezdev',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/billiramirez',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/billiramirez/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/billiramirez',
    },
  ],
};

// Github start/fork buttons
const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

module.exports = {
  headData,
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  githubButtons,
};
