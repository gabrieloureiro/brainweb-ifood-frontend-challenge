import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Loader from '@/components/Loader'
import {
  FullRowCardList,
  FullRowCardListItem,
  IconWrapper
} from '@/styles/screens/assemble'
import Link from 'next/link'
import FullRowCard from '@/components/FullRowCard'
import options from '@/utils/toLocaleStringOptions'
import { GlobalStateInterface } from '@/store/modules/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { DefaultPizzaProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
import { createRequest } from '@/store/modules/request/actions'
import { SiIfood } from 'react-icons/si'

const Layout = dynamic(() => import('@/components/Layout'), {
  ssr: false,
  loading: () => <Loader />
})

const Edge: React.FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const edges = useSelector<GlobalStateInterface, DefaultPizzaProps[]>(
    state => state.pizzas.edge
  )

  const edgeRequest = ({ edge }: RequestProps) => {
    dispatch(createRequest({ edge }))
  }

  // Verifica se a massa ja foi escolhida
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('requestDough') === null) {
        router.push('/assemble/dough')
      }
    }
  }, [])

  // Loader se massa nao foi escolhida
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('requestDough') === null) {
      return <Loader />
    }
  }

  return (
    <Layout
      title="Bordas | Monte sua pizza!"
      description="Escolha a borda que deseja"
      highlightTitle="Escolha a borda que deseja"
    >
      <FullRowCardList>
        {edges?.map(item => {
          return (
            <Link key={item.id} href="/assemble/edge">
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

export default Edge
