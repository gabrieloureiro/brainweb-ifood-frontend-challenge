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
import { doughError } from '@/utils/errorToastMessages'

import Layout from '@/components/Layout'
import FullRowCard from '@/components/FullRowCard'
import Loader from '@/components/Loader'
import { SiIfood } from 'react-icons/si'

import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/assemble'

const Edge: React.FC = () => {
  const router = useRouter()
  const { data } = useFetch('pizzas')
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const edges = useSelector<GlobalStateInterface, DefaultProps[]>(
    state => state.pizzas.edge
  )
  const requestDough = useSelector<GlobalStateInterface, DefaultProps>(
    state => state.request.dough
  )

  const edgeRequest = ({ edge }: RequestProps) => {
    dispatch(createRequest({ edge }))
  }

  // Carrega o store do redux com dados
  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [edges, dispatch, data])

  // Verifica se dados anteriores ja foram escolhidos
  useEffect(() => {
    if (!requestDough) {
      router.push('/assemble/dough')
      addToast(doughError)
    }
  }, [])

  if (!data || !requestDough) {
    return <Loader />
  }

  return (
    <Layout
      title="Bordas da pizza"
      description="Escolha a borda que deseja"
      highlightTitle="Escolha a borda que deseja"
    >
      <FullRowCardList>
        {edges?.map(item => {
          return (
            <Link key={item.id} href="/assemble/size">
              <FullRowCardListItem
                onClick={() =>
                  edgeRequest({
                    edge: {
                      id: item.id,
                      type: item.type,
                      value: item.value
                    }
                  })
                }
              >
                <FullRowCard index={item.id}>
                  <span>{item.type}</span>
                  <p>
                    {item.value === 0
                      ? 'Grátis'
                      : item.value.toLocaleString('pt-BR', options)}
                  </p>
                  <IconWrapper type={item.id}>
                    <SiIfood color="#fff" size={40} />
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

export default Edge
