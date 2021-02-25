import React, { useEffect } from 'react'
import { useToast } from '@/hooks/useToast'

import Layout from '@/components/Layout'

const Home: React.FC = () => {
  const { addToast } = useToast()

  useEffect(() => {
    addToast({
      title: 'Esse sou eu!',
      description: 'Espero que gostem do meu trabalho.',
      type: 'info'
    })
  }, [])
  return (
    <Layout
      title="Gabriel Loureiro"
      description="A page with my description"
      highlightTitle="Gabriel Loureiro"
    >
      oi
    </Layout>
  )
}

export default Home
