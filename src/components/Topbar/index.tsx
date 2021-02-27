/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React from 'react'
import Link from 'next/link'

import { TopbarInterface } from './types'

import { StyledBar, Brand, Logos, Wrapper } from './styles'
import AccountDropdown from '../AccountDropdown'

const Topbar: React.FC<TopbarInterface> = () => {
  return (
    <StyledBar>
      <Wrapper >
        <Logos >
          <Link href="/hub">
            <Brand src="/images/ifood.png" alt="ifood" />
          </Link>
          <Link href="/hub">
            <Brand src="/images/brainweb.png" alt="brainweb" />
          </Link>
        </Logos>
        <AccountDropdown />
      </Wrapper>
    </StyledBar>
  )
}

export default Topbar
