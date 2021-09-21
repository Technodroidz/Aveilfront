/* import external modules */
import { TextField } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { makeStyles, withStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    background: '#000639',
  },
  title: {
    color: 'white',
  },
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: theme.spacing(3),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    borderRadius: 20,
    margin: theme.spacing(3, 0, 2),
  },
  datePicker: {
    width: '100%',
  },
  signin: {
    borderRadius: 20,
    marginBottom: theme.spacing(2),
    color: '#000639',
    background: 'white',
  },
  textWhite: {
    color: 'white',
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

export const CssKeyboardDatePicker = withStyles({
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
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& svg.MuiSvgIcon-root': {
      color: 'white',
    },
    borderRadius: 10,
    color: 'white',
  },
})(KeyboardDatePicker)
