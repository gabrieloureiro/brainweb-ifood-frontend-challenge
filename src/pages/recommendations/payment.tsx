import React, { useState } from 'react'

import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { RecommendProps } from '@/models/recommendations'

import { useRouter } from 'next/router'
import { useToast } from '@/hooks/useToast'

import { useDispatch, useSelector } from 'react-redux'
import { createRequestRecommend } from '@/store/modules/requestRecommendation/actions'

import api from '@/services/api'
import { v4 as uuid } from 'uuid'
import { successRequestRecommend } from '@/utils/successToastMessages'
import options from '@/utils/toLocaleStringOptions'

import Layout from '@/components/Layout'
import Switch from '@/components/Switch'
import { Row } from '@/components/Row'
import {
  CashierTitle,
  PayButton,
  TotalValue
} from '@/styles/screens/assemble/payment'
import {
  FullCardRec,
  Description,
  CardRowRec
} from '@/styles/screens/recommendations/payment'

const PaymentRecommendations: React.FC = () => {
  const dispatch = useDispatch()
  const [payWithMoney, setPayWithMoney] = useState(false)
  const today = new Date().getDay()
  const router = useRouter()
  const { addToast } = useToast()

  const todayRecommendation = useSelector<GlobalStateInterface, RecommendProps>(
    state => state.recommendations.filter(rec => rec.id === today)[0]
  )

  const paymentRequestRecommend = async ({
    title,
    description,
    benefitPoints,
    value
  }: RecommendProps) => {
    await dispatch(
      createRequestRecommend({ title, description, benefitPoints, value })
    )
    await api
      .post('requestsRecommendations', {
        id: uuid(),
        title,
        description,
        benefitPoints,
        value
      })
      .then(response => {
        if (response.status === 201) {
          router.push('/hub')
          addToast(successRequestRecommend)
          setTimeout(() => {
            dispatch(createRequestRecommend({}))
          }, 1500)
        }
      })
  }

  return (
    <Layout
      title="Caixa"
      description="Escolha a forma de pagamento"
      highlightTitle="Escolha a forma de pagamento"
    >
      <FullCardRec>
        <CashierTitle>Seu pedido</CashierTitle>
        <CardRowRec justify="spaceBetween">
          <Row>
            <span>{todayRecommendation.title}</span>
          </Row>
          <Row justify="spaceBetween">
            <Description>{todayRecommendation.description}</Description>
            <p>{todayRecommendation.value.toLocaleString('pt-BR', options)}</p>
          </Row>
        </CardRowRec>
        <Switch
          isOn={payWithMoney}
          handleToggle={() => setPayWithMoney(!payWithMoney)}
        />
        <TotalValue>
          <span>Total</span>
          <span>
            {todayRecommendation.value.toLocaleString('pt-BR', options)}
          </span>
        </TotalValue>
        <PayButton
          type="submit"
          onClick={() =>
            paymentRequestRecommend({
              title: todayRecommendation.title,
              description: todayRecommendation.description,
              benefitPoints: todayRecommendation.benefitPoints,
              value: todayRecommendation.value,
              paymentType: payWithMoney ? 'Dinheiro' : 'Cartão'
            })
          }
        >
          Finalizar pedido
        </PayButton>
      </FullCardRec>
    </Layout>
  )
}

export default PaymentRecommendations
