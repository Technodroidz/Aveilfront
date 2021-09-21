/* import external modules */
import { useState } from 'react'
import {
  Button,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core'

/* import internal modules */

const AlertDialog = ({ title, children, contentText, iconOpenButton }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {!iconOpenButton && (
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      )}
      {iconOpenButton && (
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClickOpen}
          aria-label="account of current user"
        >
          {iconOpenButton}
        </IconButton>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default AlertDialog
