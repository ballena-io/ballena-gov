import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const DARK_BLUE= "#1D3149";

export const colors = {
  DARK_BLUE,
  ACCENT_BLUE:  "#49BEFA",
  white: '#fff',
  black: '#000',
  darkBlue: '#2c3b57',
  blue: '#2F80ED',
  gray: '#e1e1e1',
  lightGray: '#737373',
  lightBlack: '#6a6a6a',
  darkBlack: '#141414',
  green: '#1abc9c',
  red: '#ed4337',
  orange: 'orange',
  pink: '#DC6BE5',
  compoundGreen: '#00d395',
  tomato: '#e56b73',
  purple: '#935dff',

  text: DARK_BLUE,
  lightBlue: '#2F80ED',
  topaz: '#0b8f92',
  darkGray: 'rgba(43,57,84,.5)',
  borderBlue: 'rgba(25, 101, 233, 0.5)',
};

const breakpoints = createBreakpoints({
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1800,
  },
});

export const custom = {
  accentBlueBorder: `1px solid ${colors.ACCENT_BLUE}`
}

const iswapTheme = {
  typography: {
    fontFamily: ['"dosis"', 'sans-serif'].join(','),
    color: DARK_BLUE,
    h1: {
      color: DARK_BLUE,
      fontSize: '52px',
      fontWeight: '600',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: 1.2,
      padding: '12px 0'
    },
    h2: {
      color: DARK_BLUE,
      fontSize: '42px',
      fontWeight: '600',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: 1.2,
    },
    h3: {
      color: DARK_BLUE,
      fontSize: '24px',
      fontWeight: '600',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: 1.2,
    },
    h4: {
      color: DARK_BLUE,
      fontSize: '16px',
      fontWeight: '600',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: 1.2,
    },
    h5: {
      color: DARK_BLUE,
      fontSize: '14px',
      fontWeight: '600',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      lineHeight: 1.2,
    },
    body1: {
      color: DARK_BLUE,
      fontSize: '16px',
      fontWeight: '300',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    body2: {
      color: DARK_BLUE,
      fontSize: '16px',
      fontWeight: '300',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
  type: 'light',
  overrides: {
    MuiSelect: {
      select: {
        padding: '9px',
      },
      selectMenu: {
        minHeight: '30px',
        display: 'flex',
        alignItems: 'center',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '4rem',
        padding: '10px 24px',
      },
      outlined: {
        padding: '10px 24px',
        borderWidth: '2px !important',
      },
      text: {
        padding: '10px 24px',
      },
      label: {
        textTransform: 'none',
        fontSize: '1rem',
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '16px',
        fontWeight: '600',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: 1.2,
      },
    },
    MuiOutlinedInput: {
      adornedEnd: {},
      input: {
        '&::placeholder': {
          color: colors.text,
        },
        color: colors.text,
        padding: '14px',
      },
      root: {
        // border: "none !important",
        borderRadius: '25px',
      },
      notchedOutline: {
        // border: "none !important"
      },
    },
    MuiSnackbar: {
      root: {
        maxWidth: 'calc(100vw - 24px)',
      },
      anchorOriginBottomLeft: {
        bottom: '12px',
        left: '12px',
        '@media (min-width: 960px)': {
          bottom: '50px',
          left: '80px',
        },
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: colors.white,
        padding: '0px',
        minWidth: 'auto',
        '@media (min-width: 960px)': {
          minWidth: '500px',
        },
      },
      message: {
        padding: '0px',
      },
      action: {
        marginRight: '0px',
      },
    },
    MuiExpansionPanel: {
      root: {
        border: custom.accentBlueBorder,
        borderRadius: '50px',
        margin: '8px 0px',
        '&:before': {
          //underline color when textfield is inactive
          backgroundColor: 'none',
          height: '0px',
        },
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          //underline color when textfield is inactive
          borderBottom: 'none !important',
        },
        '&:after': {
          //underline color when textfield is inactive
          borderBottom: 'none !important',
        },
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: '30px 42px',
      },
      content: {
        margin: '0px !important',
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '0 12px 15px 12px',
        '@media (min-width: 960px)': {
          padding: '0 24px 30px 24px',
        },
      },
    },
    MuiToggleButton: {
      root: {
        borderRadius: '50px',
        textTransform: 'none',
        minWidth: '100px',
        border: 'none',
        '& > span > h4': {
          color: '#555',
        },
        '&:hover': {
          backgroundColor: 'rgba(47,128,237, 0.2)',
        },
        '&$selected': {
          backgroundColor: '#2f80ed',
          '& > span > h4': {
            color: '#fff',
          },
          '&:hover': {
            backgroundColor: 'rgba(47,128,237, 0.2)',
            '& > span > h4': {
              color: '#000',
            },
          },
        },
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'none',
      },
    },
    MuiToggleButtonGroup: {
      root: {
        border: custom.accentBlueBorder,
        borderRadius: '50px',
      },
      groupedSizeSmall: {
        padding: '42px 30px',
      },
    },
    MuiFormControlLabel: {
      label: {
        color: colors.darkBlack,
      },
    },
  },
  palette: {
    primary: {
      main: colors.DARK_BLUE,
    },
    secondary: {
      main: colors.ACCENT_BLUE,
    },
    text: {
      primary: colors.text,
      secondary: colors.text,
    },
  },
  breakpoints: breakpoints,
};

export default iswapTheme;
