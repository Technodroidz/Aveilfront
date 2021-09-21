/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fafafa',
    paddingLeft: '20%',
  },
  title: {
    color: 'black',
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
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  item: {
    marginRight: theme.spacing(3),
    textTransform: 'capitalize',
  },
  items: {
    marginRight: theme.spacing(3),
  },
}))

export default useStyles
