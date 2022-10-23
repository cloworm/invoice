import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

const Badge = styled.div`
  width: 104px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(223, 227, 250, 5.71%);
  border-radius: 6px;
  text-transform: capitalize;
  color: #DFE3FA;
`

const Dot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: #DFE3FA;
  margin-right: 8px;
`

interface Props {
  status: string
}

const StatusBadge: FunctionComponent<Props> = ({ status }) => {
  return (
    <Badge>
      <Dot />
      <h4>
        {status}
      </h4>
    </Badge>
  )
}

export default StatusBadge
