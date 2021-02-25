import React, { useEffect } from 'react'
import { useToast } from '@/hooks/useToast'

import Layout from '@/components/Layout'
import Loader from '@/components/Loader'

const Home: React.FC = () => {
  const { addToast } = useToast()

  useEffect(() => {
    addToast({
      title: 'Seja bem vindo!',
      description:
        'Esse é o desafio da Brainweb + iFood feito por Gabriel Loureiro',
      type: 'info'
    })
  }, [])
  return (
    <Layout title="Home" description="Home" highlightTitle="Monte sua pizza!">
      <Loader />
    </Layout>
  )
}

export default Home
