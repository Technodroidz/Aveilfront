/* import external modules */
import { TextField } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#000639',
  },
  title: {
    color: 'white',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(7, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 20,
  },
  linkForgotPassword: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  signup: {
    borderRadius: 20,
    marginBottom: theme.spacing(2),
    color: '#000639',
    background: 'white',
  },
  textWhite: {
    color: 'white',
  },
  textGray: {
    color: 'gray',
  },
  inputTextColor: {
    color: 'white',
  },
}))

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
      opacity: '69%',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        opacity: '69%',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3043E9',
      },
    },
    borderRadius: 10,
    color: 'white',
  },
})(TextField)
