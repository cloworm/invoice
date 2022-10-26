import React, { FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import { InvoiceContext, Actions } from '../state/invoice.state'
import MultiselectDropdown from '@/components/multiselect-dropdown'
import Button from '@/components/button'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1`
  padding-bottom: 8px;
`

const ListActions = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;
`

const ListHeader: FunctionComponent = () => {
  const { state: { filter, invoices }, dispatch } = useContext(InvoiceContext)
  const options = ['Draft', 'Pending', 'Paid']

  const handleSelect = (selected: string[]) => {
    console.log('handleSelect', selected)
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
      <ListActions>
        <MultiselectDropdown label="Filter by status" options={options} onChange={handleSelect} selected={filter} />
        <Button label="New Invoice" variant="icon-primary" />
      </ListActions>
    </HeaderContainer>
  )
}

export default ListHeader
