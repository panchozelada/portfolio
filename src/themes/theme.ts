import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          mobilesm: 410,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      }
});