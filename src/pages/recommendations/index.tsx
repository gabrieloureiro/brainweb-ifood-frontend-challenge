import React, { useEffect } from 'react'

import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { RecommendProps } from '@/models/recommendations'

import { useRouter } from 'next/router'
import { useFetch } from '@/hooks/useFetch'

import { useDispatch, useSelector } from 'react-redux'
import { readRecommendations } from '@/store/modules/recommendations/actions'

import Layout from '@/components/Layout'
import Slider from '@/components/Slider'
import Loader from '@/components/Loader'
import { SiIfood } from 'react-icons/si'

import {
  BenefitPoints,
  DescriptionOffer,
  IconWp,
  TitleOffer
} from '@/styles/screens/assemble/payment'
import { CardRecommend } from '@/styles/screens/recommendations'

const Recommendations: React.FC = () => {
  const router = useRouter()
  const { data } = useFetch('recommendations')
  const dispatch = useDispatch()
  const recommendations = useSelector<GlobalStateInterface, RecommendProps[]>(
    state => state.recommendations
  )

  useEffect(() => {
    if (data) {
      dispatch(readRecommendations(data))
    }
  }, [data, dispatch])
  if (!data || !recommendations) {
    return <Loader />
  }

  const getDayOfWeek = (day: number) => {
    switch (day) {
      case 0:
        return 'Domingo'
      case 1:
        return 'Segunda-feira'
      case 2:
        return 'Terça-feira'
      case 3:
        return 'Quarta-feira'
      case 4:
        return 'Quinta-feira'
      case 5:
        return 'Sexta-feira'
      case 6:
        return 'Sábado'
      default:
        break
    }
  }

  const todayRecommendation = (day: number) => {
    const date = new Date()
    if (day === date.getDay()) {
      return true
    } else {
      return false
    }
  }

  return (
    <Layout
      title="Ofertas | Monte sua pizza!"
      description="Saiba qual a oferta do dia e faça seu pedido!"
      highlightTitle="Selecione a oferta do dia para comprá-la"
    >
      <Slider>
        {recommendations.map(rec => {
          return (
            <CardRecommend
              key={rec.id}
              active={todayRecommendation(rec.id)}
              onClick={
                todayRecommendation(rec.id) === true
                  ? () => router.push('/recommendations/payment')
                  : null
              }
            >
              <span>{getDayOfWeek(rec.id)}</span>
              <IconWp>
                <SiIfood color="#FFF" size={40} />
              </IconWp>
              <TitleOffer>{rec.title}</TitleOffer>
              <DescriptionOffer style={{ fontSize: '16px' }}>
                {rec.description}
              </DescriptionOffer>
              <BenefitPoints>
                + {Math.floor(rec.benefitPoints * 10)} Pontos
              </BenefitPoints>
            </CardRecommend>
          )
        })}
      </Slider>
    </Layout>
  )
}

export default Recommendations
