import { ToastMessage } from '@/hooks/useToast'

export const doughError: ToastMessage = {
  title: 'Ops! Esqueceu a massa?',
  description: 'Por favor, esolha a massa para continuar com o pedido',
  type: 'error'
}

export const edgeError: ToastMessage = {
  title: 'Ops! Esqueceu a borda?',
  description: 'Por favor, esolha a borda para continuar com o pedido',
  type: 'error'
}

export const sizeError: ToastMessage = {
  title: 'Espera ai! Qual o tamanho?',
  description:
    'Por favor, esolha o tamanho da pizza para continuar com o pedido',
  type: 'error'
}

export const fillingError: ToastMessage = {
  title: 'Esqueceu o principal?',
  description: 'Por favor, esolha o sabor da pizza para continuar com o pedido',
  type: 'error'
}
