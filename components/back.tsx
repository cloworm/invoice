import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

const LinkContainer = styled.div`
  display: inline-block;
  margin-bottom: 32px;
  cursor: pointer;
`

const Label = styled.h4`
  padding-left: 24px;
`

const LinkContent = styled.div`
  display: flex;
  align-items: center;
`

const Back: FunctionComponent = () => {
  return (
    <LinkContainer>
      <Link href="/">
        <LinkContent>
          <Image src="/icon-arrow-left.svg" alt="Arrow Left" width={4.23} height={8.46} layout="fixed" />
          <Label>
          Go back
          </Label>
        </LinkContent>
      </Link>
    </LinkContainer>
  )
}

export default Back
