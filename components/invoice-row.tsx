import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import FormattedDate from '@/components/formatted-date';
import FormattedCurrency from '@/components/formatted-currency';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #1E2139;
  padding: 32px 28px;
  border-radius: 8px;
  margin-bottom: 16px;
`

const Hash = styled.span`
  color: #7E88C3;
`

interface Props {
  id: string
  dueDate: string
  owner: string
  amount: number
  status: string
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
      <div><Hash>#</Hash>{id}</div>
      <div>Due <FormattedDate date={dueDate} /></div>
      <div>{owner}</div>
      <div><FormattedCurrency currency={amount} /></div>
      <div>{status}</div>
    </Row>
  )
}

export default InvoiceRow
