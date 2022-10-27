import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Invoice } from '../state/invoice.state'
import FormattedCurrency from '@/components/formatted-currency'

interface Props {
  invoice: Invoice
}

const Table = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #252945;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  padding: 0 32px 32px 32px;
`

const ColumnLeft = styled.div`
  text-align: left;
`

const ColumnRight = styled.div`
  text-align: right;
`

const ColumnCenter = styled.div`
  text-align: center;
`

const Head = styled(Row)`
  padding: 32px;
`

const Foot = styled(Row)`
  background-color: #0C0E16;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;

  td {
    padding: 24px 32px;
  }
`

const Receipt: FunctionComponent<Props> = ({ invoice }) => {
  return (
    <Table>
      <Head>
        <ColumnLeft>
          <p><small>Item Name</small></p>
        </ColumnLeft>
        <ColumnCenter>
          <p><small>QTY.</small></p>
        </ColumnCenter>
        <ColumnRight>
          <p><small>Price</small></p>
        </ColumnRight>
        <ColumnRight>
          <p><small>Total</small></p>
        </ColumnRight>
      </Head>
      {
        invoice.items.map((item) => {
          return (
            <Row key={item.name}>
              <ColumnLeft>
                <h4>{item.name}</h4>
              </ColumnLeft>
              <ColumnCenter>
                <h4>{item.quantity}</h4>
              </ColumnCenter>
              <ColumnRight>
                <h4>
                  <FormattedCurrency currency={item.price} />
                </h4>
              </ColumnRight>
              <ColumnRight>
                <h4>
                  <FormattedCurrency currency={item.total} />
                </h4>
              </ColumnRight>
            </Row>
          )
        })
      }
      <Foot>
        <ColumnLeft colSpan={2}>
            Amount Due
        </ColumnLeft>
        <ColumnRight colSpan={2}>
          <h2>
            <FormattedCurrency currency={invoice.total} />
          </h2>
        </ColumnRight>
      </Foot>
    </Table>
  )
}

export default Receipt
