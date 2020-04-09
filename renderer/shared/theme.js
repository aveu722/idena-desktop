import {theme as chakraTheme} from '@chakra-ui/core'
import {rem as remp, rgb, rgba} from 'polished'
import {margin} from './components/system/spacings'

const colors = {
  primary: rgb(87, 143, 255),
  primary2: rgb(83, 86, 92),
  text: rgb(83, 86, 92),
  muted: rgb(150, 153, 158),
  gray: rgb(245, 246, 247),
  gray2: rgb(232, 234, 237),
  gray3: rgba(83, 86, 92, 0.3),
  gray4: rgb(210, 212, 217),
  gray5: rgb(64, 64, 64),
  white: rgb(255, 255, 255),
  white05: rgba(255, 255, 255, 0.5),
  white01: rgba(255, 255, 255, 0.1),
  danger: rgb(255, 102, 102),
  danger01: rgba(255, 102, 102, 0.1),
  danger02: rgba(255, 102, 102, 0.2),
  warning: rgb(255, 163, 102),
  warning02: rgba(255, 163, 102, 0.2),
  warning04: rgba(255, 163, 102, 0.4),
  success: rgb(39, 217, 128),
  success01: rgba(39, 217, 128, 0.1),
  success02: rgba(39, 217, 128, 0.2),
  success04: rgb(39, 217, 128, 0.4),
  black: rgb(17, 17, 17),
  black0: rgb(0, 0, 0),
}

const fontSizes = {
  base: 13,
  heading: '2rem',
  subHeading: '1.4em',
  blockHeading: '1rem',
  normal: '1rem',
  small: '0.72rem',
  medium: '1.2rem',
  large: '1.4em',
  large18: 18,
}

const fontWeights = {
  normal: 400,
  medium: 500,
  semi: 600,
  bold: 700,
}

const spacings = {
  xxsmall: '0.1em',
  small: '0.5em',
  small4: 4,
  small8: 8,
  small12: 12,
  normal: '1em',
  medium16: 16,
  medium24: 24, // TODO: rename it more meaningful from design system perspective
  medium32: 32,
  large: 80,
  large48: 48,
  large64: 64,
  xlarge: '2em',
  xxlarge: '3em',
  xxxlarge: '4em',
}

export default {
  colors,
  spacings,
  fontSizes,
  fontWeights,
  Box: {
    w: '',
    bg: '',
  },
  Flex: {
    direction: 'initial',
    justify: 'initial',
    align: 'initial',
  },
  Heading: {
    color: colors.text,
    fontSize: fontSizes.heading,
    fontWeight: fontWeights.semi,
    ...margin(0),
  },
  SubHeading: {
    color: colors.text,
    fontSize: fontSizes.subHeading,
    fontWeight: fontWeights.semi,
    ...margin(0),
  },
  BlockHeading: {
    color: colors.text,
    fontSize: fontSizes.blockHeading,
    fontWeight: fontWeights.medium,
    ...margin(0),
  },
  Text: {
    color: colors.text,
    fontSize: fontSizes.normal,
    fontWeight: fontWeights.normal,
  },
  Link: {
    color: colors.text,
    fontSize: fontSizes.normal,
    fontWeight: fontWeights.normal,
    textDecoration: 'none',
  },
  Button: {
    color: colors.text,
    size: fontSizes.base,
  },
}

export function rem(value) {
  return remp(value, fontSizes.base)
}

const fonts = {
  ...chakraTheme.fonts,
  body: `"Inter var", Inter, system-ui, sans-serif`,
}

const breakpoints = ['40em', '52em', '64em']

export const uiTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: '#16161D',
    gray: {
      ...chakraTheme.colors.gray,
      50: '#f5f6f7',
      100: '#e8eaed',
    },
    brandGray: {
      500: rgb(83, 86, 92),
    },
    brandBlue: {
      10: 'rgba(87, 143, 255, 0.12)',
      20: 'rgba(87, 143, 255, 0.24)',
      50: '#578fff',
      100: '#578fff',
      200: '#578fff',
      300: '#447ceb',
      400: '#447ceb',
      500: '#578fff',
      600: '#447ceb',
      700: '#447ceb',
    },
    muted: '#96999e',
  },
  fonts,
  breakpoints,
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
}
