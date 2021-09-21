/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(20),
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      marginLeft: theme.spacing(5),
    },
  },
  item: {
    marginRight: theme.spacing(3),
    textTransform: 'capitalize',
  },
  handleUserButton: {
    marginRight: theme.spacing(50),
    [theme.breakpoints.down('xl')]: {
      marginRight: theme.spacing(40),
    },
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(27),
    },
  },
  itemLogin: {
    backgroundColor: 'white',
    color: 'black',
    textTransform: 'capitalize',
    borderRadius: 13,
    width: 70,
    height: 30,
    marginTop: 9,
    marginRight: 30,
    marginLeft: 15,
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0px 0px 5px 0.5px white',
    },
  },
}))

export default useStyles
