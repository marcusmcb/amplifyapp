import React from 'react'
import { Row } from 'react-bootstrap'

import { readRemoteFile } from 'react-papaparse';

const DanceRadioChart = () => {
    readRemoteFile('https://1drv.ms/x/s!Ap_EbLI5WiBGgpBYUWzBeiLE2JViNg?e=JwBK8L', {
        complete: (results) => {
            console.log('Results:', results)
        }
    })
  return (
    <div>
      <Row>
        <img
          src='../images/dance-radio-chart.jpg'
          alt='Dance Radio Top 50 Chart'
          width='200'
          height='200'
        ></img>
      </Row>
    </div>
  )
}

export default DanceRadioChart
