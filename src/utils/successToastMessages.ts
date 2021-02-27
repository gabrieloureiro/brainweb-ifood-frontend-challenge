import { ToastMessage } from '@/hooks/useToast'

export const successRequest: ToastMessage = {
  title: 'Parabéns, você montou sua pizza!',
  description: 'Seu pedido foi cadastrado!',
  type: 'success'
}

export const successRequestRecommend: ToastMessage = {
  title: 'Você comprou a oferta do dia!',
  description: 'Seu pedido foi cadastrado e seus pontos estão disponíveis.',
  type: 'success'
}

export const sucessBenefitPoints: ToastMessage = {
  title: 'Pontos de beneficio',
  description: 'Este é o seu saldo atual, cada ponto equivale a R$ 0,25.',
  type: 'success'
}
