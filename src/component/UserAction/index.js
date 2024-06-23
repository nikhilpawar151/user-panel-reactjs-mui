import { Card, Stack } from '@mui/material'
import React from 'react'

const UserAction = ({selectUserId}) => {
  return (
    selectUserId ? <Stack spacing={2} direction={'column'}>
      <Card sx={{padding : 1}} className="hoverPointer">Edit</Card>
      <Card sx={{padding : 1}} className="hoverPointer">Delete</Card>
      <Card sx={{padding : 1}} className="hoverPointer">Other</Card>
    </Stack> : <></>
  )
}

export default UserAction