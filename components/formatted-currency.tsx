import React, { FunctionComponent } from 'react'

interface Props {
  currency: number
}

const FormattedCurrency: FunctionComponent<Props> = ({ currency }) => {
  const formattedCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP'
  }).format(currency);
  return (
    <span data-testid="currency">{formattedCurrency}</span>
  )
}

export default FormattedCurrency
