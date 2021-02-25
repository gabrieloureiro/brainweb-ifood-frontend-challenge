import React from 'react'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastProvider } from '@/hooks/useToast'
import { CustomThemeProvider } from '@/hooks/useTheme'

import { store, persistor } from '@/store'

import Loader from '@/components/Loader'

const AppProvider: React.FC = ({ children }) => {
  return (
    <CustomThemeProvider>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <ToastProvider>{children}</ToastProvider>
        </PersistGate>
      </Provider>
    </CustomThemeProvider>
  )
}

export default AppProvider
