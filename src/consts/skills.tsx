import { Skills } from '~interfaces/skill'
import CSS from '~svg/CSS'
import JavaScript from '~svg/JavaScript'
import HTML from '~svg/HTML'
import Sass from '~svg/Sass'
import TypeScript from '~svg/TypeScript'
import ReactJS from '~svg/React'
import Angular from '~svg/Angular'
import CSharp from '~svg/CSharp'
import JQuery from '~svg/jQuery'
import NodeJS from '~svg/NodeJS'
import Jest from '~svg/Jest'
import NETCore from '~svg/NETCore'
import Figma from '~svg/Figma'
import NextJS from '~svg/NextJS'
import SQLServer from '~svg/SQLServer'
import Git from '~svg/Git'
import NodeJSAlt from '~svg/NodeJSAlt'
import AngularAlt from '~svg/AngularAlt'

export const SkillsConfig: Skills = {
  javascript: {
    logo: <JavaScript />
  },
  html: {
    logo: <HTML />
  },
  css: {
    logo: <CSS />
  },
  sass: {
    logo: <Sass />
  },
  typescript: {
    logo: <TypeScript />
  },
  react: {
    logo: <ReactJS />
  },
  angular: {
    logo: <Angular />,
    alternate: <AngularAlt />
  },
  csharp: {
    logo: <CSharp />
  },
  jquery: {
    logo: <JQuery />
  },
  nodejs: {
    logo: <NodeJS />,
    alternate: <NodeJSAlt />
  },
  jestjs: {
    logo: <Jest />
  },
  netcore: {
    logo: <NETCore />
  },
  nextjs: {
    logo: <NextJS />,
    altBg: '#F0F0F0'
  },
  figma: {
    logo: <Figma />
  },
  git: {
    logo: <Git />
  },
  sqlserver: {
    logo: <SQLServer />,
    altBg: '#F0F0F0'
  }
}
