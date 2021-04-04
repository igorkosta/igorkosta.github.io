import { useState } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import Header from '../_includes/header'
import { JssProvider } from 'react-jss'

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState('light')
  const toggleDarkMode = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  return (
    <JssProvider id={{ minify: true }}>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Header toggleDarkMode={toggleDarkMode} />
        <Component {...pageProps} />
      </GeistProvider>
    </JssProvider>
  )
}

export default App
