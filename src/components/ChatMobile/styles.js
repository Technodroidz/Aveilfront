/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#ececec',
    width: '100%',
    height: '12vh',
  },
  containerHearderGrid: {
    paddingTop: 15,
  },
  avatarMobile: {
    backgroundColor: '#d8d8d8',
  },
  titleAvatarMobile: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 13,
  },
  arrowBackIos: {
    color: '#c8c8c8',
    cursor: 'pointer',
    marginTop: 9,
  },
  iconsHeader: {
    color: '#c8c8c8',
    cursor: 'pointer',
    marginTop: 9,
  },
  mobileMenu: {
    marginTop: 50,
  },
  paperMessagesContainer: {
    paddingTop: 10,
    backgroundColor: 'white',
  },
  paperMessages: {
    height: '71vh',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('sm')]: {
      height: '71vh',
    },
  },
  messagesSendText: {
    padding: 10,
    color: 'white',
    background: '#3043E9',
    marginTop: 10,
    borderRadius: 10,
    marginLeft: '45%',
    marginRight: '6%',
    textAlign: 'left',
    maxWidth: 200,
    [theme.breakpoints.up('sm')]: {
      marginLeft: '75%',
    },
  },
  messagesReceiverTitle: {
    fontSize: 13,
    color: '#3043E9',
    fontWeight: 600,
    marginLeft: '7%',
    marginTop: 15,
  },
  messagesReceiverContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'normal',
    alignContent: 'normal',
    background: '#E5E5E5',
    borderRadius: 10,
    maxWidth: 200,
    marginLeft: '7%',
    cursor: 'pointer',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 4,
  },
  messagesReceiverItem: {
    display: 'block',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'auto',
    order: 0,
  },
  sendButton: {
    cursor: 'pointer',
    marginTop: 7,
  },
  disabledSendButton: {
    color: '#b4b4b5',
    marginTop: 7,
  },
  typeMessages: {
    width: '89%',
    marginLeft: 23,
    paddingLeft: 10,
    marginTop: 3,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  typeSendMessage: {
    alignItems: 'center',
    height: '9vh',
    backgroundColor: '#e9e9e9',
  },

  /* Dark Theme */

  paperMessagesContainerDark: {
    backgroundColor: '#000326',
    paddingTop: 10,
  },
  paperMessagesDark: {
    width: '100%',
    paddingTop: 15,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: '#000326',
    height: '71vh',
    [theme.breakpoints.up('sm')]: {
      height: '71vh',
    },
  },
  typeMessagesDark: {
    color: 'white',
    backgroundColor: '#000427',
    width: '89%',
    paddingLeft: 10,
    marginLeft: 23,
    marginTop: 3,
    borderRadius: 20,
  },
  typeSendMessageDark: {
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#b4b4b5',
    alignItems: 'center',
    height: '9vh',
    backgroundColor: '#0a0f45',
  },
  iconsHeaderDark: { color: 'white', cursor: 'pointer', marginTop: 9 },
  messagesReceiverContainerDark: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'normal',
    alignContent: 'normal',
    background: '#000638',
    borderRadius: 10,
    maxWidth: 200,
    marginLeft: '7%',
    cursor: 'pointer',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 4,
    color: 'white',
  },
  containerDark: {
    backgroundColor: '#0a0f45',
    width: '100%',
    height: '12vh',
  },
  titleAvatarMobileDark: {
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 13,
    color: 'white',
  },
  arrowBackIosDark: {
    color: 'white',
    cursor: 'pointer',
    marginTop: 9,
  },
  avatarMobileDark: {
    backgroundColor: '#0d1557',
  },
}))

export default useStyles
