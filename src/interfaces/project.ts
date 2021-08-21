interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  siteUrl?: string
}

export type Projects = {
  [key: string]: Project
}

export default Project
