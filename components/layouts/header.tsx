import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme, Button, Tabs } from '@geist-ui/react'
import { Sun, Moon } from '@geist-ui/react-icons'

interface MenuItem {
  title: string
  link: string
}

const Header = ({ classes, toggleDarkMode }: any) => {
  const menu = [
    {
      title: 'About',
      link: '/',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
    {
      title: 'Open Source',
      link: '/open-source',
    },
    {
      title: 'Podcast',
      link: '/podcast',
    },
  ]
  const [activeTab, setActiveTab] = useState(menu[0].link)
  const theme = useTheme();
  const [fixed] = useState(false);
  const isDark = theme.type === 'dark';
  const router = useRouter()
  const setTabValue = (val: string) => {
    setActiveTab(val)
    router.push(val)
  }
  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <div className={classes.headerTitle}>Costinha</div>
          <div className={classes.sidebar}>
            <Button
              aria-label="Toggle Dark mode"
              className={classes.themeIcon}
              auto
              type="abort"
              onClick={toggleDarkMode}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </div>
        </div>
      </div>
      <nav className={classes.nav + ' ' + (fixed ? classes.navFixed : '')}>
        <div className={classes.navContent}>
          <Tabs
            initialValue={activeTab}
            value={activeTab}
            onChange={val => setTabValue(val)}
          >
            {menu
              ? menu.map((item: MenuItem, idx: number) => (
                  <Tabs.Item key={idx} label={item.title} value={item.link}>
                  </Tabs.Item>
                ))
              : null}
          </Tabs>
        </div>
      </nav>
    </>
  )
}

export default Header;
