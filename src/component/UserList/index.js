import { Avatar, Box, ButtonBase, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'


const UserList = ({userList, setSelectUserId}) => {

  return (
    
    <Box sx={{height : '80vh', overflow : 'auto', paddingRight : 1}}>
    
      <Stack spacing={2} direction={'column'}>
        {userList && userList.map((user, index) => {
          return <Card key={index} variant='elevation' sx={{ alignItems : 'center', justifyContent : 'center', padding : 1}} >
            <Stack direction={'row'} alignItems={'center'} spacing={2} onClick={() => setSelectUserId(user.id)} className='hoverPointer'>
              <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.image} sx={{}} />
              <Typography variant='body2' textAlign={'center'} component={'span'}>{`${user.firstName} ${user.lastName}`}</Typography>
              </Stack>
            </Card>
        })}
        
      </Stack>
    </Box>
  )
}

export default UserList