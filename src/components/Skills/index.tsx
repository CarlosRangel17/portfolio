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

    if (colorMode === 'dark' && altBg?.length > 0) {
      return (
        <div
          key={key}
          style={{
            background: `${altBg}`,
            display: 'flex',
            alignItems: 'center',
            borderRadius: '150px',
            maxHeight: '125px',
            marginTop: '20px'
          }}
        >
          {skillLogo}
        </div>
      )
    }
    return React.cloneElement(skillLogo, {
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
