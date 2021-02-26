import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { LayoutInterface } from './types'

import Topbar from '@/components/Topbar'
import Container from '@/components/Container'
import { ImWhatsapp } from 'react-icons/im'

import { FloatChat, Message, StepperButton, Title } from './styles'
import { FiChevronLeft } from 'react-icons/fi'

const Layout: React.FC<LayoutInterface> = ({
  title,
  description,
  highlightTitle,
  children
}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title} | iFood</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Topbar />
      <Container>
        <Title>{highlightTitle}</Title>
        {router.pathname !== '/' ? (
          <StepperButton onClick={() => router.back()}>
            <FiChevronLeft color="#FFF" size={24} />
            <span>Voltar</span>
          </StepperButton>
        ) : null}
        {children}
      </Container>
      <FloatChat
        aria-label="whatsapp"
        target="_blank"
        rel="noopener noreferrer external"
        href="https://api.whatsapp.com/send?phone=5585999134041"
      >
        <Message>
          Hello, my name is <strong>Gabriel Loureiro</strong>. Did you enjoy my
          job? Click here or in the button below and talk to me!
        </Message>
        <ImWhatsapp size={24} color="#FFF" />
      </FloatChat>
    </>
  )
}

export default Layout
