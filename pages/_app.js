import { useState } from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { JssProvider, SheetsRegistry } from 'react-jss'
import Header from '../components/layouts/header'
import '../styles/costinha.css'

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState('light')
  const toggleDarkMode = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  const sheets = new SheetsRegistry()

  return (
    <JssProvider id={{ minify: true }} registry={sheets}>
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Header toggleDarkMode={toggleDarkMode} />
        <Component {...pageProps} />
      </GeistProvider>
    </JssProvider>
  )
}

export default App
