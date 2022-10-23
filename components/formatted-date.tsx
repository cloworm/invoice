import React, { FunctionComponent } from 'react'

interface Props {
  date: string
}

const FormattedDate: FunctionComponent<Props> = ({ date }) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date))
  return (
    <span data-testid="date">{formattedDate}</span>
  )
}

export default FormattedDate
