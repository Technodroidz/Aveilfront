/* import external modules */
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { useDispatch, useSelector } from 'react-redux'

/* import internal modules */
import { useStyles } from './styles'
import { setHandleAlert } from '../../../redux/actions/common/common'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const SnackBar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleAlert = useSelector((state) => state.common.handleAlert)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    dispatch(
      setHandleAlert({
        message: '',
        status: false,
        severity: handleAlert.severity,
      })
    )
  }

  return (
    <div className={classes.root}>
      <Snackbar
        open={handleAlert.status}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={handleAlert.severity}>
          {handleAlert.message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackBar
