import React from 'react'
import { useToast } from '@/hooks/useToast'

import { TopbarInterface } from './types'

import { StyledBar, Title, Brand, Avatar, Logos, Wrapper } from './styles'

const Topbar: React.FC<TopbarInterface> = ({ highlightTitle }) => {
  const { addToast } = useToast()

  return (
    <StyledBar>
      <Wrapper>
        <Logos>
          <Brand src="/images/ifood.png" alt="ifood" />
          <Brand src="/images/brainweb.png" alt="brainweb" />
        </Logos>
        <Title>{highlightTitle}</Title>
        <Avatar
          src="/images/gl.jpg"
          alt="avatar"
          onClick={() =>
            addToast({
              title: 'Hey! Do you like me? ;)',
              description: 'Check the About me page and contact',
              type: 'info'
            })
          }
        />
      </Wrapper>
    </StyledBar>
  )
}

export default Topbar
