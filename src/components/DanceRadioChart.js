import React from 'react'
import { Row, Card } from 'react-bootstrap'

import chart from '../images/mediabase.png'

const DanceRadioChart = () => {    
  return (
    <div>
      <Row>
        <Card>
        <img src={chart} alt='Dance Radio Top 50 Chart'></img>
        </Card>
      </Row>
    </div>
  )
}

export default DanceRadioChart
