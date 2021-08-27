import { FunctionComponent } from 'react'
import SectionLayout from '~layout/SectionLayout'

import styles from './skills.module.scss'
import JavaScript from '~svg/JavaScript'
import CSharp from '~svg/CSharp'
import ReactJS from '../../svg/React'
import Angular from '~svg/Angular'
import React from 'react'
import HTML from '~svg/HTML'
import Sass from '~svg/Sass'
import Jest from '~svg/Jest'
import NodeJS from '~svg/NodeJS'
import CSS from '~svg/CSS'
import JQuery from '~svg/jQuery'
import SQLServer from '~svg/SQLServer'
import TypeScript from '~svg/TypeScript'
import Figma from '~svg/Figma'
import NETCore from '~svg/NETCore'
import NextJS from '~svg/NextJS'
import Git from '~svg/Git'

interface Props {
  [rest: string]: unknown
}

const Skills: FunctionComponent<Props> = ({ ...rest }) => {
  // rgba(0, 0, 0, 0.035)
  const skillLogos = [
    <JavaScript />,
    <HTML />,
    <CSS />,
    <Sass />,
    <TypeScript />,
    <ReactJS />,
    <Angular />,
    <CSharp />,
    <JQuery />,
    <NodeJS />,
    <Jest />,
    <NETCore />,
    <Figma />,
    <NextJS />,
    <SQLServer />,
    <Git />
  ]
  const formatSkills = skillLogos.map((logo: JSX.Element =>
    React.cloneElement(logo, {
      key: skillLogos.indexOf(logo),
      height: '150px',
      style: {
        // background: `rgba(200, 200, 200, ${0.035 * (n + 1)})`
      },
      width: '150px'
    })
  )

  return (
    <SectionLayout title="Skills" {...rest}>
      <div className={styles.container}>{formatSkills}</div>
    </SectionLayout>
  )
}
export default Skills
