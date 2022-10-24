import React, { Dispatch, createContext, useReducer, FunctionComponent, useMemo } from 'react'
import data from '../public/data.json'

interface Invoice {
  id: string
  paymentDue: string
  clientName: string
  total: number
  status: string
}

interface State {
  invoices: Invoice[]
  statusFilter: string|null
}

const initialState: State = {
  invoices: [...data],
  statusFilter: null
}

export enum Actions {
  FILTER = 'FILTER',
}

interface Action {
  type: Actions.FILTER
  payload: string|null
}

export const invoiceReducer = (state: State, action: Action): State => {
  switch(action.type) {

  case Actions.FILTER: {
    return {
      ...state
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
  children: any
} 

export const InvoiceProvider: FunctionComponent<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState)

  return (
    <InvoiceContext.Provider value={useMemo(() => ({ state, dispatch }), [state, dispatch])}>
      {children}
    </InvoiceContext.Provider>
  )
}
