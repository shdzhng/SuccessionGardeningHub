import { createTheme } from '@mui/material/styles';
import { green, purple, yellow, pink } from '@mui/material/colors';

export const colors = {
  darkBrown: '#6c584c',
  mediumBrown: '#434315',
  lightBrown: '#a98467',
  darkGreen: '#606f49',
  mediumGreen: '#adc178',
  lightGreen: '#dde5b6',
  offWhite: '#f0ead2',
  offGrey: '#747470',
};

export const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'autocomplete-descrip' },
          style: {
            fontSize: '0.9em',
            fontWeight: 400,
          },
        },
        {
          props: { variant: 'autocomplete-title' },
          style: {
            fontSize: '1em',
            fontWeight: 600,
          },
        },
      ],
    },
  },
  palette: {
    common: {
      black: colors.offGrey,
      white: colors.offWhite,
    },
    primary: {
      main: colors.darkBrown,
      dark: colors.darkBrown,
      contrastText: colors.offWhite,
    },
    secondary: {
      main: colors.darkBrown,
      contrastText: colors.offWhite,
    },
    text: {
      primary: colors.mediumBrown,
      secondary: colors.darkBrown,
    },
    background: {
      paper: colors.lightGreen,
      dirt: colors.offWhite,
    },
  },
});
