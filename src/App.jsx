import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
function App() {
  const [themeMode, setThemeMode] = useState('light')


  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen justify-center items-center">
        <h1 className='text-7xl bg-gradient-to-b from-sky-700 to-green-700 bg-clip-text text-transparent  text-center font-bold '>Themes Switcher </h1>
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
            <ThemeBtn />
           

          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>


    </ThemeProvider>

  )
}

export default App
