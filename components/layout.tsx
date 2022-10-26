import React, { ReactElement } from 'react'
import Toolbar from '@/components/toolbar'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 72px 0;
  max-width: 730px;
  margin: 0 auto;
`

const Layout = ({ children }: { children: ReactElement }): ReactElement => {
  return (
    <div>
      <Toolbar />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
    </div>
  )
}

export default Layout
