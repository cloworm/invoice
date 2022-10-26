import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Invoice: FunctionComponent = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>Invoice Id: {id}</div>
  )
}

export default Invoice
