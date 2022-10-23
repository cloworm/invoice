import React, { FunctionComponent } from 'react'
import styled from 'styled-components';
import FormattedDate from '@/components/formatted-date';
import FormattedCurrency from '@/components/formatted-currency';
import StatusBadge from '@/components/status-badge';

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
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
      <div>
        <h3>
          <FormattedCurrency currency={amount} />
        </h3>
      </div>
      <div>
        <StatusBadge status={status} />
      </div>
    </Row>
  )
}

export default InvoiceRow
