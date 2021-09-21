/* import external modules */
import { createMuiTheme } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3043E9',
    },
    secondary: {
      main: '#E5E5E5',
    },
    action: {
      disabledBackground: '#2d3580',
      disabled: '#E5E5E5',
    },
  },
})

export default theme
