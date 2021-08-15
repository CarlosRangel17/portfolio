import React from 'react'

type Props = {
  fillColor?: string
  height?: string
  width?: string
  [x: string]: unknown // for the rest property
}

const TTU: React.FunctionComponent<Props> = ({ fillColor = 'white', width = '100px', height = '100px', ...rest }) => (
  <svg height={height} viewBox="0 0 100 100" fill="none" width={width} {...rest}>
    <rect width="100" height="100" fill="url(#pattern1)" />
    <defs>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image1" transform="scale(0.01)" />
      </pattern>
      <image
        id="image1"
        width="100"
        height="100"
        href="data:image/png;base64,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"
      />
    </defs>
  </svg>
)

export default TTU
