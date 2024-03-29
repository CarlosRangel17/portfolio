import { FunctionComponent } from 'react'
import ProjectPage from '~components/Pages/projectPage'
import Layout from '~layout/Layout'

const Projects: FunctionComponent = () => (
  <Layout page="projects">
    <ProjectPage />
  </Layout>
)

export default Projects
