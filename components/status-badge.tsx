import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

interface ThemeProps {
  status: string
}

const Badge = styled.div<ThemeProps>`
  width: 104px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => {
    switch (props.status) {
      case "paid":
        return 'rgba(51, 214, 159, 5.71%)'
      
      case 'pending':
        return 'rgba(255, 143, 0, 5.71%)'
    
      default:
        return 'rgba(223, 227, 250, 5.71%)'
    }
  }};
  border-radius: 6px;
  text-transform: capitalize;
  color: ${(props) => {
    switch (props.status) {
      case "paid":
        return '#33D69F';
      
      case "pending":
        return '#FF8F00'
      
      default:
        return '#DFE3FA';
    }
  }} 
`

const Dot = styled.div<ThemeProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${(props) => {
    switch (props.status) {
      case "paid":
        return '#33D69F';
              
      case "pending":
        return '#FF8F00'
      
      default:
        return '#8d91a8';
    }
  }} 
`

interface Props {
  status: string
}

const StatusBadge: FunctionComponent<Props> = ({ status }) => {
  return (
    <Badge status={status}>
      <Dot status={status} />
      <h4>
        {status}
      </h4>
    </Badge>
  )
}

export default StatusBadge
