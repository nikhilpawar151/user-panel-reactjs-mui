import logo from './logo.svg';
import './App.css';
import { UserAction, UserDetails, UserList } from './component';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import './myStyles/custom.css';
import { useEffect, useState } from 'react';
import { getApiCall } from './network/ApiClient';
import { URLS } from './network/NetworkUrls';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {

  const [userList, setUserList] = useState(null);
  const [selectUserId, setSelectUserId] = useState(null)

  useEffect(() => {
    getApiCall(URLS.USER_LIST)
    .then(response => {
      let res = JSON.parse(JSON.stringify(response));
      setUserList(res.users)
      setSelectUserId(res.users[0].id)
    })
    .catch(error => console.log(error));
  }, []);


  return (
    <Container>
      <Typography variant='h4' sx={{textAlign : 'center', margin : 1, }}  component={"h3"}>User Panel</Typography>
      <Grid container sx={{ }} rowSpacing={1} columnSpacing={{xs : 1, sm : 2, md : 3}} direction={"row"} >
        <Grid  item md="3" sm="3" xs="12" >
          <UserList userList={userList} setSelectUserId={setSelectUserId} />
        </Grid>
        <Grid  item md="7" sm="7" xs="12" >
          <Card sx={{background : "#00FF00"}}>
            <UserDetails selectUserId={selectUserId}/>
          </Card>
          
        </Grid>
        <Grid  item md="2" sm="2" xs="12" sx={{}}>
          <Box sx={{padding : 1}} >
            <UserAction selectUserId={selectUserId}/>
          </Box>
          
        </Grid>
      </Grid>
    </Container>  
      
      
  );
}

export default App;
