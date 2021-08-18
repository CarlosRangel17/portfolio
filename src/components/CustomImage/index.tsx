import { FunctionComponent, useState, useEffect, useContext } from 'react'
import { useWindowDimensions } from '~contexts/window-dimensions'

import customImages from '~consts/images'
import { ThemeContext } from '~contexts/theme'

interface Props {
  imageKey: string
  [rest: string]: unknown
}

const CustomImage: FunctionComponent<Props> = ({ imageKey, ...rest }) => {
  const { colorMode } = useContext(ThemeContext)

  const { innerWidth } = useWindowDimensions()
  const initState = customImages[imageKey]
  const [image, setImage] = useState({ ...initState })
  const imgSrc = image.darkSrc?.length > 0 && colorMode === 'dark' ? image.darkSrc : image.src

  useEffect(() => {
    if (!image.enableMobileDimensions || innerWidth > 768) {
      setImage({ ...initState })
    } else {
      setImage({ ...initState, width: '56px', height: '56px' })
    }
  }, [innerWidth])

  return <img alt={imgSrc} height={image.height} src={imgSrc} width={image.width} {...rest} />
}

export default CustomImage
