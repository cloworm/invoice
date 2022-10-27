import React, { Dispatch, createContext, useReducer, FunctionComponent, useMemo } from 'react'
import data from '../public/data.json'

interface Address {
  street: string
  city: string
  postCode: string
  country: string
}

interface Item {
  name: string
  quantity: number
  price: number
  total: number
}

export interface Invoice {
  id: string
  paymentDue: string
  clientName: string
  total: number
  status: string
  description: string
  createdAt: string
  paymentTerms: number
  clientEmail: string
  senderAddress: Address
  clientAddress: Address
  items: Item[]
}

interface State {
  invoices: Invoice[]
  filter: string[]
}

const initialState: State = {
  invoices: [...data],
  filter: []
}

export enum Actions {
  FILTER = 'FILTER',
}

interface Action {
  type: Actions.FILTER
  payload: string[]
}

export const invoiceReducer = (state: State, action: Action): State => {
  switch(action.type) {

  case Actions.FILTER: {
    let newInvoices: Invoice[] = []

    if (action.payload.length === 0) {
      newInvoices = data
    } else {
      newInvoices = data.filter((row) => {
        return action.payload.includes(row.status.toUpperCase())
      })
    }

    return {
      ...state,
      invoices: newInvoices,
      filter: action.payload
    }
  }

  default:
    return initialState
  }
}

type Store = {
  state: State
  dispatch: Dispatch<Action>
}

export const InvoiceContext = createContext<Store>({
  state: initialState,
  dispatch: () => null
})

interface Props {
  children: React.ReactNode;
}

export const InvoiceProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState)

  return (
    <InvoiceContext.Provider value={useMemo(() => ({ state, dispatch }), [state, dispatch])}>
      {children}
    </InvoiceContext.Provider>
  )
}
