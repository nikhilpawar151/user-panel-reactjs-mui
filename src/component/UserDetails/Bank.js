import React from 'react'
import LableValuePair from '../common/LableValuePair'

const Bank = ({response}) => {
  return (
    response ? <div>
      <LableValuePair label={"IBAN"} value={response.iban} />
      <LableValuePair label={"Card Number"} value={response.cardNumber} />
      <LableValuePair label={"Card Type"} value={response.cardType} />
      <LableValuePair label={"Card Expiry"} value={response.cardExpire} />
      <LableValuePair label={"Currency"} value={response.currency} />
    </div>
    : <></>
  )
}

export default Bank