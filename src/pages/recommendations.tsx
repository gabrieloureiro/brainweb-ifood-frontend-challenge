import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import { useFetch } from '@/hooks/useFetch'
import { readRecommendations } from '@/store/modules/recommendations/actions'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Recommendations: React.FC = () => {
  const { data } = useFetch('recommendations')
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(readRecommendations(data))
    }
  }, [data, dispatch])

  if (!data) {
    return <Loader />
  }

  return (
    <Layout
      title="Ofertas | Monte sua pizza!"
      description="Saiba qual a oferta do dia e faça seu pedido!"
      highlightTitle="Selecione a oferta que deseja comprar"
    >
      a
    </Layout>
  )
}

export default Recommendations
