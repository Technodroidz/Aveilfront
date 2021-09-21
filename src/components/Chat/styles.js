/* import external modules */
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: 'white',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  containerGrid: {
    backgroundColor: 'white',
    padding: 40,
    [theme.breakpoints.up('xl')]: {
      padding: '5%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  containerUserName: {
    paddingTop: 20,
    paddingLeft: 20,
    [theme.breakpoints.up('xl')]: {
      paddingTop: '10%',
      paddingLeft: '10%',
    },
  },
  gridLeftContainer: {
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#E5E5E5',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#E5E5E5',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#E5E5E5',
    marginTop: 0,
    [theme.breakpoints.down('sm')]: {
      border: 'none',
    },
    [theme.breakpoints.up('xl')]: {
      // height: 874,
    },
  },
  userNameText: { padding: 10, color: 'gray' },
  iconPerson: { color: 'gray' },
  title: {
    paddingTop: '23%',
    fontWeight: 'bold',
    paddingBottom: 40,
    [theme.breakpoints.up('xl')]: {
      paddingTop: '30%',
    },
  },
  titleQuestions: { fontWeight: 'bold', paddingTop: 44 },
  containerQuestions: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#9f9e9e',
    borderRadius: 5,
    textAlign: 'left',
    marginTop: 20,
    maxWidth: 270,
    [theme.breakpoints.up('xl')]: {
      marginTop: '6%',
    },
  },
  questionsText: {
    padding: 7,
    color: '#9f9e9e',
    backgroundColor: 'white',
  },
  selectedQuestionText: {
    padding: 2,
    backgroundColor: '#3043e9',
    color: 'white',
    borderRadius: 5,
  },
  selectedHoverQuestionText: {
    padding: 2,

    '&:hover': {
      backgroundColor: '#3043e9',
      color: 'white',
      borderRadius: 5,
    },
  },
  askButton: {
    borderRadius: 20,
    marginTop: 27,
    marginBottom: 50,
    textTransform: 'capitalize',
    [theme.breakpoints.up('xl')]: {
      marginTop: '10%',
    },
  },
  messagesSendText: {
    padding: 10,
    color: 'white',
    background: '#3043E9',
    marginTop: 10,
    textAlign: 'left',
    borderRadius: 10,
    marginLeft: '60%',
    marginRight: '5%',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '11%',
      marginRight: '5%',
      textAlign: 'left',
    },
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
    maxWidth: 270,
    marginLeft: '7%',
    cursor: 'pointer',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 4,
    [theme.breakpoints.down('xs')]: {
      marginLeft: '11%',
      marginRight: '5%',
      maxWidth: 260,
    },
  },
  messagesReceiverItem: {
    display: 'block',
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: 'auto',
    alignSelf: 'auto',
    order: 0,
  },
  favorite: {
    color: '#aaaaaa',
  },
  messagesReceiverTitle: {
    fontSize: 13,
    marginLeft: '7%',
    color: '#3043E9',
    fontWeight: 600,
    [theme.breakpoints.down('xs')]: {
      marginLeft: '12%',
      marginTop: 15,
    },
  },
  paperMessages: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.up('xl')]: {
      // height: '66.6vh',
    },
  },
  paperMessagesContainer: {
    paddingTop: 10,
  },
  typeSendMessage: {
    alignItems: 'center',
    height: '9vh',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#E5E5E5',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
    },
  },
  typeMessages: {
    width: '93%',
    marginLeft: 30,
    paddingLeft: 10,
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
  sendButton: {
    cursor: 'pointer',
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
  disabledSendButton: {
    color: '#b4b4b5',
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
  circle: { maxHeight: 110, position: 'absolute' },
  imageCircle: {
    backgroundColor: 'white',
    maxWidth: 93,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 120,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 140,
    },
  },
  iconsHeader: {
    color: 'gray',
  },
  iconsHeaderContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#E5E5E5',
    width: '100%',
  },
  iconsHeaderItem: {
    display: 'block',
    padding: 7,
    cursor: 'pointer',
  },
  iconsHeaderContainerSmall: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#E5E5E5',
    width: '100%',
  },
  iconsHeaderItemSmall: {
    display: 'block',
    padding: 7,
    cursor: 'pointer',
  },
  mobileMenu: {
    marginTop: 50,
  },
  headerIntoSmall: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  headerIntoLarge: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  secondPageChat: {
    borderRightWidth: '2px',
    borderRightStyle: 'solid',
    borderRightColor: '#E5E5E5',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageCircleDesktop: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  imageCircleMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  arrowForward: {
    color: 'gray',
    marginTop: 10,
    marginLeft: '45%',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  /* Dark Theme */
  containerDark: {
    backgroundColor: 'white',
    paddingLeft: '4%',
    paddingRight: '4%',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#000638',
    },
  },
  gridLeftContainerDark: {
    background: '#000638',
    borderTopWidth: '2px',
    borderTopStyle: 'solid',
    borderTopColor: '#000326',
    borderLeftWidth: '2px',
    borderLeftStyle: 'solid',
    borderLeftColor: '#000326',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#000326',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: '#b4b4b5',
    marginTop: 0,
    [theme.breakpoints.only('sm')]: {
      border: 'none',
    },
    [theme.breakpoints.only('xs')]: {
      border: 'none',
    },
  },
  titleQuestionsDark: { fontWeight: 'bold', paddingTop: 44, color: 'white' },
  titleDark: {
    color: 'white',
    paddingTop: '23%',
    fontWeight: 'bold',
    paddingBottom: 40,
    [theme.breakpoints.up('xl')]: {
      paddingTop: '30%',
      color: 'white',
    },
  },
  userNameTextDark: { padding: 10, color: 'white' },
  iconPersonDark: { color: 'white' },
  imageCircleDark: {
    backgroundColor: '#000638',
    maxWidth: 93,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 120,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 140,
    },
  },
  containerQuestionsDark: {
    textAlign: 'left',
    marginTop: 20,
    maxWidth: 270,
    [theme.breakpoints.up('xl')]: {
      marginTop: '6%',
    },
  },
  questionsTextDark: {
    borderRadius: 10,
    padding: 7,
    color: 'white',
    backgroundColor: '#091253',
  },
  iconsHeaderDark: {
    color: 'white',
  },
  iconsHeaderContainerDark: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    width: '100%',
    backgroundColor: '#000326',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#b4b4b5',
  },
  paperMessagesDark: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 15,
    overflowX: 'hidden',
    overflowY: 'auto',
    backgroundColor: '#000326',
    [theme.breakpoints.up('xl')]: {
      // height: '66.6vh',
    },
  },
  paperMessagesContainerDark: {
    backgroundColor: '#000326',
    paddingTop: 10,
  },
  messagesReceiverContainerDark: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'normal',
    alignContent: 'normal',
    background: '#000638',
    borderRadius: 10,
    maxWidth: 270,
    marginLeft: '7%',
    cursor: 'pointer',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 8,
    paddingBottom: 4,
    color: 'white',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '11%',
      marginRight: '5%',
      maxWidth: 260,
    },
  },
  typeSendMessageDark: {
    background: '#000326',
    alignItems: 'center',
    height: '9.3vh',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: '#b4b4b5',
    [theme.breakpoints.down('sm')]: {
      height: '9vh',
    },
  },
  typeMessagesDark: {
    color: 'white',
    backgroundColor: '#000326',
    width: '93%',
    paddingLeft: 10,
    marginLeft: 30,
    [theme.breakpoints.down('xl')]: {
      marginTop: 3,
    },
  },
  arrowForwardDark: {
    color: 'white',
    marginTop: 10,
    marginLeft: '45%',
    cursor: 'pointer',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  favoriteDark: {
    color: '#3044e9',
  },
  favoriteDarkDisabled: {
    color: '#2d3581',
  },
}))

export default useStyles