import { RequestProps } from '@/models/request'

export const readRequest = (request: RequestProps): any => {
  return {
    type: 'READ_REQUEST',
    payload: request
  }
}

export const createRequest = ({
  dough,
  edge,
  filling,
  size,
  payment
}: RequestProps): any => {
  return {
    type: 'CREATE_REQUEST',
    payload: {
      dough,
      edge,
      filling,
      size,
      payment
    }
  }
}
