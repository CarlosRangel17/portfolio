import { MenuItem } from '~interfaces/header'

import { useContext, useMemo, FunctionComponent } from 'react'
import { ThemeContext } from '~contexts/theme'
import { ScrollSpyContext } from '~contexts/scroll-spy'
import { menuItems, projectMenuItems } from '~consts/header'
import clsx from 'clsx'
import smoothscroll from 'smoothscroll-polyfill'

import styles from './header.module.scss'
import { Page } from '~interfaces/layout'

interface Props {
  page?: Page
}

export const Navigation: FunctionComponent<Props> = ({ page = 'homepage' }) => {
  const { colorMode } = useContext(ThemeContext)
  const { activeSection } = useContext(ScrollSpyContext)
  const items = page === 'homepage' ? menuItems : projectMenuItems

  const scrollTo = (sectionId: string) => {
    // https://github.com/iamdustan/smoothscroll
    // kick off the polyfill for Safari 6+, IE browsers
    smoothscroll.polyfill()
    const { offsetTop } = document.getElementById(sectionId)
    if (sectionId === 'About Me') {
      window.scrollTo({ top: offsetTop - 40, behavior: 'smooth' })
    } else if (sectionId === 'Skills') {
      window.scrollTo({ top: offsetTop - 35, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: offsetTop - 45, behavior: 'smooth' })
    }
  }

  const handleNavigationClick = (item: MenuItem) => {
    const { id, title, url } = item
    if (!url) {
      scrollTo(id || title)
    }
  }

  return useMemo(
    () => (
      <ul className={clsx(styles.list, colorMode === 'dark' && styles.dark)}>
        {items.map((item: MenuItem) => (
          <li
            key={item.title}
            className={activeSection === items.indexOf(item) + 1 ? styles.active : ''}
            onClick={() => handleNavigationClick(item)}
          >
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    ),
    [activeSection, colorMode]
  )
}
