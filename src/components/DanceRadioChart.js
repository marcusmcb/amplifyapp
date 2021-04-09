import React from 'react'
import { Row } from 'react-bootstrap'

import chart from '../images/dance-radio-chart.jpg'

import { readRemoteFile } from 'react-papaparse'

const DanceRadioChart = () => {    
    
//   readRemoteFile('../data/test-chart.csv', {
//     header: true,
//     download: true,
//     dynamicTyping: true,
//     complete: (results, file) => {
//       console.log('Results:', results, file)
//     },
//   })

  return (
    <div>
      <Row>
        <img src={chart} alt='Dance Radio Top 50 Chart'></img>
      </Row>
    </div>
  )
}

export default DanceRadioChart
