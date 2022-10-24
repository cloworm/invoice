import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components';
import { InvoiceContext, Actions, Filter } from '../state/invoice.state'
import MultiselectDropdown from '@/components/multiselect-dropdown';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  margin-bottom: 16px;
`

const ListHeader: FunctionComponent = () => {
  const { state: { filter, invoices }, dispatch } = useContext(InvoiceContext)
  const options = ['Draft', 'Pending', 'Paid']

  const handleSelect = (selected: Filter[]) => {
    dispatch({
      type: Actions.FILTER,
      payload: selected
    })
  }

  return (
    <HeaderContainer>
      <div>
        <Title>Invoices</Title>
        <p>
          { invoices.length === 0 ? 'No invoices' : invoices.length + ' Invoices'}
        </p>
      </div>
      <div>
        <MultiselectDropdown label="Filter by status" options={options} onChange={handleSelect} selected={filter} />
      </div>
    </HeaderContainer>
  )
}

export default ListHeader
