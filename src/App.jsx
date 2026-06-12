import VelvetBackground from './components/VelvetBackground'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useTheme } from './context/ThemeContext'

export default function App() {
  const { theme } = useTheme()

  return (
    <VelvetBackground>
      <ThemeSwitcher />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '14px',
          letterSpacing: '4px',
          color: theme.primary,
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Together with our families
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(48px, 12vw, 80px)',
          color: theme.text,
          lineHeight: 1.1,
          textAlign: 'center',
        }}>
          Arkam
        </h1>
        <div style={{ color: theme.primary, fontSize: '32px', margin: '0.5rem 0', fontFamily: 'var(--font-display)' }}>&</div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(48px, 12vw, 80px)',
          color: theme.text,
          lineHeight: 1.1,
          textAlign: 'center',
        }}>
          Jumana
        </h1>
        <div style={{
          width: '80px',
          height: '1px',
          background: theme.primary,
          margin: '1.5rem auto',
        }} />
        <p style={{
          color: theme.accent,
          fontSize: '16px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
        }}>
          Friday · July 10, 2026 · 7:30 PM
        </p>
        <p style={{
          color: theme.textMuted,
          fontSize: '14px',
          marginTop: '0.5rem',
          fontFamily: 'var(--font-body)',
        }}>
          Pearl White Palace, Elamaldeniya
        </p>
      </div>
    </VelvetBackground>
  )
}