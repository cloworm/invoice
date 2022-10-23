import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import data from '../public/data.json'
import InvoiceRow from '@/components/invoice-row';

const InvoiceContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  row-gap: 24px;
  margin: 0 auto;
  text-align: center;
`

const Bold = styled.span`
  font-weight: bold;
`

const Invoices: FunctionComponent = () => {
  return (
    data.length > 0 ?
    <>
      {
        data.map((row) => <InvoiceRow key={row.id} id={row.id} dueDate={row.paymentDue} owner={row.clientName} amount={row.total} status={row.status}></InvoiceRow>)
      }
    </> :
    <InvoiceContainer>
      <Image src="/empty.svg" alt="Empty" width={241.34} height={200} />
      <h2>There is nothing here</h2>
      <p>Create an invoice by clicking the <Bold>New Invoice</Bold> button and get started</p>
    </InvoiceContainer>
  )
}

export default Invoices
