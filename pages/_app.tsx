import { useState } from 'react'
import { GeistProvider, CssBaseline, GeistUIThemes } from '@geist-ui/react'
import Header from '../components/layouts/header'
import '../styles/costinha.css'
import makeStyles from '../makeStyles'

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
  themeIcon: {
    width: '40px !important',
    height: '40px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginRight: 5,
    padding: '0 !important'
  },
}));


const App = ({ Component, pageProps }) => {
  const classes = useStyles();
  const [themeType, setThemeType] = useState('light')
  const toggleDarkMode = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Header classes={classes} toggleDarkMode={toggleDarkMode} />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default App
