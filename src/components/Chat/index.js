/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Card,
  Paper,
  Button,
  InputBase,
  CardMedia,
  Typography,
  Menu,
  MenuItem,
  Container,
  Switch,
} from '@material-ui/core'
// import { Circle } from 'rc-progress'
import {
  Send,
  Person,
  Search,
  MoreVert,
  ArrowForwardIos,
  Favorite,
} from '@material-ui/icons'
import { useHistory } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/* import internal modules */
import useStyles from './styles'
import Loading from '../common/Loading'
import RobotImage from '../../assets/robot-chat.png'
import RobotImageMobile from '../../assets/robot.png'
import {
  setHandleAlert,
  setHandleSelectedTheme,
} from '../../redux/actions/common/common'
import {
  askQuestion,
  getMessagesById,
  getQuestionSuggestions,
} from '../../apis/messages'
import { setSelectedQuestion } from '../../redux/actions/questions/questions'

const Chat = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [typeMessage, setTypeMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  console.log(messages, "message");
  const [messagesPage, setMessagesPage] = useState(0)
  const [selectedQuestionSuggest, setSelectedQuestionSuggest] = useState('')
  const [currentHeightGridLeftQuestions, setCurrentHeightGridLeftQuestions] = useState(0)
  const [currentHeightGridLeft, setCurrentHeightGridLeft] = useState(0)
  const [questionsSuggestion, setQuestionsSuggestion] = useState([])
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const enableDarkTheme = useSelector(
    (state) => state.common.handleSelectedTheme
  )
  const selectedQuestion = useSelector(
    (state) => state.questions.selectedQuestion
  )

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const containerRef = useRef()
  const autoScrollRef = useRef()
  const gridLeftContainerRef = useRef()
  const refSendButtonQuestion = useRef()
  const gridLeftContainerQuestionsRef = useRef()

  useEffect(() => {
    getMessagesByIdFunction()
    getQuestionsSuggestionFunction()
    handleSendQuestionLogic()

    autoScrollRef.current.scrollTo(0, 3000)
  }, [])

  const askQuestionFunction = (question) => {
    setLoading(true)

    const questionFormData = new FormData()
    questionFormData.append('question', question)

    askQuestion(questionFormData)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          const currentWidth = containerRef.current?.offsetWidth
          if (currentWidth > 910) {
            getMessagesByIdFunction()
            setLoading(false)
            fixHeightComponent()
          }
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

  const handleSendQuestionLogic = () => {
    if (selectedQuestion) {
      askQuestionFunction(selectedQuestion)
    }
  }

  const fixHeightComponent = () => {
    const currentGridLeftContainer = gridLeftContainerRef?.current?.clientHeight
    setCurrentHeightGridLeft(currentGridLeftContainer)

    const current = gridLeftContainerQuestionsRef?.current?.clientHeight
    if (current > 150) {
      const newCurrentDifference = current - 150
      setCurrentHeightGridLeftQuestions(newCurrentDifference)
    }
  }

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const getQuestionsSuggestionFunction = () => {
    setLoading(true)

    getQuestionSuggestions()
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          console.log(response.data, "messeges suggestions");
          setQuestionsSuggestion(response.data)
          setLoading(false)
          fixHeightComponent()
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

  const getMessagesByIdFunction = () => {
    setLoading(true)

    const currentWidth = containerRef.current?.offsetWidth

    if (currentWidth > 910) {
      getMessagesById(messagesPage)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            setMessages(response.data)
            setLoading(false)
            autoScrollRef.current.scrollTo(0, 3000)
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
  }

  const onChangeData = (event) => {
    setTypeMessage(event.target.value)
  }

  const selectedAnswer = (answer) => {
    setTypeMessage(answer)
  }

  const renderQuestionsSuggestions = questionsSuggestion.map(
    (question, key) => {
      return (
        <div
          elevation={3}
          className={
            enableDarkTheme ? classes.questionsTextDark : classes.questionsText
          }
          key={key}
        >
          <div
            className={
              selectedQuestionSuggest === question
                ? classes.selectedQuestionText
                : classes.selectedHoverQuestionText
            }
            onClick={() => {
              setSelectedQuestionSuggest(question)
            }}
          >
            {question}
          </div>
        </div>
      )
    }
  )

  const renderMessages = messages.map((message, key) => {
    return (
      <div key={key}>
        {message?.question && (
          <div
            elevation={3}
            className={classes.messagesSendText}
            style={{
              maxWidth:
                message.question.length < 20
                  ? message.question.length + 130
                  : 260,
            }}
          >
            {message.question}
          </div>
        )}
        <Typography className={classes.messagesReceiverTitle}>
          Select your favorite answer
        </Typography>
        {message?.answers?.map((answer, key) => {
          return (
            <div key={key}>
              {/* {message?.option_selected === key + 1 && ( */}
              <div
                className={
                  enableDarkTheme
                    ? classes.messagesReceiverContainerDark
                    : classes.messagesReceiverContainer
                }
              >
                <div className={classes.messagesReceiverItem}>
                  <div elevation={3} onClick={() => selectedAnswer(answer)}>
                    {answer}
                  </div>
                </div>
                <div className={classes.messagesReceiverItem}>
                  <Favorite
                    fontSize="small"
                    className={
                      enableDarkTheme
                        ? classes.favoriteDarkDisabled
                        : classes.favorite
                    }
                    onClick={() => selectedAnswer(answer)}
                  />
                </div>
              </div>
              {/* )} */}
            </div>
          )
        })}
      </div>
    )
  })

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleThemeFunction = () => {
    dispatch(setHandleSelectedTheme(!enableDarkTheme))
  }

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.mobileMenu}
    >
      <MenuItem>
        Dark Mode
        <Switch
          checked={enableDarkTheme}
          onChange={handleThemeFunction}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </MenuItem>
    </Menu>
  )

  const goToChatMobile = () => {
    history.push('/chatMobile')
  }

  const handleSendQuestion = () => {
    askQuestionFunction(selectedQuestionSuggest)

    const currentWidth = containerRef.current?.offsetWidth

    if (currentWidth <= 910) {
      history.push('/chatMobile')
    }
  }

  return (
    <Container
      maxWidth="xl"
      component="section"
      className={enableDarkTheme ? classes.containerDark : classes.container}
      ref={containerRef}
    >
      <Grid container justify="center" className={classes.containerGrid}>
        <Grid
          item
          md={4}
          lg={4}
          xl={4}
          xs={12}
          className={
            enableDarkTheme
              ? classes.gridLeftContainerDark
              : classes.gridLeftContainer
          }
          ref={gridLeftContainerRef}
        >
          <Grid container direction="row" className={classes.containerUserName}>
            <Person
              fontSize="large"
              className={
                enableDarkTheme ? classes.iconPersonDark : classes.iconPerson
              }
            />
            <Typography
              className={
                enableDarkTheme
                  ? classes.userNameTextDark
                  : classes.userNameText
              }
            >
              User Name
            </Typography>
            <ArrowForwardIos
              className={
                enableDarkTheme
                  ? classes.arrowForwardDark
                  : classes.arrowForward
              }
              onClick={goToChatMobile}
            />
          </Grid>
          <Typography
            className={enableDarkTheme ? classes.titleDark : classes.title}
            align="center"
          >
            Avi
          </Typography>
          <Grid container justify="center">
            <Card elevation={0} className={classes.imageCircleDesktop}>
              <CardMedia
                alt="Aveil"
                component="img"
                image={RobotImage}
                title="Aveil"
                className={
                  enableDarkTheme
                    ? classes.imageCircleDark
                    : classes.imageCircle
                }
              />
            </Card>

            <Card elevation={0} className={classes.imageCircleMobile}>
              <CardMedia
                alt="Aveil"
                component="img"
                image={RobotImageMobile}
                title="Aveil"
                className={
                  enableDarkTheme
                    ? classes.imageCircleDark
                    : classes.imageCircle
                }
              />
            </Card>
            {/* <Circle
              percent="25"
              strokeWidth="3"
              strokeColor="#3043E9"
              className={classes.circle}
            /> */}
          </Grid>
          <Typography
            className={
              enableDarkTheme
                ? classes.titleQuestionsDark
                : classes.titleQuestions
            }
            align="center"
          >
            Other relevant questions:
          </Typography>
          <center>
            {!loading ? (
              <Grid
                container
                justify="center"
                className={
                  enableDarkTheme
                    ? classes.containerQuestionsDark
                    : classes.containerQuestions
                }
                ref={gridLeftContainerQuestionsRef}
              >
                <Paper
                  elevation={0}
                  className={
                    enableDarkTheme
                      ? classes.questionsTextDark
                      : classes.questionsText
                  }
                >
                  {renderQuestionsSuggestions}
                </Paper>
              </Grid>
            ) : (
              <Loading />
            )}
          </center>
          <Grid container justify="center">
            <Button
              color="primary"
              variant="contained"
              size="large"
              className={classes.askButton}
              onClick={handleSendQuestion}
            >
              Ask
            </Button>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          xl={8}
          className={classes.secondPageChat}
        >
          <Grid container className={classes.headerIntoLarge}>
            <div
              className={
                enableDarkTheme
                  ? classes.iconsHeaderContainerDark
                  : classes.iconsHeaderContainer
              }
            >
              <div className={classes.iconsHeaderItem}>
                <Search
                  className={
                    enableDarkTheme
                      ? classes.iconsHeaderDark
                      : classes.iconsHeader
                  }
                />
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className={classes.iconsHeaderItem}>
                <MoreVert
                  aria-haspopup="true"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  onClick={handleMobileMenuOpen}
                  className={
                    enableDarkTheme
                      ? classes.iconsHeaderDark
                      : classes.iconsHeader
                  }
                />
              </div>
            </div>
          </Grid>
          <Grid
            container
            className={
              enableDarkTheme
                ? classes.paperMessagesContainerDark
                : classes.paperMessagesContainer
            }
          >
            <Paper
              elevation={0}
              className={
                enableDarkTheme
                  ? classes.paperMessagesDark
                  : classes.paperMessages
              }
              ref={autoScrollRef}
              // menuprops={{
              //   PaperProps: {
              //     onScroll: (event) => {
              //       if (event.scrollTop === 0) {
              //         console.log(event)
              //         console.log('we scroll')
              //       }
              //     },
              //   },
              // }}
              style={{
                height:
                  currentHeightGridLeft > 900
                    ? 730 + currentHeightGridLeftQuestions
                    : 593 + currentHeightGridLeftQuestions,
              }}
            >
              {renderMessages.length > 0 ? (
                renderMessages
              ) : (
                <Typography align="center" color="secondary">
                  Not messages yet
                </Typography>
              )}
            </Paper>
          </Grid>
          <Grid
            container
            className={
              enableDarkTheme
                ? classes.typeSendMessageDark
                : classes.typeSendMessage
            }
          >
            <Grid item xs={10} md={11} lg={11} xl={11}>
              <InputBase
                value={typeMessage}
                onChange={onChangeData}
                placeholder="Type a message..."
                className={
                  enableDarkTheme
                    ? classes.typeMessagesDark
                    : classes.typeMessages
                }
                inputProps={{ 'aria-label': 'naked' }}
              />
            </Grid>
            <Grid item xs={2} md={1} lg={1} xl={1}>
              <Send
                color="primary"
                className={
                  typeMessage ? classes.sendButton : classes.disabledSendButton
                }
                ref={refSendButtonQuestion}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </Container>
  )
}

export default Chat
