import TitleBar from './components/TitleBar'
import NavBar from './components/NavBar'
import MediaCard from './components/MediaCard'
import DanceRadioChart from './components/DanceRadioChart'

import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className='App'>
      <Container>
        <TitleBar />
        <NavBar />
        <MediaCard />
        {/* <DanceRadioChart /> */}
      </Container>
    </div>
  )
}

export default App
