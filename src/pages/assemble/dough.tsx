import React, { useEffect } from 'react'
import Link from 'next/link'

import { DefaultProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
import { GlobalStateInterface } from '@/store/modules/rootReducer'

import { useFetch } from '@/hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { createRequest } from '@/store/modules/request/actions'
import { readPizzas } from '@/store/modules/pizza/actions'

import options from '@/utils/toLocaleStringOptions'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import FullRowCard from '@/components/FullRowCard'
import { GiDoughRoller } from 'react-icons/gi'

import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/assemble'

const Dough: React.FC = () => {
  const { data } = useFetch('pizzas')
  const dispatch = useDispatch()
  const doughs = useSelector<GlobalStateInterface, DefaultProps[]>(
    state => state.pizzas.dough
  )

  const doughRequest = ({ dough }: RequestProps) => {
    dispatch(createRequest({ dough }))
  }

  // Carrega o store do redux com dados
  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [doughs, dispatch, data])

  if (!data) {
    return <Loader />
  }

  return (
    <Layout
      title="Massas da pizza"
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
