import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components';
import { InvoiceContext } from '../state/invoice.state'
import MultiselectDropdown from '@/components/multiselect-dropdown';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  margin-bottom: 8px;
`

const ListHeader: FunctionComponent = () => {
  const { state: { invoices } } = useContext(InvoiceContext)
  const options = ['Draft', 'Pending', 'Paid']

  return (
    <HeaderContainer>
      <div>
        <Title>Invoices</Title>
        <p>
          { invoices.length === 0 ? 'No invoices' : invoices.length + ' Invoices'}
        </p>
      </div>
      <div>
        <MultiselectDropdown options={options} />
      </div>
    </HeaderContainer>
  )
}

export default ListHeader
