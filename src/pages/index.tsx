/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'

import { useTheme } from '@/hooks/useTheme'
import { useRouter } from 'next/router'

import { FaSun, FaMoon } from 'react-icons/fa'
import {
  AnimatedContainer,
  EnterButton,
  Wrapper,
  FloatThemeChanger
} from '@/styles/screens'

import INITIAL_ANIMATION from '@/animations/initial'
import { useToast } from '@/hooks/useToast'
import { welcomeInfo } from '@/utils/infoToastMessages'

const App: React.FC = () => {
  const router = useRouter()
  const { theme, changeTheme } = useTheme()
  const { addToast } = useToast()

  useEffect(() => {
    addToast(welcomeInfo)
  }, [])

  return (
    <Wrapper>
      <FloatThemeChanger onClick={() => changeTheme(theme)}>
        {theme.title === 'dark' ? (
          <FaSun color="#ffa500" size={24} />
        ) : (
            <FaMoon color="#3172b7" size={24} />
          )}
      </FloatThemeChanger>
      <AnimatedContainer
        variants={INITIAL_ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <img src="/images/ifood.png" alt="ifood" />
        </h1>
        <h2>Seja bem vindo ao iFood!</h2>
        <EnterButton onClick={() => router.push('/hub')}>
          Ir para o Hub
        </EnterButton>
      </AnimatedContainer>
    </Wrapper>
  )
}

export default App
