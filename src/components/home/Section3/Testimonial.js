/* import external modules */
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

/* import internal modules */
import useStyles from './styles'

const SimpleCard = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          WHAT PEOPLE THINK OF AVI
        </Typography>
        <div className={classes.messageContainer}>
          <Typography className={classes.message} align="justify" component="p">
            <i>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book Lorem Ipsum is
              simply dummy text of the printing and."
            </i>
          </Typography>
        </div>
        <Typography className={classes.name}>Sara Conor's</Typography>
      </CardContent>
    </Card>
  )
}

export default SimpleCard
