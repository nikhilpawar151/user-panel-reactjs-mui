import React from 'react'
import LableValuePair from '../common/LableValuePair'

const Address = ({response}) => {
  return (
    response ? <div>
      <LableValuePair label={"Address"} value={response.address} />
      <LableValuePair label={"City"} value={response.city} />
      <LableValuePair label={"State"} value={response.state} />
      <LableValuePair label={"Pin Code"} value={response.postalCode} />
      <LableValuePair label={"Country"} value={response.country} />
      <LableValuePair label={"Coordinates"} value={`${response.coordinates.lat},${response.coordinates.lng}`} />
    </div>
    : <></>
  )
}

export default Address