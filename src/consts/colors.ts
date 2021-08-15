interface Theme {
  light: string
  dark: string
}

interface Colors {
  text: Theme
  background: Theme
  primary: Theme
  secondary: Theme
  gray300?: Theme
  gray500?: Theme
  gray700?: Theme
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'

const COLORS: Colors = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // white
    dark: 'hsl(0deg, 0%, 100%)' // near-black
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)', // white
    // dark: 'hsl(250deg, 70%, 7%)' // navy navy blue
    dark: 'hsl(0, 0%, 0%)' // navy navy blue
  },
  primary: {
    // light: 'hsl(340deg, 100%, 40%)', // Pinkish-red
    // dark: 'hsl(50deg, 100%, 50%)' // Yellow
    light: '#000', // Pinkish-red
    dark: '#fff' // Yellow
  },
  secondary: {
    light: 'hsl(250deg, 100%, 50%)', // Purplish-blue
    dark: 'hsl(190deg, 100%, 40%)' // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)'
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)'
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)'
  }
}

export default COLORS
