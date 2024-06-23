import { Card, Paper, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Details from './Details'
import Address from './Address'
import Company from './Company'
import Bank from './Bank'
import { URLS } from '../../network/NetworkUrls'
import { getApiCall } from '../../network/ApiClient'

const  UserDetails = ({selectUserId}) => {

  const [option, setOption] = useState("details")
  const [response, setResponse] = useState(null)

  const optionChange = (event, value) =>{
    setResponse(null)
    setOption(value)
  }

  useEffect(() => {
    if(selectUserId){
      let url = URLS.INDIVIUAL_USER + selectUserId;
      switch(option) {
        case "details" : url += URLS.USER_DETAILS;  break;
        case "address" : url += URLS.USER_ADDRESS;  break;
        case "company" : url += URLS.USER_COMPANY;  break;
        case "bank": url += URLS.USER_BANK; break;
      }
      getApiCall(url)
      .then((response) => {
        setResponse(response)
      })
      .catch(error => {
        console.log("Error ", error)
      })
    }
    
  }, [option,selectUserId])

  useEffect(() => {
    setOption("details")
  }, [selectUserId])
  
  

  return (
    selectUserId ? <>
      <Paper elevation={1} sx={{height : '80vh', background : "#f6f6f6", }} className='userPanel'>
        <Stack direction={'row'} spacing={2}>
          <ToggleButtonGroup orientation='vertical' value={option} exclusive onChange={optionChange}>
            <ToggleButton value="details">
              Details
            </ToggleButton>
            <ToggleButton value={"address"}>
              Address
            </ToggleButton>
            <ToggleButton value={"company"}>
              Company
            </ToggleButton>
            <ToggleButton value={"bank"}>
              Bank
            </ToggleButton>
          </ToggleButtonGroup>

          <Paper sx={{width : '100%', minHeight : '70vh', padding : 2}}>
            {
              option === "details" 
              ? <Details response={response}/>
              : option === "address" 
              ? <Address response={response?.address} />
              : option === "company"
              ? <Company response={response?.company} />
              : <Bank response={response?.bank}/>
            }
          </Paper>
        </Stack>
      </Paper>
    </> : <></>
  )
}

export default UserDetails