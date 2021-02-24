import React from 'react'
import { useTheme } from '@/hooks/useTheme'

const Home: React.FC = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <div>
      <button onClick={() => changeTheme(theme)}>change theme</button>
    </div>
  )
}

export default Home
