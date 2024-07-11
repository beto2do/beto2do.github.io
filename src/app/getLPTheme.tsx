'use client';
import type { } from '@mui/material/themeCssVarsAugmentation';
import { ThemeOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface ColorRange {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  }

  interface PaletteColor extends ColorRange {}
}

export const brand = {
  50: '#e9eef9',
  100: '#c6d4f1',
  200: '#9fb9e8',
  300: '#769ddf',
  400: '#5185d8',
  500: '#1c6fd2',
  600: '#0f66c8',
  700: '#005bbb',
  800: '#0051af',
  900: '#003f9a',
};

export const secondary = {
  50: '#efeff0',
  100: '#d5d8de',
  200: '#babfc8',
  300: '#9ea5b3',
  400: '#8991a2',
  500: '#747e92',
  600: '#666f81',
  700: '#545b6a',
  800: '#444954',
  900: '#31343c',
};

export const info = {
  50: '#f3e6f4',
  100: '#e1c0e5',
  200: '#d096d6',
  300: '#bd6cc6',
  400: '#af4bba',
  500: '#a12daf',
  600: '#9329a9',
  700: '#8024a1',
  800: '#701f99',
  900: '#51188b',
};

export const gray = {
  50: '#f9f8fb',
  100: '#f1f0f3',
  200: '#e7e5e9',
  300: '#d6d5d8',
  400: '#b1b0b3',
  500: '#919093',
  600: '#69686b',
  700: '#565558',
  800: '#373739',
  900: '#181719',
};

export const green = {
  50: '#f2f8e6',
  100: '#ddedc0',
  200: '#c6e197',
  300: '#afd56c',
  400: '#9ccd48',
  500: '#89c41c',
  600: '#79b412',
  700: '#63a002',
  800: '#4e8c00',
  900: '#226b00',
};

export const red = {
  50: '#ffecee',
  100: '#ffcfd2',
  200: '#fa9c98',
  300: '#f47570',
  400: '#ff5549',
  500: '#ff4429',
  600: '#f63b2b',
  700: '#e42f25',
  800: '#d7271d',
  900: '#c71a0f',
};

export const yellow = {
  50: '#fffee8',
  100: '#fefac6',
  200: '#fdf69f',
  300: '#fcf278',
  400: '#f9ed59',
  500: '#f6e83b',
  600: '#ffdf3f',
  700: '#fdc736',
  800: '#fbaf2d',
  900: '#f7871d',
};

function getLPTheme(): ThemeOptions {
  return {
    palette: {
        mode: 'dark',
        primary: {
        light: brand[200],
        main: brand[300],
        dark: brand[800],
        contrastText: brand[100],
        },
        secondary: {
            light: secondary[400],
            main: secondary[500],
            dark: secondary[900],
        },
        info: {
            light: info[50],
            main: info[100],
            dark: info[100],
        },
        warning: {
            light: yellow[400],
            main: yellow[500],
            dark: yellow[700],
        },
        error: {
            light: red[400],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[400],
            main: green[500],
            dark: green[700],
        },
        grey: {
        50: gray[50],
        100: gray[100],
        200: gray[200],
        300: gray[300],
        400: gray[400],
        500: gray[500],
        600: gray[600],
        700: gray[700],
        800: gray[800],
        900: gray[900],
        },
        divider: gray[600],
        background: {
            default: gray[900],
            paper: gray[900],
        },
        text: {
            primary: gray[500],
            secondary: gray[400],
        },
        action: {
            selected: brand[800],
        },
    },
    typography: {
      h1: {
        fontSize: 60,
        fontWeight: 600,
        lineHeight: 78 / 70,
        letterSpacing: -0.2,
      },
      h2: {
        fontSize: 48,
        fontWeight: 600,
        lineHeight: 1.2,
      },
      h3: {
        fontSize: 42,
        lineHeight: 1.2,
      },
      h4: {
        fontSize: 36,
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: 20,
        fontWeight: 600,
      },
      h6: {
        fontSize: 18,
      },
      subtitle1: {
        fontSize: 18,
      },
      subtitle2: {
        fontSize: 16,
      },
      body1: {
        fontWeight: 400,
        fontSize: 15,
      },
      body2: {
        fontWeight: 400,
        fontSize: 14,
      },
      caption: {
        fontWeight: 400,
        fontSize: 12,
      },
    },
    components: {
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
          disableGutters: true,
        },
        styleOverrides: {
          root: {
            padding: 8,
            overflow: 'clip',
            backgroundColor: gray[900],
            border: 'none',
            ':before': {
              backgroundColor: 'transparent',
            },
          }
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            border: 'none',
            borderRadius: 8,
            '&:hover': { backgroundColor: gray[800] },
          },
        },
      },
      MuiAccordionDetails: {
        styleOverrides: {
          root: { mb: 20, border: 'none' },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            ...(ownerState.color === 'primary' && {
              color: gray[900],
            })
          }),
        },
      },
    },
    }
}

const theme = createTheme(getLPTheme());
export default theme;
