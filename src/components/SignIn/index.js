/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Grid,
  Avatar,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
} from '@material-ui/core'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* import internal modules */
import LogoImage from '../../assets/logo.png'
import { useStyles, CssTextField } from './styles'
import { setLoginData } from '../../redux/actions/user/user'
import { setHandleAlert } from '../../redux/actions/common/common'
import { sendPasswordReset, signInWithEmailPassword } from '../../apis/users'
import Loading from '../common/Loading'

const SignIn = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [dataForm, setDataForm] = useState({
    email: '',
    password: '',
    remember: false,
  })
  const [loading, setLoading] = useState(false)
  const loginData = useSelector((state) => state.user.loginData)
  const [_sendPasswordReset, setSendPasswordReset] = useState(false)

  useEffect(() => {
    setDataForm(loginData)
  }, [])

  useEffect(() => {
    handleSaveData()
  }, [dataForm])

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const onChangeDataForm = (event) => {
    const type = event.target.type

    if (type === 'checkbox') {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.checked,
      })
    }

    if (type === 'text' || type === 'password') {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,
      })
    }
  }

  const sendPasswordResetFunction = () => {
    const { email } = dataForm

    if (email) {
      sendPasswordReset(email)
        .then(() => {
          const successAlert = {
            message: 'E-mail send',
            severity: 'success',
            status: true,
          }

          setSendPasswordReset(false)
          showMessageAlert(successAlert)
        })
        .catch((error) => {
          const message = error?.response?.data?.message

          const errorAlert = {
            message: message ? message : 'Algo ocurrió en el servidor',
            severity: 'error',
            status: true,
          }

          setSendPasswordReset(false)
          showMessageAlert(errorAlert)
          console.error(`${error.code} -> ${error.message}`)
        })
    }

    validateRequiredFields(email, 'password') /* Only email is required */
  }

  const validateRequiredFields = (email, password) => {
    if (!email || !password) {
      const warningAlert = {
        message: 'All fields are required',
        severity: 'warning',
        status: true,
      }

      showMessageAlert(warningAlert)
    }
  }

  const signInWithEmailPasswordFunction = () => {
    const { email, password } = dataForm

    let userFormData = new FormData()
    userFormData.append('email', email)
    userFormData.append('password', password)

    if (email && password) {
      setLoading(true)

      signInWithEmailPassword(userFormData)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            const alert = {
              message: `Welcome`,
              severity: 'success',
              status: true,
            }
            window.sessionStorage.setItem('token', response.data.access_token)
            showMessageAlert(alert)
            setLoading(false)
            history.push('/home')
          }
        })
        .catch((error) => {
          const message = error?.response?.data?.message

          const errorAlert = {
            message: message ? message : 'Algo ocurrió en el servidor',
            severity: 'error',
            status: true,
          }

          showMessageAlert(errorAlert)
          console.error(error)
          setLoading(false)
        })
    }

    validateRequiredFields(email, password)
  }

  const handleResetPasswordFunction = () => {
    setSendPasswordReset(!_sendPasswordReset)
  }

  const handleButtonClick = () => {
    if (!_sendPasswordReset) {
      signInWithEmailPasswordFunction()
    }

    if (_sendPasswordReset) {
      sendPasswordResetFunction()
    }
  }

  const handleSaveData = () => {
    const { remember } = dataForm

    if (remember) {
      dispatch(setLoginData(dataForm))
    }

    if (!remember) {
      const data = { email: '', password: '', remember: false }
      dispatch(setLoginData(data))
    }
  }

  const handleSignupClick = () => {
    history.push('/signup')
  }

  return (
    <Grid container component="main" className={classes.root} justify="center">
      <Grid item xs={12} sm={8} md={4}>
        <div className={classes.paper}>
          <Avatar alt="Logo" src={LogoImage} className={classes.avatar} />
          <Typography component="h1" variant="h5" className={classes.title}>
            {!_sendPasswordReset ? 'Log in to Aveil' : 'Reset Password'}
          </Typography>
          <form className={classes.form}>
            <CssTextField
              variant="outlined"
              margin="normal"
              fullWidth
              label={<span className={classes.textWhite}>Email</span>}
              name="email"
              autoFocus
              value={dataForm?.email}
              onChange={onChangeDataForm}
              InputProps={{
                className: classes.inputTextColor,
              }}
            />
            {!_sendPasswordReset && (
              <CssTextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label={<span className={classes.textWhite}>Password</span>}
                type="password"
                value={dataForm?.password}
                onChange={onChangeDataForm}
                InputProps={{
                  className: classes.inputTextColor,
                }}
              />
            )}
            {!_sendPasswordReset && (
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    color="primary"
                    onChange={onChangeDataForm}
                    value={dataForm?.remember}
                    checked={dataForm?.remember}
                    className={classes.textGray}
                  />
                }
                className={classes.textGray}
                label="Remember me"
              />
            )}
            {!loading ? (
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleButtonClick}
              >
                {!_sendPasswordReset ? 'Log in' : 'Reset'}
              </Button>
            ) : (
              <Loading />
            )}
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.signup}
              onClick={handleSignupClick}
            >
              Sign up
            </Button>
            <Grid container>
              <Grid item xs>
                <Typography
                  color="primary"
                  variant="inherit"
                  onClick={handleResetPasswordFunction}
                  className={classes.linkForgotPassword}
                >
                  {/* {!_sendPasswordReset ? '¿Forgot password?' : 'Back'} */}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default SignIn
