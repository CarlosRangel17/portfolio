import { MenuItem } from '~interfaces/header'

import { useContext, useMemo } from 'react'
import { ThemeContext } from '~contexts/theme'
import { ScrollSpyContext } from '~contexts/scroll-spy'
import { menuItems } from '~consts/header'
import clsx from 'clsx'

import styles from './header.module.scss'

export const Navigation = () => {
  const { colorMode } = useContext(ThemeContext)
  const { activeSection } = useContext(ScrollSpyContext)

  const scrollTo = (sectionId: string) => {
    const { offsetTop } = document.getElementById(sectionId)
    if (sectionId === 'About Me') {
      window.scrollTo({ top: offsetTop - 40, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: offsetTop - 45, behavior: 'smooth' })
    }
  }

  const handleNavigationClick = (item: MenuItem) => {
    const { id, title } = item
    scrollTo(id || title)
  }

  return useMemo(
    () => (
      <ul className={clsx(styles.list, colorMode === 'dark' && styles.dark)}>
        {menuItems.map((item: MenuItem) => (
          <li
            key={item.title}
            className={activeSection === menuItems.indexOf(item) ? styles.active : ''}
            onClick={() => handleNavigationClick(item)}
          >
            <a>{item.title}</a>
          </li>
        ))}
      </ul>
    ),
    [activeSection, colorMode]
  )
}
