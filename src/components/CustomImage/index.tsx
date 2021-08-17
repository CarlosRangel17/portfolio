import { FunctionComponent, useState, useEffect } from 'react'
import { useWindowDimensions } from '~contexts/window-dimensions'

import customImages from '~consts/images'

interface Props {
  imageKey: string
  [rest: string]: unknown
}

const CustomImage: FunctionComponent<Props> = ({ imageKey, ...rest }) => {
  const { innerWidth } = useWindowDimensions()
  const initState = customImages[imageKey]
  const [image, setImage] = useState({ ...initState })

  useEffect(() => {
    if (!image.enableMobileDimensions || innerWidth > 768) {
      setImage({ ...initState })
    } else {
      setImage({ ...initState, width: '56px', height: '56px' })
    }
  }, [innerWidth])

  return <img alt={image.src} height={image.height} src={image.src} width={image.width} {...rest} />
}

export default CustomImage
