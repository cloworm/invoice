import React, { FunctionComponent, useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import StatusBadge from '@/components/status-badge'
import Button from '@/components/button'
import { InvoiceContext, Invoice } from '../../state/invoice.state'

const Header = styled.div`
  background-color: #1E2139;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 24px;
`

const FlexItemsCenter = styled.div`
  display: flex;
  align-items: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 8px;
`

const StatusLabel = styled.p`
  padding-right: 16px;
`

const Details = styled.div`
  background-color: #1E2139;
  padding: 48px;
  border-radius: 8px;
`

const Hash = styled.span`
  color: #888EB0;
`

const Invoice: FunctionComponent = () => {
  const [invoice, setInvoice] = useState<Invoice>()
  const { state: { invoices } } = useContext(InvoiceContext)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    const currentInvoice = invoices.find((invoice) => invoice.id === id)
    setInvoice(currentInvoice)
  }, [id, invoices])

  if (!invoice) return <div></div>

  return (
    <div>
      <Header>
        <FlexItemsCenter>
          <StatusLabel>Status</StatusLabel>
          <StatusBadge status={invoice.status} />
        </FlexItemsCenter>
        <ButtonsContainer>
          <Button variant="tertiary" label="Edit" />
          <Button variant="error" label="Delete" />
          <Button variant="primary" label="Mark as Paid" />
        </ButtonsContainer>
      </Header>
      <Details>
        <h3><Hash>#</Hash>{id}</h3>
      </Details>
    </div>
  )
}

export default Invoice
