import Layout from '@/components/Layout'
import { useFetch } from '@/hooks/useFetch'
import { readPizzas } from '@/store/modules/pizza/actions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Dough: React.FC = () => {
  const { data } = useFetch('pizzas')
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(readPizzas(data))
    }
  }, [data, dispatch])

  return (
    <Layout
      title="Massas | Monte sua pizza!"
      description="Escolha a massa que deseja"
      highlightTitle="Escolha a massa que deseja"
    >
      a
    </Layout>
  )
}

export default Dough
