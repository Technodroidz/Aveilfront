/* import external modules */
import { Button, Chip, Grid, Typography } from '@material-ui/core'
import {
  Done,
  DriveEta,
  EmojiPeople,
  FitnessCenter,
  ImportantDevices,
  InsertEmoticon,
  Instagram,
  LocalDining,
  MenuBook,
  Movie,
  MusicNote,
  Palette,
  Pets,
  Pool,
  SportsEsports,
  Stars,
  WbIncandescent,
} from '@material-ui/icons'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addInterests } from '../../apis/users'
import { setHandleAlert } from '../../redux/actions/common/common'
import Loading from '../common/Loading'

/* import internal modules */
import useStyles from './styles'

const Profile = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [selectedChips, setSelectedChips] = useState([])

  const handleDelete = (chipName) => {
    let newList = selectedChips.filter((chip) => chip !== chipName)
    setSelectedChips(newList)
  }

  const addChip = (nameChip) => {
    if (selectedChips.length < 5) {
      if (!selectedChips.includes(nameChip)) {
        let newList = [...selectedChips, nameChip]
        setSelectedChips(newList)
      }
    }
  }

  const showMessageAlert = ({ message, severity, status }) => {
    dispatch(setHandleAlert({ message, severity, status }))
  }

  const addInterestsFunction = () => {
    setLoading(true)
    let interestsFormData = new FormData()
    interestsFormData.append('interests', JSON.stringify(selectedChips))

    addInterests(interestsFormData)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          const alert = {
            message: response.data.message,
            severity: 'success',
            status: true,
          }

          showMessageAlert(alert)
          setLoading(false)
          history.push('/home')
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

  return (
    <>
      <Grid container component="main" justify="center">
        <Grid item xs={12} sm={8} md={8} xl={5} className={classes.root}>
          <Typography variant="h4" component="h4" className={classes.title}>
            Choose your interests
          </Typography>
          <Typography variant="h5" component="h5" className={classes.subTitle}>
            Get better personalized answers
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            color="textSecondary"
            className={classes.counter}
          >
            {selectedChips.length} / 5
          </Typography>
          <Grid className={classes.rootChips}>
            <Chip
              clickable
              color={
                selectedChips.includes('Social Media') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Social Media') ? 'default' : 'outlined'
              }
              icon={
                selectedChips.includes('Social Media') ? (
                  <Done />
                ) : (
                  <Instagram />
                )
              }
              label="Social Media"
              onClick={() => addChip('Social Media')}
              onDelete={
                selectedChips.includes('Social Media')
                  ? () => handleDelete('Social Media')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Video Games"
              color={
                selectedChips.includes('Video Games') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Video Games') ? 'default' : 'outlined'
              }
              icon={
                selectedChips.includes('Video Games') ? (
                  <Done />
                ) : (
                  <SportsEsports />
                )
              }
              onClick={() => addChip('Video Games')}
              onDelete={
                selectedChips.includes('Video Games')
                  ? () => handleDelete('Video Games')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Food"
              color={selectedChips.includes('Food') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Food') ? 'default' : 'outlined'}
              icon={selectedChips.includes('Food') ? <Done /> : <LocalDining />}
              onClick={() => addChip('Food')}
              onDelete={
                selectedChips.includes('Food')
                  ? () => handleDelete('Food')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Memes"
              color={selectedChips.includes('Memes') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Memes') ? 'default' : 'outlined'}
              icon={
                selectedChips.includes('Memes') ? <Done /> : <InsertEmoticon />
              }
              onClick={() => addChip('Memes')}
              onDelete={
                selectedChips.includes('Memes')
                  ? () => handleDelete('Memes')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Sports"
              color={selectedChips.includes('Sports') ? 'primary' : 'secondary'}
              variant={
                selectedChips.includes('Sports') ? 'default' : 'outlined'
              }
              icon={selectedChips.includes('Sports') ? <Done /> : <Pool />}
              onClick={() => addChip('Sports')}
              onDelete={
                selectedChips.includes('Sports')
                  ? () => handleDelete('Sports')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Fashion"
              color={
                selectedChips.includes('Fashion') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Fashion') ? 'default' : 'outlined'
              }
              icon={selectedChips.includes('Fashion') ? <Done /> : <Stars />}
              onClick={() => addChip('Fashion')}
              onDelete={
                selectedChips.includes('Fashion')
                  ? () => handleDelete('Fashion')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Cars"
              color={selectedChips.includes('Cars') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Cars') ? 'default' : 'outlined'}
              icon={selectedChips.includes('Cars') ? <Done /> : <DriveEta />}
              onClick={() => addChip('Cars')}
              onDelete={
                selectedChips.includes('Cars')
                  ? () => handleDelete('Cars')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Fitness"
              color={
                selectedChips.includes('Fitness') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Fitness') ? 'default' : 'outlined'
              }
              icon={
                selectedChips.includes('Fitness') ? <Done /> : <FitnessCenter />
              }
              onClick={() => addChip('Fitness')}
              onDelete={
                selectedChips.includes('Fitness')
                  ? () => handleDelete('Fitness')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Science"
              color={
                selectedChips.includes('Science') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Science') ? 'default' : 'outlined'
              }
              icon={
                selectedChips.includes('Science') ? (
                  <Done />
                ) : (
                  <WbIncandescent />
                )
              }
              onClick={() => addChip('Science')}
              onDelete={
                selectedChips.includes('Science')
                  ? () => handleDelete('Science')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Movies"
              color={selectedChips.includes('Movies') ? 'primary' : 'secondary'}
              variant={
                selectedChips.includes('Movies') ? 'default' : 'outlined'
              }
              icon={selectedChips.includes('Movies') ? <Done /> : <Movie />}
              onClick={() => addChip('Movies')}
              onDelete={
                selectedChips.includes('Movies')
                  ? () => handleDelete('Movies')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Dance"
              color={selectedChips.includes('Dance') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Dance') ? 'default' : 'outlined'}
              icon={
                selectedChips.includes('Dance') ? <Done /> : <EmojiPeople />
              }
              onClick={() => addChip('Dance')}
              onDelete={
                selectedChips.includes('Dance')
                  ? () => handleDelete('Dance')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Tech"
              color={selectedChips.includes('Tech') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Tech') ? 'default' : 'outlined'}
              icon={
                selectedChips.includes('Tech') ? <Done /> : <ImportantDevices />
              }
              onClick={() => addChip('Tech')}
              onDelete={
                selectedChips.includes('Tech')
                  ? () => handleDelete('Tech')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Learning"
              color={
                selectedChips.includes('Learning') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Learning') ? 'default' : 'outlined'
              }
              icon={
                selectedChips.includes('Learning') ? <Done /> : <MenuBook />
              }
              onClick={() => addChip('Learning')}
              onDelete={
                selectedChips.includes('Learning')
                  ? () => handleDelete('Learning')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Music"
              color={selectedChips.includes('Music') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Music') ? 'default' : 'outlined'}
              icon={selectedChips.includes('Music') ? <Done /> : <MusicNote />}
              onClick={() => addChip('Music')}
              onDelete={
                selectedChips.includes('Music')
                  ? () => handleDelete('Music')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Animals"
              color={
                selectedChips.includes('Animals') ? 'primary' : 'secondary'
              }
              variant={
                selectedChips.includes('Animals') ? 'default' : 'outlined'
              }
              icon={selectedChips.includes('Animals') ? <Done /> : <Pets />}
              onClick={() => addChip('Animals')}
              onDelete={
                selectedChips.includes('Animals')
                  ? () => handleDelete('Animals')
                  : undefined
              }
              className={classes.chip}
            />
            <Chip
              clickable
              label="Art"
              color={selectedChips.includes('Art') ? 'primary' : 'secondary'}
              variant={selectedChips.includes('Art') ? 'default' : 'outlined'}
              icon={selectedChips.includes('Art') ? <Done /> : <Palette />}
              onClick={() => addChip('Art')}
              onDelete={
                selectedChips.includes('Art')
                  ? () => handleDelete('Art')
                  : undefined
              }
              className={classes.chip}
            />
            <Grid container justify="flex-end">
              {!loading ? (
                <Button
                  size="large"
                  color="primary"
                  disabled={selectedChips.length === 5 ? false : true}
                  variant="contained"
                  className={classes.doneButton}
                  onClick={addInterestsFunction}
                >
                  Done
                </Button>
              ) : (
                <Loading />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Profile
