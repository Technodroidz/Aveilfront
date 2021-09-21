/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#000639',
    margin: 20,
    borderRadius: 13,
    [theme.breakpoints.up('xl')]: {
      height: '62vh',
      margin: 40,
    },
    [theme.breakpoints.only('xs')]: {
      height: '140vh',
      margin: 0,
    },
    [theme.breakpoints.only('sm')]: {
      height: '140vh',
      margin: 0,
    },
  },
  title: { fontWeight: 700, marginLeft: 60, color: '#f4f4f6', marginTop: 90 },
  subTitle: {
    marginLeft: 60,
    marginTop: 15,
    fontWeight: 530,
    color: '#b0aeb1',
  },
  counter: { marginLeft: 60, marginTop: 15, fontWeight: 530, color: '#b0aeb1' },
  rootChips: {
    marginLeft: 50,
    marginTop: 20,
    marginRight: 20,
    display: 'flex',
    justifyContent: 'space-betwen',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2, 4, 1, 1),
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 45,
      margin: theme.spacing(1, 1, 1, 1),
    },
  },
  doneButton: {
    borderRadius: 20,
    textTransform: 'capitalize',
    marginTop: '7%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2%',
    },
  },
  chip: {
    paddingLeft: 10,
    paddingRight: 10,
    '&:focus': {
      backgroundColor: '#3043e9',
      color: 'white',
    },
  },
}))

export default useStyles
