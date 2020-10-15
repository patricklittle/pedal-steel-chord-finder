/** @jsx jsx */
import { jsx } from '@emotion/core';
import Pedal from './Pedal'

const PedalControls = () => {

  const pedals = [
    {
      name: 'A',
      action: 'PEDAL_A'
    },
    {
      name: 'B',
      action: 'PEDAL_B'
    },
    {
      name: 'C',
      action: 'PEDAL_C'
    },
    // {
    //   name: 'E',
    //   alt_name: 'LKL',
    //   action: 'LKL'
    // },
    // {
    //   name: 'F',
    //   alt_name: 'LKR',
    //   action: 'LKR'
    // }
  ]

  return (
    <div>
      <h2 css={{ color: '#fff'}}>Pedals</h2>
      <div css={{display: 'flex'}}>
        {pedals.map((pedal, i) => <Pedal key={i} {...pedal} />)}
      </div>
    </div>
  )
}

export default PedalControls