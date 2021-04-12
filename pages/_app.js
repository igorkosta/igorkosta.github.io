import { useState } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { JssProvider } from 'react-jss'
import Header from '../_includes/header'

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState('light')
  const toggleDarkMode = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  return (
    <JssProvider>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Header toggleDarkMode={toggleDarkMode} />
        <Component {...pageProps} />
      </GeistProvider>
    </JssProvider>
  )
}

export default App
