import React from 'react'

type Props = {
  fillColor?: string
  height?: string
  width?: string
  [x: string]: unknown // for the rest property
}

const Sun: React.FunctionComponent<Props> = ({ fillColor = 'white', width = '15px', height = '15px', ...rest }) => (
  <svg height={height} viewBox="0 0 15 15" width={width} fill={fillColor} {...rest}>
    <path
      d="M7.5 10.625C9.22589 10.625 10.625 9.22589 10.625 7.5C10.625 5.77411 9.22589 4.375 7.5 4.375C5.77411 4.375 4.375 5.77411 4.375 7.5C4.375 9.22589 5.77411 10.625 7.5 10.625Z"
      stroke={fillColor}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 0.625V1.875" stroke={fillColor} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 13.125V14.375" stroke={fillColor} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M2.63672 2.63751L3.52422 3.52501"
      stroke={fillColor}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.4766 11.475L12.3641 12.3625"
      stroke={fillColor}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M0.625 7.5H1.875" stroke={fillColor} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.125 7.5H14.375" stroke={fillColor} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M2.63672 12.3625L3.52422 11.475"
      stroke={fillColor}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.4766 3.52501L12.3641 2.63751"
      stroke={fillColor}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Sun
