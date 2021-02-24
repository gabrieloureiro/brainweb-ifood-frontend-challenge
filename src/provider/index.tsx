import React from 'react'

import { Provider } from 'react-redux'
import { ToastProvider } from '@/hooks/useToast'
import { CustomThemeProvider } from '@/hooks/useTheme'

import store from '@/store'

const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <Provider store={store}>
        <ToastProvider>{children}</ToastProvider>
      </Provider>
    </CustomThemeProvider>
  )
}

export default AppProvider
