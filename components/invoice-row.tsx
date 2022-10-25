import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import FormattedDate from '@/components/formatted-date'
import FormattedCurrency from '@/components/formatted-currency'
import StatusBadge from '@/components/status-badge'
import Image from 'next/image'

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 4px;
  align-items: center;
  background-color: #1E2139;
  padding: 0 28px;
  height: 72px;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid #7C5DFA;
  }
`

const Hash = styled.span`
  color: #7E88C3;
`

const AmountColumn = styled.div`
  text-align: right;
  padding-right: 40px;
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
      <div>
        <h4>
          <Hash>#</Hash>{id}
        </h4>
      </div>
      <div>
        <p>
          Due <FormattedDate date={dueDate} />
        </p>
      </div>
      <div>
        <p>
          {owner}
        </p>
      </div>
      <AmountColumn>
        <h3>
          <FormattedCurrency currency={amount} />
        </h3>
      </AmountColumn>
      <div>
        <StatusBadge status={status} />
      </div>
      <div>
        <Image src="/icon-arrow-right.svg" alt="Arrow Right" width={4} height={8} />
      </div>
    </Row>
  )
}

export default InvoiceRow
