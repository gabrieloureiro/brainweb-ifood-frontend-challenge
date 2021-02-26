import FullRowCard from '@/components/FullRowCard'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'
import { useToast } from '@/hooks/useToast'
import { DefaultProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
import { readPizzas } from '@/store/modules/pizza/actions'
import { createRequest } from '@/store/modules/request/actions'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/assemble'
import { doughError, edgeError, sizeError } from '@/utils/errorToastMessages'
import options from '@/utils/toLocaleStringOptions'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SiIfood } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'

const Filling: React.FC = () => {
  const router = useRouter()
  const { data } = useFetch('pizzas')
  const { addToast } = useToast()
  const dispatch = useDispatch()
  const fillings = useSelector<GlobalStateInterface, DefaultProps[]>(
    state => state.pizzas.filling
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

  const fillingRequest = ({ filling }: RequestProps) => {
    dispatch(createRequest({ filling }))
  }

  // Carrega o store do redux com dados
  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [fillings, dispatch, data])

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
    }
  }, [])

  if (!data || !requestDough || !requestEdge || !requestSize) {
    return <Loader />
  }
  return (
    <Layout
      title="Recheio da pizza"
      description="Escolha o recheio da pizza"
      highlightTitle="Escolha o recheio da pizza"
    >
      <FullRowCardList>
        {fillings?.map(item => {
          return (
            <Link key={item.id} href="/payment">
              <FullRowCardListItem
                onClick={() =>
                  fillingRequest({
                    filling: {
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

export default Filling
