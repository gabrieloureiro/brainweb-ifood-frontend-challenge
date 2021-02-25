import useSWR from 'swr'

import api from '@/services/api'
export function useFetch(url: string): any {
  const { data, error, mutate } = useSWR<any>(url, async url => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}
