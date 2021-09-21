/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(6),
    },
  },
  image: {
    backgroundColor: '#fafafa',
    maxWidth: 300,
  },
  imageGetAppGoogle: {
    backgroundColor: '#fafafa',
    maxWidth: 200,
    marginTop: 20,
    marginLeft: 7,
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
    },
  },
  imageGetAppApple: {
    backgroundColor: '#fafafa',
    maxWidth: 200,
    marginTop: 20,
    marginRight: 7,
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
  },
  logo: {
    backgroundColor: '#fafafa',
    maxWidth: 50,
  },
}))

export default useStyles
