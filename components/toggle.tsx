import { useTheme } from 'next-themes'
import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

const Button = styled.div`
  cursor: pointer;
`

const Toggle: FunctionComponent = () => {
  const darkMode = useDarkMode(true)

  return (
    <Button onClick={darkMode.toggle}>
      <Image src="/icon-sun.svg" alt="Arrow Right" width={20} height={20} />
    </Button>
  )
}

export default Toggle
