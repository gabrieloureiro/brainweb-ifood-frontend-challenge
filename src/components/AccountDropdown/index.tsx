/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState, useRef, useCallback, HtmlHTMLAttributes } from 'react'

import { useTheme } from '@/hooks/useTheme'
import { AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiLogOut } from 'react-icons/fi'

import { Container, AnimatedDropdown, NavButton, Avatar } from './styles'
import { DROP_DOWN_ANIMATION } from './animations'

import useEventListener from '@/hooks/useEventListener'
import Loader from '../Loader'
import { useFetch } from '@/hooks/useFetch'
import { RecommendProps } from '@/models/recommendations'
import { SiIfood } from 'react-icons/si'
import { useToast } from '@/hooks/useToast'
import { sucessBenefitPoints } from '@/utils/successToastMessages'
import options from '@/utils/toLocaleStringOptions'
import { useRouter } from 'next/router'

const AccountDropdown: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = () => {
  const { data } = useFetch('requestsRecommendations')
  const { theme, changeTheme } = useTheme()
  const router = useRouter()
  const { addToast } = useToast()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const arrayBenefitPoints = data?.map((req: RecommendProps) => {
    return req.benefitPoints
  })

  const totalBenefitPoints = arrayBenefitPoints?.reduce(
    (total: number, number: number) => total + number, 0)

  const handleDropdownVisibility = (): void => {
    setIsDropdownVisible(true)
  }

  const handleCloseDropdown = useCallback(
    ({ target }: Event): void => {
      if (dropdownRef.current?.contains(target as Node)) {
        return
      }

      setIsDropdownVisible(false)
    },
    [setIsDropdownVisible]
  )

  useEventListener('click', handleCloseDropdown, {
    enabled: isDropdownVisible
  })

  return (
    <Container onClick={handleDropdownVisibility}>
      <Avatar active={isDropdownVisible} src="/images/gl.jpg" alt="avatar" />
      <AnimatePresence>
        {isDropdownVisible && (
          <AnimatedDropdown
            variants={DROP_DOWN_ANIMATION}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={dropdownRef}
          >
            <ul>
              <NavButton onClick={() => changeTheme(theme)}>
                {theme.title === 'light' ? <FiMoon /> : <FiSun />}
                Alterar Tema
              </NavButton>
              <NavButton onClick={() => addToast({
                ...sucessBenefitPoints,
                description: `Você possui ${Math.floor(totalBenefitPoints * 10)} pontos!
                ${(totalBenefitPoints * 0.25).toLocaleString('pt-BR', options)}`
              })
              } >
                <SiIfood />
                {totalBenefitPoints !== undefined ? (
                  `${Math.floor(totalBenefitPoints * 10)} pontos`
                ) : (
                    <Loader size="small" />
                  )}
              </NavButton>
              <NavButton onClick={() => router.push('/')}>
                <FiLogOut />
                Sair
              </NavButton>
            </ul>
          </AnimatedDropdown>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default AccountDropdown
