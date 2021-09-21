/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(0),
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
  },
  list: {
    textAlign: 'start',
    marginTop: 40,
    marginLeft: 20,
    [theme.breakpoints.down('md')]: {
      marginTop: 0,
      marginLeft: 0,
    },
  },
  listItem: {
    marginTop: 10,
  },
  blue: {
    color: '#3043E9',
    fill: '#3043E9',
    backgroundColor: '#fafafa',
  },
  image: {
    backgroundColor: '#fafafa',
    marginTop: 25,
    maxWidth: 210,
    [theme.breakpoints.down('lg')]: {
      marginLeft: 250,
    },
    [theme.breakpoints.down('xl')]: {
      marginLeft: 230,
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  shapeSection: {
    margin: 10,
  },
  diamondShape: {
    background: '#3043E9',
    height: 10,
    textAlign: 'center',
    transform: 'rotate(45deg)',
    width: 10,
  },
  textPowered: {
    marginLeft: 55,
  },
}))

export default useStyles
