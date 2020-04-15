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
    green: {
      ...chakraTheme.colors.green,
      100: rgba(39, 217, 128, 0.1),
      200: rgba(39, 217, 128, 0.2),
      500: rgb(39, 217, 128),
      // success04: rgb(39, 217, 128, 0.4),
    },
    red: {
      ...chakraTheme.colors.red,
      500: '#ff6666',
    },
    brandGray: {
      16: rgba(83, 86, 92, 0.16),
      500: rgb(83, 86, 92),
    },
    brandBlue: {
      10: 'rgba(87, 143, 255, 0.12)',
      20: 'rgba(87, 143, 255, 0.24)',
      50: 'rgba(87, 143, 255, 0.24)',
      100: 'rgba(87, 143, 255, 0.24)',
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
    plus: {
      path: (
        <path
          fill="currentColor"
          d="M12.872 2c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v5.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 0 1-1.512-1.512C2.186 15.302 2 14.655 2 12.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2h5.744zm.238 2H7.128c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.206.385-.288.764-.297 1.9L4 12.872c0 1.324.078 1.727.298 2.138.162.304.388.53.692.692.411.22.814.298 2.138.298h5.744c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692.22-.411.298-.814.298-2.138V7.128c0-1.324-.078-1.727-.298-2.138a1.635 1.635 0 0 0-.692-.692c-.385-.206-.764-.288-1.9-.297zM11 6v3h3v2h-3v3H9v-3H6V9l3-.001V6h2z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'plus-solid': {
      path: (
        <g fill="none">
          <path
            fill="currentColor"
            d="M3.846 0h8.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v8.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-8.31c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 .4 14.464C.139 13.976 0 13.491 0 12.155v-8.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4C2.024.139 2.509 0 3.845 0z"
          />
          <g fill="#FFF">
            <path d="M7 4h2v8H7z" />
            <path d="M12 7v2H4V7z" />
          </g>
        </g>
      ),
      viewBox: '0 0 16 16',
    },
    publish: {
      path: (
        <g fill="none" fillRule="evenodd">
          <path
            fill="currentColor"
            d="M7.319 13.019l.985 4.634-2.445.52L4.759 13H4a1 1 0 01-1-1v-2a1 1 0 011-1h3c1.333 0 4-1.166 8-3.5V5a1 1 0 012 0l.001 4.063a2.001 2.001 0 010 3.874V17a1.001 1.001 0 01-2 0v-.5l-.75-.432c-3.302-1.883-5.612-2.9-6.932-3.049z"
          />
        </g>
      ),
      viewBox: '0 0 22 22',
    },
    info: {
      path: (
        <path
          fill="currentColor"
          d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM9 9h2v5H9V9zm0-3h2v2H9V6z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    'info-solid': {
      path: (
        <path
          fill="currentColor"
          d="M10 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm1 10H9v2h2v-2zm0-6H9v5h2V6z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    laptop: {
      path: (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 14h2a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8zM5 6v7h10V6H5z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    pic: {
      path: (
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M15.984 13.871c.011-.178.016-.408.016-.717V6.846c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.226-.12-.45-.164-1.368-.164H5.846c-.917 0-1.142.043-1.368.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368v6.308c0 .917.043 1.142.164 1.368.033.061.07.114.113.161L7.5 11l2.021 2.31L12.5 10l3.484 3.871zM5.846 3h8.308c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v6.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401h-8.31c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 15.464c-.262-.489-.401-.974-.401-2.31v-6.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 3.536 3.4C4.024 3.139 4.509 3 5.845 3zM7.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    more: {
      path: (
        <path
          fill="currentColor"
          d="M10 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    edit: {
      path: (
        <path
          fill="currentColor"
          d="M8.202 16.084l-4.243.707.707-4.243 3.536 3.536zm5.657-9.9l-7.071 7.071-1.415-1.414 7.072-7.071 1.414 1.414zm2.121 2.121L8.91 15.377l-1.414-1.415 7.07-7.07 1.415 1.413zm1.19-4.466c.42.42.619.75.726 1.103.107.354.107.716 0 1.07-.107.353-.305.683-.725 1.103l-.484.483-3.535-3.535.483-.484c.42-.42.75-.618 1.103-.725a1.817 1.817 0 0 1 1.07 0c.353.107.683.305 1.103.725l.26.26z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    delete: {
      path: (
        <path
          fill="currentColor"
          d="M8.586 10L6.293 7.707l1.414-1.414L10 8.586l2.293-2.293 1.414 1.414L11.414 10l2.293 2.293-1.414 1.414L10 11.414l-2.293 2.293-1.414-1.414L8.586 10zM10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    ads: {
      path: (
        <path
          fill="currentColor"
          d="M13.323 4c.578 0 .782.027 1.006.09.223.062.42.159.605.3.185.14.33.286.68.746l2.14 2.814c.463.608.582.867.66 1.174.076.307.074.612-.008.918-.082.306-.205.563-.677 1.164l-2.111 2.689c-.353.449-.497.59-.681.727a1.757 1.757 0 0 1-.6.292c-.22.06-.422.086-.992.086h-7.5c-1.336 0-1.821-.14-2.31-.4A2.726 2.726 0 0 1 2.4 13.464c-.262-.489-.401-.974-.401-2.31v-3.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 3.536 4.4C4.024 4.139 4.509 4 5.845 4h7.478zM7 7H4v5h1v-2h1v2h1V7zm3 0H8v5h2v-1H9V8h1V7zm5 0h-3v3h2v1h-2v1h3V9h-2V8h2V7zm-4 1h-1v3h1V8zM6 8v1H5V8h1z"
        />
      ),
      viewBox: '0 0 20 20',
    },
    cards: {
      path: (
        <g fill="none" fillRule="evenodd">
          <path
            fill="currentColor"
            d="M5.564 9h8.872c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v2.873c0 .892-.093 1.215-.267 1.54-.174.327-.43.583-.756.757-.326.174-.65.267-1.54.267H5.563c-.892 0-1.215-.093-1.54-.267-.327-.174-.583-.43-.757-.756-.174-.326-.267-.65-.267-1.54v-2.873c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267z"
          />
          <rect width="12" height="2" x="4" y="6" fill="#578FFF" rx="1" />
          <rect width="8" height="2" x="6" y="3" fill="#578FFF" rx="1" />
        </g>
      ),
      viewBox: '0 0 20 20',
    },
  },
}
