/* import external modules */
import { useHistory } from 'react-router'
import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
import LogoImage from '../../../assets/logo.png'

const AppBarSecondaryComponent = () => {
  const history = useHistory()
  const classes = useStyles()

  const goToPage = (path) => {
    history.push(path)
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Avatar
            alt="Logo"
            src={LogoImage}
            className={classes.avatar}
            onClick={() => goToPage('/home')}
          />
          <Typography
            onClick={() => goToPage('/home')}
            className={classes.title}
            variant="h6"
            noWrap
          >
            Aveil
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.grow} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarSecondaryComponent
