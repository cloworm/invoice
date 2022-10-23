import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import styled from 'styled-components';

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 103px;
  background-color: #1E2139;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 103px;
  width: 103px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: linear-gradient(to bottom, #7C6DFA 0%, #7C6DFA 50%, #9277FF 50%, #9277FF 100%);
`

const ToggleContainer = styled.div`
  padding: 28px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #494E6E;
`

const AvatarContainer = styled.div`
  padding: 24px 0;
  display: flex;
  justify-content: center;
`

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  overflow: hidden;
`

const Toolbar: FunctionComponent = () => {
  return (
    <ToolbarContainer>
      <LogoContainer>
        <Image src="/logo.svg" alt="Arrow Right" width={40} height={37.71} />
      </LogoContainer>
      <div>
        <ToggleContainer>
          <Image src="/icon-sun.svg" alt="Arrow Right" width={20} height={20} />
        </ToggleContainer>
        <AvatarContainer>
          <Avatar>
            <Image src="/image-avatar.jpg" alt="Avatar" width={40} height={40} />
          </Avatar>
        </AvatarContainer>
      </div>
    </ToolbarContainer>
  )
}

export default Toolbar
