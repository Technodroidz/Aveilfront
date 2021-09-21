/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  ul: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  button: {
    marginBottom: theme.spacing(1),
    width: '150px',
    borderColor: '#000000',
    borderRadius: '20px',

    '&:hover': {
      color: '#ffffff',
      backgroundColor: '#000000',
    },
  },
  buttonsGetApp: {
    textAlign: 'start',
    [theme.breakpoints.up('md')]: {
      textAlign: 'end',
    },
  },
  titleButtonsGetApp: {
    marginRight: 25,
    textAlign: 'start',
    [theme.breakpoints.up('md')]: {
      textAlign: 'end',
    },
  },
  titleContactUs: {
    marginTop: 30,
    color: '#615F5F',
    textDecoration: 'underline',

    '&:hover': {
      color: '#000000',
    },
  },
  itemContactUs: {
    '&:hover': {
      color: '#000000',
    },
  },
}))

export default useStyles
