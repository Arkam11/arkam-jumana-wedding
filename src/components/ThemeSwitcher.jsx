import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const themeColors = {
  'midnight-royal': { dot: '#1B2A6B', ring: '#D4A96A', label: 'Royal' },
  'champagne-peach': { dot: '#E8C4A0', ring: '#1B2A6B', label: 'Peach' },
  'gold-luxury': { dot: '#2C1A0A', ring: '#D4A96A', label: 'Gold' },
}

export default function ThemeSwitcher() {
  const { themeName, setThemeName } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100 }}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              bottom: '56px',
              right: 0,
              background: 'var(--t-bg-dark, #141F4F)',
              border: '1px solid var(--t-border)',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              minWidth: '130px',
            }}
          >
            {Object.entries(themeColors).map(([key, val]) => (
              <button
                key={key}
                onClick={() => { setThemeName(key); setOpen(false) }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: themeName === key ? 'var(--t-border)' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  cursor: 'pointer',
                  width: '100%',
                }}
              >
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: val.dot,
                  border: `2px solid ${val.ring}`,
                  flexShrink: 0,
                }} />
                <span style={{
                  color: 'var(--t-text)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                }}>
                  {val.label}
                </span>
                {themeName === key && (
                  <span style={{ color: 'var(--t-primary)', marginLeft: 'auto', fontSize: '12px' }}>✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(o => !o)}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'var(--t-primary)',
          border: '2px solid var(--t-primary-light)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }}
      >
        🎨
      </motion.button>
    </div>
  )
}