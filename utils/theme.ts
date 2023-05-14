import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
// import { Roboto } from 'next/font/google';

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: '"Heebo", sans-serif',
  },
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      main: '#00a8cc',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@medial (min-width: 600px)': {
            maxWidth: '680px',
          },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@medial (min-width: 900px)': {
            maxWidth: '860px',
          },
        },
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: {
          color: '#000000',

          '&:hover, &.active': {
            color: '#ff6464',
          },
        },
      },
    },
  },
  // typography: {
  //   fontFamily: roboto.style.fontFamily,
  // },
});
