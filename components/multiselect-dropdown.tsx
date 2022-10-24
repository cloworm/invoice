import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface Props {
  options: string[]
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 16px 15px;

  &:hover img {
    transform: rotateX(180deg);
  }
`

const Option = styled.label`
  display: flex;
  align-items: center;
  padding: 8px 0;
  position: relative;
`

const OptionContainer = styled.div`
  width: 192px;
  position: absolute;
  top: 45px;
  left: -20px;
  background: #252945;
  border-radius: 8px;
  padding: 24px;
  z-index: 2;
`

const Input = styled.input`
  height: 16px;
  width: 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 2px;
  background-color: #1E2139;
  cursor: pointer;

  &:checked {
    border: 1px solid #7C5DFA;
    background-color: #7C5DFA;
  }

  &:checked + span::before {
    content: 'x';
    background-image: url('./icon-check.svg');
    display: block;
    text-align: center;
    position: absolute;
    left: 4px;
    top: 10px;
  }

  &:hover {
    border: 1px solid #7C5DFA;
  }

  &:active {
    border: 1px solid #7C5DFA;
  }
`

const Label = styled.span`
  display: inline-block;
  flex-grow: 1;
  font-size: 12px;
  line-height: 15px;
  font-weight: bold;
  letter-spacing: -0.25px;
  padding-left: 13px;
`

const DropdownLabel = styled.h4`
  padding-right: 16px;
`

const MultiselectDropdown: FunctionComponent<Props> = ({ options }) => {
  const [show, setShow] = useState(false)

  const handleMouseEnter =  () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownLabel>Filter by status</DropdownLabel>
      <Image src="/icon-arrow-down.svg" alt="Expand" layout="fixed" width={8.46} height={4.23} />
      {
        show ? 
        <OptionContainer>
          {
            options.map((option) => {
              return (
                <Option key={option} htmlFor={option}>
                  <Input type="checkbox" id={option} name={option} value={option} />
                  <Label>{option}</Label>
                </Option>
              )
            })
          }
        </OptionContainer> :
        null
      }
    </Wrapper>
  )
}

export default MultiselectDropdown
