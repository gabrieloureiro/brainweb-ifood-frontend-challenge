import React, { useEffect } from 'react'
import Link from 'next/link'

import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { DefaultProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'

import { useRouter } from 'next/router'
import { useFetch } from '@/hooks/useFetch'
import { useToast } from '@/hooks/useToast'

import { useDispatch, useSelector } from 'react-redux'
import { createRequest } from '@/store/modules/request/actions'
import { readPizzas } from '@/store/modules/pizza/actions'

import options from '@/utils/toLocaleStringOptions'
import { doughError, edgeError } from '@/utils/errorToastMessages'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import FullRowCard from '@/components/FullRowCard'
import { GiPizzaCutter } from 'react-icons/gi'
import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/assemble'

const Size: React.FC = () => {
  const router = useRouter()
  const { data } = useFetch('pizzas')
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const size = useSelector<GlobalStateInterface, DefaultProps[]>(
    state => state.pizzas.size
  )
  const requestDough = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.dough
  )
  const requestEdge = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.edge
  )

  const sizeRequest = ({ size }: RequestProps) => {
    dispatch(createRequest({ size }))
  }

  // Carrega o store do redux com dados
  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [size, dispatch, data])

  // Verifica se dados anteriores ja foram escolhidos
  useEffect(() => {
    if (!requestDough) {
      router.push('/assemble/dough')
      addToast(doughError)
    } else if (!requestEdge) {
      router.push('/assemble/edge')
      addToast(edgeError)
    }
  }, [])

  if (!data || !requestDough || !requestEdge) {
    return <Loader />
  }

  return (
    <Layout
      title="Tamanho da pizza"
      description="Escolha o tamanho da pizza"
      highlightTitle="Escolha o tamanho da pizza"
    >
      <FullRowCardList>
        {size?.map(item => {
          return (
            <Link key={item.id} href="/assemble/filling">
              <FullRowCardListItem
                onClick={() =>
                  sizeRequest({
                    size: {
                      id: item.id,
                      type: item.type,
                      value: item.value
                    }
                  })
                }
              >
                <FullRowCard index={item.id}>
                  <span>{item.type}</span>
                  <p>{item.value.toLocaleString('pt-BR', options)}</p>
                  <IconWrapper type={item.id}>
                    <GiPizzaCutter color="#fff" size={40} />
                  </IconWrapper>
                </FullRowCard>
              </FullRowCardListItem>
            </Link>
          )
        })}
      </FullRowCardList>
    </Layout>
  )
}

export default Size
