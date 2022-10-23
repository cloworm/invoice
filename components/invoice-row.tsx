import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
`

interface Props {
  id: String
  dueDate: String
  owner: String
  amount: number
  status: String
}

const InvoiceRow: FunctionComponent<Props> = ({
  id,
  dueDate,
  owner,
  amount,
  status
}) => {
  return (
    <Row>
      <div>{id}</div>
      <div>{dueDate}</div>
      <div>{owner}</div>
      <div>{amount}</div>
      <div>{status}</div>
    </Row>
  )
}

export default InvoiceRow
