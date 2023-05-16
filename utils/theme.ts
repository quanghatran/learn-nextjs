import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
// import { Roboto } from 'next/font/google';

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// });

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: '"Heebo", sans-serif',
  },
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      light: '#edf7fa',
      main: '#00a8cc',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243d',
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
    MuiButton: {
      variants: [
        { props: { variant: 'contained', color: 'primary' }, style: { color: '#ffffff' } },
      ],
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        },
      },
      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#142850',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: 16,
          },
        },
      ],
    },
  },
});

// theme.typography.h3 = {
//   fontSize: '2rem',

//   [theme.breakpoints.up('md')]: {
//     fontSize: '3rem',
//   },
// };

theme = responsiveFontSizes(theme);
