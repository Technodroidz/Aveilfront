/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* import external modules */
import {
  Grid,
  Menu,
  Avatar,
  Switch,
  MenuItem,
  Container,
  Typography,
  Paper,
  InputBase,
} from '@material-ui/core'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ArrowBackIos,
  Favorite,
  MoreVert,
  Search,
  Send,
} from '@material-ui/icons'

/* import internal modules */
import useStyles from './styles'
import RobotImageMobile from '../../assets/robot.png'
import { askQuestion, getMessagesById } from '../../apis/messages'
import {
  setHandleAlert,
  setHandleSelectedTheme,
} from '../../redux/actions/common/common'
import Loading from '../common/Loading'
import { setSelectedQuestion } from '../../redux/actions/questions/questions'

const ChatMobile = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [typeMessage, setTypeMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [messagesPage, setmessagesPage] = useState(0)
  const autoScrollRef = useRef()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)
  const enableDarkTheme = useSelector(
    (state) => state.common.handleSelectedTheme
  )
  const selectedQuestion = useSelector(
    (state) => state.questions.selectedQuestion
  )

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  useEffect(() => {
    handleSendQuestionLogic()
    autoScrollRef.current.scrollTo(0, 5000)
  }, [])

  const handleSendQuestionLogic = () => {
    if (selectedQuestion) {
      askQuestionFunction(selectedQuestion)
    }

    if (!selectedQuestion) {
      getMessagesByIdFunction()
    }
  }

  const askQuestionFunction = (question) => {
    setLoading(true)

    const questionFormData = new FormData()
    questionFormData.append('question', question)

    askQuestion(questionFormData)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          getMessagesByIdFunction()
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

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const getMessagesByIdFunction = () => {
    setLoading(true)

    getMessagesById(messagesPage)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          setMessages(response.data)
          setLoading(false)
          autoScrollRef.current.scrollTo(0, 5000)
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

  const handleThemeFunction = () => {
    dispatch(setHandleSelectedTheme(!enableDarkTheme))
  }

  const onChangeData = (event) => {
    setTypeMessage(event.target.value)
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const selectedAnswer = (answer) => {
    setTypeMessage(answer)
  }

  const goToBack = () => {
    dispatch(setSelectedQuestion(null))
    history.push('/chat')
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

  const renderMessages = messages.map((message, key) => {
    return (
      <div key={key}>
        {message?.question && (
          <div elevation={3} className={classes.messagesSendText}>
            {message.question}
          </div>
        )}
        <Typography className={classes.messagesReceiverTitle}>
          Select your favorite answer
        </Typography>
        {message?.answers?.map((answer, key) => {
          return (
            <div
              key={key}
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
                  color="disabled"
                  fontSize="small"
                  className={classes.favorite}
                  onClick={() => selectedAnswer(answer)}
                />
              </div>
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <>
      <Container
        maxWidth="lg"
        component="section"
        className={enableDarkTheme ? classes.containerDark : classes.container}
      >
        <Grid
          container
          justify="space-between"
          className={classes.containerHearderGrid}
        >
          <ArrowBackIos
            className={
              enableDarkTheme ? classes.arrowBackIosDark : classes.arrowBackIos
            }
            onClick={goToBack}
          />
          <Grid>
            <Avatar
              alt="Aveil"
              src={RobotImageMobile}
              className={
                enableDarkTheme
                  ? classes.avatarMobileDark
                  : classes.avatarMobile
              }
            />
            <Typography
              className={
                enableDarkTheme
                  ? classes.titleAvatarMobileDark
                  : classes.titleAvatarMobile
              }
            >
              Avi
            </Typography>
          </Grid>
          <Grid>
            <Search
              className={
                enableDarkTheme ? classes.iconsHeaderDark : classes.iconsHeader
              }
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <MoreVert
              aria-haspopup="true"
              aria-label="show more"
              aria-controls={mobileMenuId}
              onClick={handleMobileMenuOpen}
              className={
                enableDarkTheme ? classes.iconsHeaderDark : classes.iconsHeader
              }
            />
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        className={
          enableDarkTheme
            ? classes.paperMessagesContainerDark
            : classes.paperMessagesContainer
        }
      >
        {!loading ? (
          <Paper
            elevation={0}
            className={
              enableDarkTheme
                ? classes.paperMessagesDark
                : classes.paperMessages
            }
            ref={autoScrollRef}
          >
            {renderMessages.length > 0 ? (
              renderMessages
            ) : (
              <Typography align="center" color="secondary">
                Not messages yet
              </Typography>
            )}
          </Paper>
        ) : (
          <Loading />
        )}
        <Grid
          container
          className={
            enableDarkTheme
              ? classes.typeSendMessageDark
              : classes.typeSendMessage
          }
        >
          <Grid item xs={11} md={11} lg={11} xl={11}>
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
          <Grid item xs={1} md={1} lg={1} xl={1}>
            <Send
              color="primary"
              className={
                typeMessage ? classes.sendButton : classes.disabledSendButton
              }
            />
          </Grid>
        </Grid>
      </Grid>
      {renderMobileMenu}
    </>
  )
}

export default ChatMobile
