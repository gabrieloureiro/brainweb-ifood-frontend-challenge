import { ToastMessage } from '@/hooks/useToast'

export const callToAction: ToastMessage = {
  title: 'Já pediu sua pizza?',
  description: 'Se ainda não pediu, o que está esperando? Monte sua pizza!',
  type: 'info'
}
export const welcomeInfo: ToastMessage = {
  title: 'Bem vindo!!!',
  description:
    '*Esse é um desafio de frontend solicitado pela Brainweb em parceria com o iFood* | Fui feito por Gabriel Loureiro',
  type: 'info'
}
