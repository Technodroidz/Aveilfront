/* import external modules */
import { Card, Grid, Container, CardMedia } from '@material-ui/core'

/* import internal modules */
import useStyles from './styles'
// import LogoImage from '../../assets/logo.png'
import AppStoreImage from '../../assets/app-store.png'
import GooglePlayImage from '../../assets/google-play.png'
import GetAppImage from '../../assets/download-aveil-app.png'

const GetApp = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="lg" component="section" className={classes.section}>
      <Grid container justify="flex-end" direction="row">
        {/* <Grid item xs={9}>
          <Grid container direction="row">
            <Card elevation={0} className={classes.logo}>
              <CardMedia
                component="img"
                image={LogoImage}
                alt="Get App Aveil"
                title="Get App Aveil"
              />
            </Card>
            <Typography variant="h6" className={classes.title}>
              Aveil
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid container justify="center">
        <Grid item xs={12}>
          <center>
            <Card elevation={0} className={classes.image}>
              <CardMedia
                component="img"
                image={GetAppImage}
                alt="Get App Aveil"
                title="Aveil"
              />
            </Card>
          </center>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xl={2} lg={2}>
          <Card elevation={0} className={classes.imageGetAppApple}>
            <CardMedia
              component="img"
              image={AppStoreImage}
              alt="Google Play"
              title="Aveil"
            />
          </Card>
        </Grid>
        <Grid item xl={2} lg={2}>
          <Card elevation={0} className={classes.imageGetAppGoogle}>
            <CardMedia
              component="img"
              image={GooglePlayImage}
              alt="Google Play"
              title="Aveil"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GetApp
