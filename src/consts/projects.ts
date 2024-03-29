import Project, { Projects } from '~interfaces/project'

// const portfolio: Project = {
//   title: 'Portfolio',
//   description: 'A custom built portfolio webpage to showcase my projects, background, and interests.',
//   technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
//   publicImage: 'portfolio.png',
//   githubUrl: 'https://github.com/CarlosRangel17/portfolio',
//   siteUrl: 'https://crangel-portfolio.vercel.app/'
// }

const donationBox: Project = {
  title: 'Donation Box',
  description: 'A mobile-first UI that enables a visitor to donate funds to a smart contract (Görli network).',
  technologies: ['Web3', 'Blockchain', 'Solidity', 'Ethereum', 'Hardhat', 'Javascript', 'ReactJS', 'NextJS'],
  githubUrl: 'https://github.com/CarlosRangel17/donation-box',
  siteUrl: 'https://donation-box.vercel.app'
}

const tictactoe: Project = {
  title: 'Tic Tac Toe',
  description: 'Play a classic 3x3 game of Tic Tac Toe with your friends! Built using React Hooks and SASS.',
  technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/CarlosRangel17/tictactoe',
  siteUrl: 'https://carlosrangel17.github.io/tictactoe/'
}

const fabricchain: Project = {
  title: 'Fabric Consultant Chain',
  description: 'Permissioned blockchain network to manage consultant and client assets.',
  technologies: ['Hyperledger Fabric', 'Blockchain', 'Golang', 'Chaincode', 'Docker', 'AngularJS', 'Node.js'],
  githubUrl: 'https://github.com/CarlosRangel17/fabric-consultantchain'
  // siteUrl: ''
}

const walkit: Project = {
  title: 'WalkIT',
  description:
    'A healthcare fitness app that incentives patients to maintain daily fitness goals to earn and redeem blockchain tokens at participating vendors.',
  technologies: ['Blockchain', 'C#', 'Ethereum', 'AngularJS'],
  siteUrl: 'https://www.youtube.com/watch?v=h_xXlQs0J6I'
  // siteUrl: ''
}

const weatherapp: Project = {
  title: 'Weather App',
  description:
    'A Weather app using the Open Weather Map API to make calls to a restful api to return the current weather data.',
  technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/CarlosRangel17/weather-react-app',
  siteUrl: 'https://weather-react-engine.web.app/'
}

const wetherapp: Project = {
  title: 'Wether App',
  description: 'A wETH to ETH Conversion App that interfaces directly with a smart contract.',
  technologies: ['Blockchain', 'Solidity', 'Ethereum', 'Javascript', 'ReactJS'],
  githubUrl: 'https://github.com/CarlosRangel17/wetherapp'
  // siteUrl: ''
}

const marvelSearchEngine: Project = {
  title: 'Marvel Search Engine',
  description:
    'A search engine using the official Marvel Developer API. Search for all things Marvel (i.e Comics, Characters, Events, Series, etc.)',
  technologies: ['Angular 7', 'Javascript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/CarlosRangel17/angular-marvel-engine',
  siteUrl: 'https://angular-marvel-engine.firebaseapp.com/'
}

const organicShop: Project = {
  title: 'Organic Shop',
  description: 'An organic shop application built with Angular and Firebase',
  technologies: ['Angular 7', 'Javascript', 'HTML5', 'CSS3', 'Firebase'],
  githubUrl: 'https://github.com/CarlosRangel17/organic-shop',
  siteUrl: 'https://organic-shop-1d9aa.web.app/'
}

const cometx: Project = {
  title: 'CometX',
  description:
    'CometX is a .NET library that allows you to use custom domain classes to perform any number of data accessing requirements.',
  technologies: ['C#', '.NET Framework'],
  githubUrl: 'https://github.com/CarlosRangel17/CometX'
  // siteUrl: 'https://organic-shop-1d9aa.web.app/'
}

const sogetiHackathon: Project = {
  title: 'Sogeti Hackathon Website',
  description:
    "A hackathon site for Sogeti professionals to collaborate and create projects that enhance the org's ability to deliver on unified offerings of cloud-based development, modern quality & assurance practices.",
  technologies: ['AngularJS', 'CSS3', 'HTML5', 'Azure'],
  // githubUrl: 'https://github.com/CarlosRangel17/CometX'
  siteUrl: 'https://sogeti-hackathon.azurewebsites.net/'
}

const sogetiHackathonAdmin: Project = {
  title: 'Sogeti Hackathon Admin Site',
  description:
    'A CMS to organize Sogeti hackathons, and manage hackathon registrations and team participation. Powered by insights & data leveraging PowerBI.',
  technologies: ['C#', 'Azure', 'PowerBI', '.NET Framework MVC', 'AngularJS', 'jQuery'],
  // githubUrl: ''
  siteUrl: 'https://api-sogeti-hackathon.azurewebsites.net/'
}

const mattressMatcher: Project = {
  title: 'Mattress Matcher',
  description:
    'A quiz and recommendation app that takes the guesswork out of mattress shopping and matches the best products as recommended by Sleep Experts.',
  technologies: ['React', 'NextJS', 'SASS', 'CSS3'],
  // githubUrl: ''
  siteUrl: 'https://www.mattressfirm.com/mattressmatcher'
}

const deliveryTracker: Project = {
  title: 'Delivery Tracker',
  description:
    'An app that provides real time shipment tracking for customers with an integrated Google Map. Adheres to customer privacy, security, and accessibility.',
  technologies: ['React', 'NextJS', 'SASS', 'CSS3'],
  // githubUrl: ''
  siteUrl: 'https://www.mattressfirm.com/track'
}

const mfcl: Project = {
  title: 'MF Component Library',
  description:
    'A robust component library used for Mattress Firm’s React applications, and adhere to best practices, web accessibility, and performance.',
  technologies: ['React', 'NextJS', 'SASS', 'CSS3'],
  // githubUrl: ''
  siteUrl: 'https://mf-cl.vercel.app/'
}

export const personalProjects: Projects = {
  marvelSearchEngine,
  walkit,
  fabricchain,
  organicShop,
  wetherapp,
  weatherapp,
  sogetiHackathonAdmin,
  cometx
}

const projects: Projects = {
  donationBox,
  deliveryTracker,
  mattressMatcher,
  mfcl,
  tictactoe,
  sogetiHackathon
}

export default projects
