import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
  variant: string // icon-primary, primary, secondary, tertiary, error, block
  label: string
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-weight: bold;
  border: none;
  color: #fff;
  height: 48px;
  border-radius: 24px;
  padding: 0 24px;
  display: flex;
  align-items: center;
`

const PrimaryIconButton = styled(ButtonBase)`
  background-color: #7C5DFA;
  padding: 0 16px 0 8px;

  &:hover {
    background-color: #9277FF;
  }
`

const PrimaryButton = styled(ButtonBase)`
  background-color: #7C5DFA;

  &:hover {
    background-color: #9277FF;
  }
`

const SecondaryButton = styled(ButtonBase)`
  background-color: #252945;
  color: #DFE3FA;

  &:hover {
    background-color: #FFF;
    color: #DFE3FA;
  }
`

const TertiaryButton = styled(ButtonBase)`
  background-color: #373B53;
  color: #DFE3FA;

  &:hover {
    background-color: #1E2139;
    color: #DFE3FA;
  }
`

const ErrorButton = styled(ButtonBase)`
  background-color: #EC5757;

  &:hover {
    background-color: #FF9797;
  }
`

const BlockButton = styled(ButtonBase)`
  background-color: #F9FAFE;
  color: #7E88C3;
  width: 100%;

  &:hover {
    background-color: #DFE3FA;
    color: #7E88C3;
  }
`

const IconContainer = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  margin-right: 16px;
  border-radius: 16px;
`

const Button: FunctionComponent<Props> = ({ label, variant }) => {
  if (variant === 'icon-primary') {
    return (
      <PrimaryIconButton>
        <IconContainer><Image src="/icon-plus.svg" alt="New" width={11} height={11} /></IconContainer>
        {label}
      </PrimaryIconButton>
    )
  }

  if (variant === 'primary') {
    return (
      <PrimaryButton>{label}</PrimaryButton>
    )
  }

  if (variant === 'secondary') {
    return (
      <SecondaryButton>{label}</SecondaryButton>
    )
  }

  if (variant === 'tertiary') {
    return (
      <TertiaryButton>{label}</TertiaryButton>
    )
  }

  if (variant === 'error') {
    return (
      <ErrorButton>{label}</ErrorButton>
    )
  }

  if (variant === 'block') {
    return (
      <BlockButton>{label}</BlockButton>
    )
  }

  return (
    <ButtonBase>{label}</ButtonBase>
  )
}

export default Button
