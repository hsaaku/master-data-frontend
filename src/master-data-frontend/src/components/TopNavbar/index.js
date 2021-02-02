import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function TopNavbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Master Data
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
