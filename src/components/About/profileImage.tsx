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
    : { src: './carlos-max.jpeg', width: '345px', height: '530.66px' }
  // const imageProps = headerImage
  //   ? { src: './carlos-rangel-2020.png', width: '100px', height: '100px' }
  //   : { src: './carlos-rangel-2019.png', width: '345px', height: '613.54px' }
  // const imageProps = headerImage
  //   ? { src: './carlos-rangel-2020.png', width: '100px', height: '100px' }
  //   : { src: './carlos-rangel-2019.png', width: '345px', height: '613.54px' }
  // 747, 1149
  useEffect(() => {
    if (innerWidth > 812) {
      setImage({ ...imageProps })
    } else if (innerWidth > 768 && innerWidth < 813) {
      setImage({ ...imageProps })
      // setImage({ ...imageProps, width: '172.5px', height: '265.33px' })
      // setImage({ src: imageSrc, width: '481px', height: '481px' })
    } else if (innerWidth > 425 && innerWidth < 769) {
      setImage({ ...imageProps })
      // setImage({ ...imageProps, width: '172.5px', height: '265.33px' })
      // setImage({ src: imageSrc, width: '354px', height: '354px' })
    } else if (innerWidth < 426) {
      setImage({ ...imageProps })
      // setImage({ ...imageProps, width: '172.5px', height: '265.33px' })
    }
  }, [innerWidth])

  return <img alt={image.src} className={styles.image} height={image.height} src={image.src} width={image.width} />
}

export default ProfileImage
