import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

import { useFetch } from '@/hooks/useFetch'

import { DefaultPizzaProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
import { GlobalStateInterface } from '@/store/modules/rootReducer'

import options from '@/utils/toLocaleStringOptions'

import { useDispatch, useSelector } from 'react-redux'
import { createRequest } from '@/store/modules/request/actions'
import { readPizzas } from '@/store/modules/pizza/actions'

import Loader from '@/components/Loader'
import FullRowCard from '@/components/FullRowCard'
import { GiDoughRoller } from 'react-icons/gi'

import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/assemble'

const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false,
  loading: () => <Loader />
})

const Dough: React.FC = () => {
  const { data } = useFetch('pizzas')
  const dispatch = useDispatch()
  const doughs = useSelector<GlobalStateInterface, DefaultPizzaProps[]>(
    state => state.pizzas.dough
  )
  const requestDough = useSelector<GlobalStateInterface, RequestProps>(
    state => state.request.dough
  )

  const doughRequest = ({ dough }: RequestProps) => {
    dispatch(createRequest({ dough }))
  }

  useEffect(() => {
    if (!doughs) {
      dispatch(readPizzas(data))
    }
  }, [doughs, dispatch, data])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('requestDough', JSON.stringify(requestDough))
    }
  }, [requestDough])

  if (!doughs || !data) {
    return <Loader />
  }

  return (
    <Layout
      title="Massas | Monte sua pizza!"
      description="Escolha a massa que deseja"
      highlightTitle="Escolha a massa que deseja"
    >
      <FullRowCardList>
        {doughs?.map(item => {
          return (
            <Link key={item.id} href="/assemble/edge">
              <FullRowCardListItem
                onClick={() =>
                  doughRequest({
                    dough: {
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
                    <GiDoughRoller color="#fff" size={40} />
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

export default Dough
