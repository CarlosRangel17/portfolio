import React from 'react'

type Props = {
  fillColor?: string
  height?: string
  width?: string
  [x: string]: unknown // for the rest property
}

const Success: React.FunctionComponent<Props> = ({
  fillColor = '#28a745',
  width = '24px',
  height = '24px',
  ...rest
}) => (
  <svg height={height} viewBox="0 0 24 24" width={width} {...rest}>
    <path
      d="M8.80004 15.905L5.30004 12.405C5.11519 12.2178 4.86309 12.1125 4.60004 12.1125C4.33699 12.1125 4.0849 12.2178 3.90004 12.405C3.51004 12.795 3.51004 13.415 3.90004 13.805L8.09004 17.995C8.48004 18.385 9.11004 18.385 9.50004 17.995L20.1 7.40499C20.49 7.01499 20.49 6.39499 20.1 6.00499C19.9152 5.81784 19.6631 5.71251 19.4 5.71251C19.137 5.71251 18.8849 5.81784 18.7 6.00499L8.80004 15.905Z"
      fill={fillColor}
    />
  </svg>
)

export default Success
