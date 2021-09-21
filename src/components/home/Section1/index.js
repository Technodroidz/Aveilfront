/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* import external modules */
import {
  Card,
  Grid,
  Zoom,
  Paper,
  Container,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Autocomplete } from '@material-ui/lab'
import { useEffect, useRef, useState } from 'react'

/* import internal modules */
import Loading from '../../common/Loading'
import { useStyles, CssTextField } from './styles'
import RobotImage from '../../../assets/robot.png'
import { getQuestionSuggestions } from '../../../apis/messages'
import { setHandleAlert } from '../../../redux/actions/common/common'
import { setSelectedQuestion } from '../../../redux/actions/questions/questions'

const Section1 = () => {
  const classes = useStyles()
  const history = useHistory()
  const containerRef = useRef()
  const dispatch = useDispatch()
  const [motion, setMotion] = useState(false)
  const [loading, setLoading] = useState(false)
  const [loadingImage, setLoadingImage] = useState(true)
  const [loadingTextfield, setLoadingTextfield] = useState(true)
  const [questionsSuggestion, setQuestionsSuggestion] = useState([])

  useEffect(() => {
    dispatch(setSelectedQuestion(null))
    getQuestionsSuggestionFunction()
    handleChange()
    setTimeout(() => {
      setLoadingImage(false)
    }, 500)

    setTimeout(() => {
      setLoadingTextfield(false)
    }, 700)
  }, [])

  const handleChange = () => {
    setMotion((prev) => !prev)
  }

  const CustomPaper = (props) => {
    return <Paper elevation={8} {...props} />
  }

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const getQuestionsSuggestionFunction = () => {
    setLoading(true)

    getQuestionSuggestions()
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setQuestionsSuggestion(response.data)
          setLoading(false)
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

  const handleQuestionSelected = (selectedValue) => {
    if (selectedValue) {
      dispatch(setSelectedQuestion(selectedValue))

      const currentWidth = containerRef.current?.offsetWidth

      if (currentWidth <= 910) {
        history.push('/chatMobile')
      }

      if (currentWidth > 910) {
        history.push('/chat')
      }
    }
  }

  return (
    <Container
      ref={containerRef}
      maxWidth="lg"
      component="section"
      className={classes.section}
    >
      <Grid container spacing={0} justify="flex-end">
        <Grid item xs={6}>
          <Zoom
            in={motion}
            style={{ transitionDelay: motion ? '1300ms' : '0ms' }}
          >
            <Paper elevation={0} className={classes.paper}>
              <Typography className={classes.title} align="left">
                Avi
              </Typography>
              <Typography className={classes.subtitle} align="left">
                Ask me anything, I'II do my best to help you.
              </Typography>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>
      {!loadingImage ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Card elevation={0} className={classes.image}>
                <CardMedia
                  component="img"
                  alt="Aveil"
                  image={RobotImage}
                  title="Aveil"
                />
              </Card>
            </center>
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
      {!loadingTextfield ? (
        <Grid container spacing={4} justify="center">
          <Grid item xs={12}>
            <center>
              <Autocomplete
                options={questionsSuggestion}
                onChange={(event, value) => handleQuestionSelected(value)}
                id="combo-box-autocomplete"
                PaperComponent={CustomPaper}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    color="primary"
                    variant="filled"
                    label={
                      <span className={classes.textLabel}>
                        Ask Avi a Question...
                      </span>
                    }
                    className={classes.texfield}
                  />
                )}
              />
            </center>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Container>
  )
}

export default Section1
