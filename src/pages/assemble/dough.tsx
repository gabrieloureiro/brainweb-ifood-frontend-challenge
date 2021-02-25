import React, { useEffect } from 'react'
import FullRowCard from '@/components/FullRowCard'
import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'
import { DefaultPizzaProps } from '@/models/pizza'
import { readPizzas } from '@/store/modules/pizza/actions'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/dough'
import { GiDoughRoller } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux'
import options from '@/utils/toLocaleStringOptions'

const Dough: React.FC = () => {
  const { data } = useFetch('pizzas')
  const dispatch = useDispatch()
  const doughs = useSelector<GlobalStateInterface, DefaultPizzaProps[]>(
    state => state.pizzas.dough
  )

  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [data, dispatch])

  if (!data) {
    return <Loader />
  }

  return (
    <Layout
      title="Massas | Monte sua pizza!"
      description="Escolha a massa que deseja"
      highlightTitle="Escolha a massa que deseja"
    >
      <FullRowCardList>
        {doughs?.map(dough => {
          return (
            <FullRowCardListItem key={dough.id}>
              <FullRowCard>
                <span>{dough.type}</span>
                <p>{dough.value.toLocaleString('pt-BR', options)}</p>
                <IconWrapper type={dough.id}>
                  <GiDoughRoller size={40} />
                </IconWrapper>
              </FullRowCard>
            </FullRowCardListItem>
          )
        })}
      </FullRowCardList>
    </Layout>
  )
}

export default Dough
