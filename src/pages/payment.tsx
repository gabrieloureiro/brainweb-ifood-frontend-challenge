/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'
import { DefaultProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
import { clearRequest, createRequest } from '@/store/modules/request/actions'
import { GlobalStateInterface } from '@/store/modules/rootReducer'

import options from '@/utils/toLocaleStringOptions'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@/hooks/useToast'
import {
  doughError,
  edgeError,
  fillingError,
  sizeError
} from '@/utils/errorToastMessages'
import {
  CashierWrapper,
  MediumCard,
  SmallCardRow,
  TitleOffer,
  ActionTitle,
  DescriptionOffer,
  IconWp,
  BenefitPoints,
  Tooltip,
  TotalValue,
  PayButton,
  CashierTitle
} from '@/styles/screens/payments'
import { readRecommendations } from '@/store/modules/recommendations/actions'
import { RecommendProps } from '@/models/recommendations'
import { SiIfood } from 'react-icons/si'
import Switch from '@/components/Switch'
import api from '@/services/api'
import { successRequest } from '@/utils/successToastMessages'

const Payment: React.FC = () => {
  const router = useRouter()
  const { data } = useFetch('recommendations')
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const [todayRecommend, setTodayRecommend] = useState({} as RecommendProps)
  const [payWithMoney, setPayWithMoney] = useState(false)
  const [totalValue, setTotalValue] = useState(0)

  const recommendations = useSelector<GlobalStateInterface, RecommendProps[]>(
    state => state.recommendations
  )
  const requestDough = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.dough
  )
  const requestEdge = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.edge
  )
  const requestSize = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.size
  )
  const requestFilling = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.filling
  )

  const smallCardsWithData = [
    {
      id: requestDough?.id,
      type: requestDough?.type,
      value: requestDough?.value
    },
    {
      id: requestEdge?.id,
      type: requestEdge?.type,
      value: requestEdge?.value
    },
    {
      id: requestSize?.id,
      type: requestSize?.type,
      value: requestSize?.value
    },
    {
      id: requestFilling?.id,
      type: requestFilling?.type,
      value: requestFilling?.value
    }
  ]

  const paymentRequest = async ({ payment }: RequestProps) => {
    await dispatch(createRequest({ payment }))
    await api
      .post('requests', {
        id: uuid(),
        dough: requestDough,
        edge: requestEdge,
        size: requestSize,
        filling: requestFilling,
        payment
      })
      .then(response => {
        if (response.status === 201) {
          router.push('/')
          addToast(successRequest)
          setTimeout(() => {
            dispatch(clearRequest({}))
          }, 1500)
        }
      })
  }

  useEffect(() => {
    setTotalValue(
      requestDough?.value +
      requestEdge?.value +
      requestSize?.value +
      requestFilling?.value
    )
  }, [requestDough, requestEdge, requestSize, requestFilling])

  // Carrega o store do redux com dados + seta a promocao do dia
  useEffect(() => {
    if (data) {
      dispatch(readRecommendations(data))
    }
  }, [dispatch, data])

  useEffect(() => {
    const date = new Date()
    if (data && recommendations) {
      const arrayRecommendations = recommendations.filter(item => {
        return item.id === date.getDay()
      })[0]

      const { title, description, value, benefitPoints } = arrayRecommendations

      setTodayRecommend({
        title,
        description,
        value,
        benefitPoints
      })
    }
  }, [recommendations])

  // Verifica se dados anteriores ja foram escolhidos
  useEffect(() => {
    if (!requestDough) {
      router.push('/assemble/dough')
      addToast(doughError)
    } else if (!requestEdge) {
      router.push('/assemble/edge')
      addToast(edgeError)
    } else if (!requestSize) {
      router.push('/assemble/size')
      addToast(sizeError)
    } else if (!requestFilling) {
      router.push('/assemble/filling')
      addToast(fillingError)
    }
  }, [])

  if (
    !data ||
    !requestDough ||
    !requestEdge ||
    !requestSize ||
    !requestFilling
  ) {
    return <Loader />
  }
  return (
    <Layout
      title="Caixa"
      description="Escolha a forma de pagamento"
      highlightTitle="Escolha a forma de pagamento"
    >
      <CashierWrapper>
        <Link href="/recommendations">
          <MediumCard elevation="3">
            <ActionTitle>Não perca a oferta de hoje!</ActionTitle>
            <IconWp>
              <SiIfood color="#fff" size={40} />
            </IconWp>
            <TitleOffer>{todayRecommend.title}</TitleOffer>
            <DescriptionOffer>{todayRecommend.description}</DescriptionOffer>
            <BenefitPoints>
              + {Math.floor(todayRecommend.benefitPoints * 10)} Pontos
              <Tooltip>
                Você ganha {Math.floor(todayRecommend.benefitPoints * 10)}{' '}
                Pontos. Cada ponto vale R$ 0,25 centavos.{' '}
                <strong>
                  {Math.floor(
                    todayRecommend.benefitPoints * 10 * 0.25
                  ).toLocaleString('pt-BR', options)}
                </strong>
              </Tooltip>
            </BenefitPoints>
          </MediumCard>
        </Link>
        <MediumCard elevation="3">
          <CashierTitle>Seu pedido</CashierTitle>
          {smallCardsWithData?.map((card, index) => {
            return (
              <SmallCardRow key={`${card.id}__${index}`}>
                <span>{card.type}</span>
                <p>{card.value.toLocaleString('pt-BR', options)}</p>
              </SmallCardRow>
            )
          })}
          <Switch
            isOn={payWithMoney}
            handleToggle={() => setPayWithMoney(!payWithMoney)}
          />
          <TotalValue>
            <span>Total</span>
            <span>{totalValue.toLocaleString('pt-BR', options)}</span>
          </TotalValue>
          <PayButton
            type="submit"
            onClick={() =>
              paymentRequest({
                payment: {
                  id: uuid(),
                  type: payWithMoney ? 'Dinheiro' : 'Cartão',
                  value: totalValue
                }
              })
            }
          >
            Finalizar pedido
          </PayButton>
        </MediumCard>
      </CashierWrapper>
    </Layout>
  )
}

export default Payment
