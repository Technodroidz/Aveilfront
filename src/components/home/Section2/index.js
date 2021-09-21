/* import external modules */
import {
  Card,
  List,
  Grid,
  Avatar,
  ListItem,
  Container,
  CardMedia,
  Typography,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Timeline, Fingerprint, QuestionAnswer } from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import Loading from '../../common/Loading'
import SmartphoneAveilImage from '../../../assets/smartphone-aveil.png'

const Section2 = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <Container maxWidth="lg" component="section" className={classes.section}>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12}>
          <Typography variant="h6" color="textPrimary" align="center">
            <b>{`"WORLD'S MOST ADVANCED AI CHATBOT"`}</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="flex-start">
        <Grid item xs={12} sm={12} md={12} xl={5} lg={5}>
          {!loading ? (
            <Card elevation={0} className={classes.image}>
              <CardMedia
                component="img"
                alt="Smartphone Aveil"
                image={SmartphoneAveilImage}
                title="Aveil"
              />
            </Card>
          ) : (
            <Loading />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} xl={5} lg={5}>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.blue}>
                  <Fingerprint />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Avi answers your questions in a personalized way to make it as easy to understand as possible." />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.blue}>
                  <QuestionAnswer />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Get answers to your questions in the fastest way and also have really interesting conversations with a super inteligent, unique and charming chatbot." />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar className={classes.blue}>
                  <Timeline />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="The more you chat the better responses you'll get as Avi adapts to you personality and interests." />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemText
                className={classes.textPowered}
                secondary="Powered by Open AI's GPT-3."
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Section2
