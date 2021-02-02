import { CssBaseline, Container, Typography } from '@material-ui/core'
import TopNavbar from './components/TopNavbar'

export default function App() {
  return (
    <>
      <CssBaseline />
      <TopNavbar />
      <Container>
        <Typography variant="h4">
          Hello World
        </Typography>
      </Container>
    </>
  )
}
