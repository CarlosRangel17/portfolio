import { SocialMediaLink } from '~interfaces/header'
import Github from '~svg/Github'
import Twitter from '~svg/Twitter'
import LinkedIn from '~svg/LinkedIn'

function getIcon(link: SocialMediaLink, height?: string, width?: string) {
  switch (link.name) {
    case 'github':
      return <Github height={height} width={width} />
    case 'linkedin':
      return <LinkedIn height={height} width={width} />
    case 'twitter':
      return <Twitter height={height} width={width} />
    default:
      return <></>
  }
}

export default getIcon
