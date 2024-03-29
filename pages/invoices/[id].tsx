import React, { FunctionComponent, useEffect, useContext, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import StatusBadge from '@/components/status-badge'
import Button from '@/components/button'
import { InvoiceContext, Invoice } from '../../state/invoice.state'
import FormattedDate from '@/components/formatted-date'
import Receipt from '@/components/receipt'
import Back from '@/components/back'

const Header = styled.div`
  background-color: ${props => props.theme.cardBg};
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
  background-color: ${props => props.theme.cardBg};
  padding: 48px;
  border-radius: 8px;
`

const Hash = styled.span`
  color: #888EB0;
`

const Id = styled.h3`
  padding-bottom: 8px;
`

const FlexItemsSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const Address = styled.div`
  text-align: right;
  padding-bottom: 21px;
`

const FieldLabel = styled.p`
  padding-bottom: 12px;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const FieldValue = styled.h3`
  padding-bottom: 8px;
`

const Field = styled.div`
  padding-bottom: 24px;
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
      <Back />
      <Header>
        <FlexItemsCenter>
          <StatusLabel>Status</StatusLabel>
          <StatusBadge status={invoice.status} />
        </FlexItemsCenter>
        <ButtonsContainer>
          <Button variant="secondary" label="Edit" />
          <Button variant="error" label="Delete" />
          <Button variant="primary" label="Mark as Paid" />
        </ButtonsContainer>
      </Header>
      <Details>
        <FlexItemsSpaceBetween>
          <div>
            <Id><Hash>#</Hash>{id}</Id>
            <p><small>{invoice.description}</small></p>
          </div>
          <Address>
            <p><small>{invoice.senderAddress.street}</small></p>
            <p><small>{invoice.senderAddress.city}</small></p>
            <p><small>{invoice.senderAddress.postCode}</small></p>
            <p><small>{invoice.senderAddress.country}</small></p>
          </Address>
        </FlexItemsSpaceBetween>
        <FlexItemsSpaceBetween>
          <FlexColumn>
            <Field>
              <FieldLabel>Invoice Date</FieldLabel>
              <FieldValue>
                <FormattedDate date={invoice.createdAt} />
              </FieldValue>
            </Field>
            <Field>
              <FieldLabel>Payment Due</FieldLabel>
              <FieldValue>
                <FormattedDate date={invoice.paymentDue} />
              </FieldValue>
            </Field>
          </FlexColumn>
          <FlexColumn>
            <FieldLabel>Bill To</FieldLabel>
            <FieldValue>{invoice.clientName}</FieldValue>
            <p><small>{invoice.clientAddress.street}</small></p>
            <p><small>{invoice.clientAddress.city}</small></p>
            <p><small>{invoice.clientAddress.postCode}</small></p>
            <p><small>{invoice.clientAddress.country}</small></p>
          </FlexColumn>
          <FlexColumn>
            <Field>
              <FieldLabel>Sent to</FieldLabel>
              <FieldValue>{invoice.clientEmail}</FieldValue>
            </Field>
          </FlexColumn>
        </FlexItemsSpaceBetween>
        <Receipt invoice={invoice} />
      </Details>
    </div>
  )
}

export default Invoice
