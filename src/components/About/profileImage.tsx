import { FunctionComponent, useState, useEffect } from 'react'
import { useWindowDimensions } from '~contexts/window-dimensions'

import styles from './about.module.scss'

interface Props {
  headerImage?: boolean
}

const ProfileImage: FunctionComponent<Props> = ({ headerImage = false }) => {
  const { innerWidth } = useWindowDimensions()
  const [image, setImage] = useState({ src: '', width: '', height: '' })
  const imageProps = headerImage
    ? { src: './carlos-rangel-2020.png', width: '100px', height: '100px' }
    : { src: './carlos-rangel-2019.png', width: '345px', height: '613.54px' }

  useEffect(() => {
    if (innerWidth > 768) {
      setImage({ ...imageProps })
      // setImage({ src: imageSrc, width: '481px', height: '481px' })
    } else if (innerWidth > 425 && innerWidth < 769) {
      setImage({ ...imageProps })
      // setImage({ src: imageSrc, width: '354px', height: '354px' })
    } else if (innerWidth < 426) {
      setImage({ ...imageProps })
    }
  }, [innerWidth])

  return <img alt={image.src} className={styles.image} height={image.height} src={image.src} width={image.width} />
}

export default ProfileImage
