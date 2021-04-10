import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme, Button, Tabs, Link, GeistUIThemes } from '@geist-ui/react'
import { Coffee, Sun, Moon } from '@geist-ui/react-icons'
import config from '../config'
import { getConfig } from '../api'
import makeStyles from '../makeStyles'

interface MenuItem {
  title: string
  link: string
}

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  header: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: ui.palette.background,
    fontSize: 16,
    height: 60,
    zIndex: 15
  },
  headerContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${ui.layout.pageMargin}`
  },
  headerTitle: {
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10
  },
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: ui.palette.background,
    //borderBottom: `solid 1px ${ui.palette.accents_2}`,
    zIndex: 15
  },
  navFixed: {
    borderBottom: ui.type === 'light' && 'none',
    boxShadow: ui.type === 'light' && 'rgba(0, 0, 0, 0.1) 0 0 15px 0'
  },
  navContent: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    '& .tabs header': {
      padding: `0 ${ui.layout.pageMargin}`,
      borderBottom: 'none !important',
      flexWrap: 'nowrap !important',
      overflowY: 'hidden',
      overflowX: 'auto',
      overflow: '-moz-scrollbars-none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '& .content': {
      display: 'none !important'
    },
    '& .tab': {
      padding: '12px !important',
      margin: '0 !important',
      fontSize: '14px !important'
    }
  },
  sidebar: {
    display: 'flex',
    alignItems: 'center !important'
  },
  themeIcon: {
    width: '40px !important',
    height: '40px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginRight: 5,
    padding: '0 !important'
  },
  popover: {
    width: '180px !important'
  }
}));

const Header = ({ toggleDarkMode }: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [fixed] = useState(false);
  const isDark = theme.type === 'dark';
  const router = useRouter()
  const setTabValue = (val: string) => {
    router.push(val)
  }
  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <Link href={'/'}>
            <Coffee size={16} />
            <div style={{ display: 'flex' }}>
              <div className={classes.headerTitle}>Costinha</div>
            </div>
          </Link>
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
            initialValue={config.menu[0].link}
            onChange={val => setTabValue(val)}
          >
            {config.menu
              ? config.menu.map((item: MenuItem, idx: number) => (
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

export async function getStaticProps() {
  const { menu } = await getConfig()
  return {
    props: {
      menu,
    }
  }
}

export default Header;
