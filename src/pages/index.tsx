import React, { useEffect } from 'react'
import { useToast } from '@/hooks/useToast'
import { useTheme } from '@/hooks/useTheme'

const Home: React.FC = () => {
  const { theme, changeTheme } = useTheme()

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
    <div style={{ width: '100%' }}>
      <button onClick={() => changeTheme(theme)}> changeTRheme</button>
    </div>
  )
}

export default Home
