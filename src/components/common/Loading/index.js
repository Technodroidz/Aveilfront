/* import external modules */
import { CircularProgress } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'

const Loading = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" {...props} />
    </div>
  )
}

export default Loading
