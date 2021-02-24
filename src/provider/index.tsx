import React from 'react'

import { Provider } from 'react-redux'
import { BannerProvider } from '@/hooks/useBanner'
import { CustomThemeProvider } from '@/hooks/useTheme'

import store from '@/store'

const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <Provider store={store}>
        <BannerProvider>{children}</BannerProvider>
      </Provider>
    </CustomThemeProvider>
  )
}

export default AppProvider
