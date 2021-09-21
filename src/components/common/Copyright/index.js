/* import external modules */
import { Typography } from '@material-ui/core'

const Copyright = () => {
  return (
    <Typography
      align="center"
      variant="body2"
      color="textSecondary"
      style={{ marginBottom: 40 }}
    >
      {'Copyright © Aveil '}
      {new Date().getFullYear()}
      {'. '}
      {'All rights reserved.'}
    </Typography>
  )
}

export default Copyright
