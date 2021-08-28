interface Skill {
  logo: JSX.Element
  alternate?: JSX.Element
  altBg?: string
}

export type Skills = {
  [key: string]: Skill
}

export default Skill
