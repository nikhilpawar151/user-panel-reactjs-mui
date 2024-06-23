import React from 'react'
import LableValuePair from '../common/LableValuePair'

const Details = ({response}) => {
    
  return (
    response ? <div>
        <LableValuePair label={"Name"} value={`${response?.firstName} ${response?.maidenName} ${response?.lastName}`} />
        <LableValuePair label={"Age"} value={`${response.age} years`} />
        <LableValuePair label={"Gender"} value={`${response.gender} `} />
        <LableValuePair label={"Email"} value={response.email} />
        <LableValuePair label={"Phone"} value={response.phone} />
        <LableValuePair label={"Birth Date"} value={response.birthDate} />
        <LableValuePair label={"Blood Group"} value={response.bloodGroup} />
        <LableValuePair label={"Eye color"} value={response.eyeColor} />
        <LableValuePair label={"Height"} value={response.height} />
        <LableValuePair label={"Weight"} value={response.weight} />
    </div> : <></>
  )
}

export default Details