import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
interface Props {
  label: string
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
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
  cursor: pointer;
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

  &:checked {
    border: 1px solid #7C5DFA;
    background-color: #7C5DFA;
  }

  &:checked + span::before {
    content: '';
    background-image: url('icon-check.svg');
    display: block;
    text-align: center;
    position: absolute;
    width: 10px;
    height: 8px;
    left: 3px;
    top: 12px;
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

const MultiselectDropdown: FunctionComponent<Props> = ({ options, label, onChange, selected }) => {
  const [show, setShow] = useState<boolean>(false)


  const handleMouseEnter =  () => {
    setShow(true)
  }

  const handleMouseLeave = () => {
    setShow(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target) return

    const value = e.target.value.toUpperCase()

    let newSelectedOptions;
    if (e.target.checked) {
      newSelectedOptions = [...selected, value]
    } else {
      newSelectedOptions = [...selected.filter((option) => {
        return option !== value
      })]
    }

    onChange(newSelectedOptions)
  }

  return (
    <Wrapper data-testid="multiselect-dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownLabel>{label}</DropdownLabel>
      <Image src="/icon-arrow-down.svg" alt="Expand" layout="fixed" width={8.46} height={4.23} />
      {
        show ? 
        <OptionContainer>
          {
            options.map((option) => {
              return (
                <Option key={option} htmlFor={option}>
                  <Input type="checkbox" id={option} name={option} value={option} onChange={handleChange} checked={selected.includes(option.toUpperCase())} />
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
