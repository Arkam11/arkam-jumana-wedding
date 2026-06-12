// eslint-disable-next-line react-refresh/only-export-components
import { createContext, useContext, useState, useEffect } from 'react'

const themes = {
  'midnight-royal': {
    name: 'Midnight Royal',
    bg: '#1B2A6B',
    bgDark: '#141F4F',
    bgCard: '#1F3D8F22',
    primary: '#D4A96A',
    primaryDark: '#B8965A',
    primaryLight: '#E8C98A',
    accent: '#E8C4A0',
    text: '#F7F0E6',
    textMuted: '#D4A96Aaa',
    border: '#D4A96A44',
    velvetColor: '#1B2A6B',
  },
  'champagne-peach': {
    name: 'Champagne Peach',
    bg: '#F5E6D3',
    bgDark: '#EDD5BA',
    bgCard: '#E8C4A022',
    primary: '#1B2A6B',
    primaryDark: '#141F4F',
    primaryLight: '#1F3D8F',
    accent: '#D4A96A',
    text: '#1B2A6B',
    textMuted: '#1B2A6Baa',
    border: '#1B2A6B44',
    velvetColor: '#E8C4A0',
  },
  'gold-luxury': {
    name: 'Gold Luxury',
    bg: '#1a0f04',
    bgDark: '#0d0802',
    bgCard: '#D4A96A11',
    primary: '#D4A96A',
    primaryDark: '#B8965A',
    primaryLight: '#E8C98A',
    accent: '#E8C4A0',
    text: '#F7F0E6',
    textMuted: '#D4A96Aaa',
    border: '#D4A96A44',
    velvetColor: '#2C1A0A',
  },
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('wedding-theme') || 'midnight-royal'
  })

  const theme = themes[themeName]

  useEffect(() => {
    localStorage.setItem('wedding-theme', themeName)
    const root = document.documentElement
    root.style.setProperty('--t-bg', theme.bg)
    root.style.setProperty('--t-bg-dark', theme.bgDark)
    root.style.setProperty('--t-bg-card', theme.bgCard)
    root.style.setProperty('--t-primary', theme.primary)
    root.style.setProperty('--t-primary-dark', theme.primaryDark)
    root.style.setProperty('--t-primary-light', theme.primaryLight)
    root.style.setProperty('--t-accent', theme.accent)
    root.style.setProperty('--t-text', theme.text)
    root.style.setProperty('--t-text-muted', theme.textMuted)
    root.style.setProperty('--t-border', theme.border)
    root.style.setProperty('--t-velvet', theme.velvetColor)
  }, [themeName, theme])

  return (
    <ThemeContext.Provider value={{ theme, themeName, setThemeName, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}