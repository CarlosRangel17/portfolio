import { FunctionComponent, useContext } from 'react'
import SectionLayout from '~layout/SectionLayout'

import styles from './skills.module.scss'
import React from 'react'
import { SkillsConfig } from '~consts/skills'
import { ThemeContext } from '~contexts/theme'

interface Props {
  [rest: string]: unknown
}

const Skills: FunctionComponent<Props> = ({ ...rest }) => {
  const { colorMode } = useContext(ThemeContext)

  const formatSkills = Object.keys(SkillsConfig).map((key: string) => {
    const { logo, alternate, altBg } = SkillsConfig[key]
    const skillLogo = colorMode === 'dark' && alternate ? alternate : logo
    const skill =
      colorMode === 'dark' && altBg?.length > 0 ? (
        <div style={{ background: `${altBg}`, display: 'flex', alignItems: 'center' }}>{skillLogo}</div>
      ) : (
        skillLogo
      )
    return React.cloneElement(skill, {
      key: key,
      height: '150px',
      width: '150px'
    })
  })

  return (
    <SectionLayout title="Skills" {...rest}>
      <div className={styles.container}>{formatSkills}</div>
    </SectionLayout>
  )
}
export default Skills
