import { SocialMediaLink, MenuItem } from '~interfaces/header'

export const menuItems: MenuItem[] = [
  // { title: 'Home' },
  { title: 'Projects', id: 'Recent Projects' },
  { title: 'About', id: 'About Me' },
  { title: 'Skills' },
  { title: 'Contact' },
  {
    title: 'Resume',
    url: 'https://github.com/CarlosRangel17/portfolio/raw/develop/public/Carlos%20Rangel%202021%20Resume.pdf'
  }
]

export const links: SocialMediaLink[] = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/rangel-r-carlos/'
  },
  {
    name: 'github',
    url: 'https://github.com/CarlosRangel17/'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/ctrustmachine'
  }
]

export const titles: string[] = ['App Developer', 'Full-Stack Engineer', 'Web Designer']
// export const titles: string[] = ['Software Consultant', 'Full-Stack Developer', 'UI/UX Design']
// export const titles: string[] = ['Software Engineer', 'Mariachi Musician', 'Tech Wizard']
// export const titles: string[] = ['Software Engineer', 'Mariachi Musician', 'UTA Graduate']
// export const titles: string[] = ['App Developer', 'Software Consultant', 'Web Design']
