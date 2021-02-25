/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/hooks/useTheme'

import { TopbarInterface } from './types'

import { FaSun, FaMoon } from 'react-icons/fa'

import {
  StyledBar,
  Brand,
  Avatar,
  Logos,
  Wrapper,
  IconWrapper
} from './styles'

const Topbar: React.FC<TopbarInterface> = ({ highlightTitle }) => {
  const { theme, changeTheme } = useTheme()

  return (
    <StyledBar>
      <Wrapper>
        <Logos>
          <Link href="/">
            <Brand src="/images/ifood.png" alt="ifood" />
          </Link>
          <Link href="/">
            <Brand src="/images/brainweb.png" alt="brainweb" />
          </Link>
        </Logos>
        <IconWrapper onClick={() => changeTheme(theme)}>
          {theme.title === 'dark' ? (
            <FaSun color="#ffa500" size={16} />
          ) : (
              <FaMoon color="#3172b7" size={16} />
            )}
        </IconWrapper>
        <Link href="/about">
          <Avatar src="/images/gl.jpg" alt="avatar" />
        </Link>
      </Wrapper>
    </StyledBar>
  )
}

export default Topbar
