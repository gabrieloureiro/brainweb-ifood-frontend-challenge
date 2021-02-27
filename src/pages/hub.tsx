import React, { useEffect, memo } from 'react'
import Link from 'next/link'

import { useToast } from '@/hooks/useToast'
import { useFetch } from '@/hooks/useFetch'
import { useDispatch } from 'react-redux'

import { readPizzas } from '@/store/modules/pizza/actions'
import { readRecommendations } from '@/store/modules/recommendations/actions'

import api from '@/services/api'
import homeCards from '@/models/cardsHub'
import { callToAction } from '@/utils/infoToastMessages'
import GRADIENT_ANIMATION from '@/animations/gradient'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { GiFullPizza } from 'react-icons/gi'
import { MdLocalOffer } from 'react-icons/md'
import { IoIosRocket } from 'react-icons/io'

import {
  Card,
  CardList,
  CardListItem,
  IconWrapper,
  AnimatedContainer
} from '@/styles/screens/hub'
import { DEFAULT_TRANSITION, CARDS_ANIMATION } from '@/animations'

const icons = {
  giFullPizza: <GiFullPizza color="#FFF" size={48} />,
  mdLocalOffer: <MdLocalOffer color="#FFF" size={48} />,
  ioRocketOutline: <IoIosRocket color="#FFF" size={48} />
}

const Home: React.FC = () => {
  const { data } = useFetch('pizzas')
  const dispatch = useDispatch()
  const { addToast } = useToast()

  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
      addToast(callToAction)
    }
  }, [data, dispatch])

  useEffect(() => {
    api.get('recommendations').then(response => {
      if (response.status === 200) {
        dispatch(readRecommendations(response.data))
      }
    })
  }, [])

  if (!data) {
    return <Loader />
  }

  return (
    <Layout
      title="Hub"
      description="Monte sua melhor pizza e realize o pedido."
      highlightTitle="Escolha uma opção para continuar"
    >
      <CardList>
        {homeCards.map(card => {
          return (
            <Link key={card.id} href={card.path}>
              <CardListItem
                variants={CARDS_ANIMATION}
                initial="unMounted"
                animate="mounted"
                exit="unMounted"
                transition={DEFAULT_TRANSITION}
              >
                <Card elevation="3">
                  <IconWrapper type={card.icon}>{icons[card.icon]}</IconWrapper>
                  <span>{card.title}</span>
                  <p>{card.description}</p>
                </Card>
              </CardListItem>
            </Link>
          )
        })}
      </CardList>
      <AnimatedContainer
        variants={GRADIENT_ANIMATION}
        initial="unMounted"
        animate="mounted"
      />
    </Layout>
  )
}

export default memo(Home)
