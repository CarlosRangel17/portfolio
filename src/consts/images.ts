import { PortolioImage } from '~interfaces/images'

const images: PortolioImage = {
  about: { src: './carlos-max.jpeg', width: '345px', height: '530.66px' },
  portfolio: { src: './tech-wizard.png', darkSrc: './tech-wizard-blue.png', width: '100px', height: '100px' },
  portfolio_dark: { src: './tech-wizard-blue.png', width: '100px', height: '100px' },
  edx: { src: './EDX.png', width: '100px', height: '100px', enableMobileDimensions: true },
  ibm: { src: './IBM.png', width: '100px', height: '100px', enableMobileDimensions: true },
  microsoft: { src: './Microsoft.png', width: '100px', height: '100px', enableMobileDimensions: true },
  ttu: { src: './TTU.png', width: '100px', height: '100px', enableMobileDimensions: true },
  uta: { src: './UTA.png', width: '100px', height: '100px', enableMobileDimensions: true }
}

export default images
