import React, { useEffect } from 'react'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'
import { DefaultProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
import { readPizzas } from '@/store/modules/pizza/actions'
import { createRequest } from '@/store/modules/request/actions'
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

const Payment: React.FC = () => {
  const router = useRouter()
  const { data } = useFetch('pizzas')
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const payments = useSelector<GlobalStateInterface, DefaultProps[]>(
    state => state.pizzas.payment
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

  const paymentRequest = ({ filling }: RequestProps) => {
    dispatch(createRequest({ filling }))
  }

  // Carrega o store do redux com dados
  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [payments, dispatch, data])

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
      title="Caixa | Monte sua pizza!"
      description="Escolha a forma de pagamento"
      highlightTitle="Escolha o recheio da pizza"
    >
      a
    </Layout>
  )
}

export default Payment
