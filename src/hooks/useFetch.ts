import useSWR from 'swr'

import api from '@/services/api'
import { PizzaProps } from '@/models/pizza'
import { RequestProps } from '@/models/request'
export function useFetch(url: string): any {
  const { data, error, mutate } = useSWR<PizzaProps | RequestProps>(
    url,
    async url => {
      const response = await api.get(url)

      return response.data
    }
  )

  return { data, error, mutate }
}
