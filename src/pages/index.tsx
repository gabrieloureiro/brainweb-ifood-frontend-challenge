import React, { useEffect, memo, useState } from 'react'
import Link from 'next/link'

import { useToast } from '@/hooks/useToast'
import { useFetch } from '@/hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'

import { readPizzas } from '@/store/modules/pizza/actions'

import homeCards from '@/models/homeCards'
import { welcomeInfo } from '@/utils/infoToastMessages'

import GRADIENT_ANIMATION from '@/animations/gradientAside'

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
} from '@/styles/screens/index'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { DefaultProps } from '@/models/pizza'

const icons = {
  giFullPizza: <GiFullPizza color="#FFF" size={48} />,
  mdLocalOffer: <MdLocalOffer color="#FFF" size={48} />,
  ioRocketOutline: <IoIosRocket color="#FFF" size={48} />
}

const Home: React.FC = () => {
  const { data } = useFetch('pizzas')
  const dispatch = useDispatch()
  const { addToast } = useToast()

  const requestDough = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.dough
  )

  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [data, dispatch])

  useEffect(() => {
    if (!requestDough) {
      addToast(welcomeInfo)
    }
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
              <CardListItem>
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
