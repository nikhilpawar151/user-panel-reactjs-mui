import { Typography } from '@mui/material'
import React from 'react'

const LableValuePair = ({label, value}) => {
  return (
    <div style={{flexDirection : 'row'}}>
        <Typography variant='h6' fontWeight={'bold'} fontSize={20} component={'span'}>{`${label} : `}</Typography>
        <Typography variant='body1' component={'span'}>{value}</Typography>
    </div>
  )
}

export default LableValuePair