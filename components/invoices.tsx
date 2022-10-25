import React, { FunctionComponent, useContext } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import InvoiceRow from '@/components/invoice-row'
import { InvoiceContext } from '../state/invoice.state'

const EmptyInvoiceContainer = styled.div`
  padding-top: 65px;
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

const InvoiceContainer = styled.div`
  padding-top: 65px;
`

const Bold = styled.span`
  font-weight: bold;
`

const Invoices: FunctionComponent = () => {
  const { state: { invoices } } = useContext(InvoiceContext)

  return (
    invoices.length > 0 ?
      <InvoiceContainer>
        {
          invoices.map((row) => <InvoiceRow key={row.id} id={row.id} dueDate={row.paymentDue} owner={row.clientName} amount={row.total} status={row.status}></InvoiceRow>)
        }
      </InvoiceContainer> :
      <EmptyInvoiceContainer>
        <Image src="/empty.svg" alt="Empty" width={241.34} height={200} />
        <h2>There is nothing here</h2>
        <p>Create an invoice by clicking the <Bold>New Invoice</Bold> button and get started</p>
      </EmptyInvoiceContainer>
  )
}

export default Invoices
