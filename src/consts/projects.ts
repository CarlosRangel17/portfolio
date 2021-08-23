import Project, { Projects } from '~interfaces/project'

// const portfolio: Project = {
//   title: 'Portfolio',
//   description: 'A custom built portfolio webpage to showcase my projects, background, and interests.',
//   technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
//   publicImage: 'portfolio.png',
//   githubUrl: 'https://github.com/CarlosRangel17/portfolio',
//   siteUrl: 'https://crangel-portfolio.vercel.app/'
// }

const tictactoe: Project = {
  title: 'Tic Tac Toe',
  description:
    'A Weather app using the Open Weather Map API to make calls to a restful api to return the current weather data.',
  technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/CarlosRangel17/tictactoe',
  siteUrl: 'https://carlosrangel17.github.io/tictactoe/'
}

const weatherapp: Project = {
  title: 'Weather App',
  description:
    'A Weather app using the Open Weather Map API to make calls to a restful api to return the current weather data.',
  technologies: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/CarlosRangel17/weather-react-app',
  siteUrl: 'https://weather-react-engine.web.app/'
}

const marvelSearchEngine: Project = {
  title: 'Marvel Search Engine',
  description: 'A search engine for all things Marvel. (i.e Comics, Characters, Events, Series, etc.)',
  technologies: ['Angular 7', 'Javascript', 'HTML5', 'CSS3'],
  githubUrl: 'https://github.com/CarlosRangel17/angular-marvel-engine',
  siteUrl: 'https://angular-marvel-engine.web.app/'
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
  githubUrl: 'https://github.com/CarlosRangel17/organic-shop'
  // siteUrl: 'https://organic-shop-1d9aa.web.app/'
}

// const projects: Project[] = [portfolio, ticTacToe, weatherapp, marvelSearchEngine, organicShop, cometx]
const projects: Projects = {
  tictactoe,
  weatherapp,
  marvelSearchEngine,
  organicShop,
  cometx
}

export default projects
