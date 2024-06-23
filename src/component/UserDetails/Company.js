import React from 'react'
import LableValuePair from '../common/LableValuePair'

const Company = ({response}) => {

  return (
    response ? <div>
      <LableValuePair label={"Company Name"} value={response.name} />
      <LableValuePair label={"Department"} value={response.department} />
      <LableValuePair label={"Title"} value={response.title} />
    </div>
    : <></>
  )
}

export default Company